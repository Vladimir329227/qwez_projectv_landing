// Download all Figma-hosted images referenced in TSX files and rewrite to local paths.
// Scans: src/pages/**/*.tsx
// Saves images to: public/figma/
// Rewrites URLs (img src and bg-[url('...')]) to /figma/<hash>.<ext>

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const https = require("https");

// Use the project directory as root (script resides in project/scripts)
const ROOT = path.join(__dirname, "..");
const SRC_PAGES_DIR = path.join(ROOT, "src", "pages");
const PUBLIC_IMG_DIR = path.join(ROOT, "public", "figma");

function ensureDir(dir) {
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}
}

function getAllTsxFiles(dir) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	const files = [];
	for (const entry of entries) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) files.push(...getAllTsxFiles(full));
		else if (entry.isFile() && full.endsWith(".tsx")) files.push(full);
	}
	return files;
}

function sha1(input) {
	return crypto.createHash("sha1").update(input).digest("hex");
}

function extFromContentType(contentType) {
	if (!contentType) return "bin";
	if (contentType.includes("image/png")) return "png";
	if (contentType.includes("image/jpeg")) return "jpg";
	if (contentType.includes("image/webp")) return "webp";
	if (contentType.includes("image/svg")) return "svg";
	if (contentType.includes("image/gif")) return "gif";
	return "bin";
}

function download(url) {
	return new Promise((resolve, reject) => {
		https.get(url, (res) => {
			if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
				// follow redirects
				return resolve(download(res.headers.location));
			}
			if (res.statusCode !== 200) {
				return reject(new Error(`Failed to download ${url}. Status ${res.statusCode}`));
			}
			const chunks = [];
			res.on("data", (d) => chunks.push(d));
			res.on("end", () => {
				const buffer = Buffer.concat(chunks);
				const contentType = res.headers["content-type"] || "";
				resolve({ buffer, contentType });
			});
		}).on("error", reject);
	});
}

async function main() {
	ensureDir(PUBLIC_IMG_DIR);

	const files = getAllTsxFiles(SRC_PAGES_DIR);
	const urlRegex = /https?:\/\/figma-alpha-api[^'"\)\]]+/g;
	const urlToLocal = new Map();

	// Collect URLs
	const fileContents = new Map();
	for (const file of files) {
		const content = fs.readFileSync(file, "utf8");
		fileContents.set(file, content);
		const matches = content.match(urlRegex) || [];
		for (const m of matches) {
			urlToLocal.set(m, null);
		}
	}

	// Download and save
	for (const url of urlToLocal.keys()) {
		try {
			const { buffer, contentType } = await download(url);
			const hash = sha1(url).slice(0, 16);
			const ext = extFromContentType(contentType);
			const filename = `${hash}.${ext}`;
			const outputPath = path.join(PUBLIC_IMG_DIR, filename);
			fs.writeFileSync(outputPath, buffer);
			urlToLocal.set(url, `/figma/${filename}`);
			console.log(`Saved ${url} -> ${urlToLocal.get(url)}`);
		} catch (e) {
			console.error("Failed:", url, e.message);
		}
	}

	// Rewrite files
	for (const [file, content] of fileContents.entries()) {
		let updated = content;
		for (const [remote, localPath] of urlToLocal.entries()) {
			if (!localPath) continue;
			const escaped = remote.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
			const re = new RegExp(escaped, "g");
			updated = updated.replace(re, localPath);
		}
		if (updated !== content) {
			fs.writeFileSync(file, updated, "utf8");
			console.log(`Rewrote: ${path.relative(ROOT, file)}`);
		}
	}

	console.log("Done. Images stored in public/figma and references updated.");
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});


