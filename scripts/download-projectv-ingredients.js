const https = require('https');
const fs = require('fs');
const path = require('path');

// Создаем папку для изображений ингредиентов
const ingredientsDir = path.join(__dirname, '../public/ingredients');
if (!fs.existsSync(ingredientsDir)) {
  fs.mkdirSync(ingredientsDir, { recursive: true });
}

// Список изображений ингредиентов с сайта Project V
const ingredientImages = [
  { name: 'ingredient-01', url: 'https://projectvint.at/storage/components/01.png?v=6' },
  { name: 'ingredient-02', url: 'https://projectvint.at/storage/components/02.png?v=6' },
  { name: 'ingredient-03', url: 'https://projectvint.at/storage/components/03.png?v=6' },
  { name: 'ingredient-04', url: 'https://projectvint.at/storage/components/04.png?v=6' },
  { name: 'ingredient-05', url: 'https://projectvint.at/storage/components/05.png?v=6' },
  { name: 'ingredient-06', url: 'https://projectvint.at/storage/components/06.png?v=6' },
  { name: 'ingredient-07', url: 'https://projectvint.at/storage/components/07.png?v=6' },
  { name: 'ingredient-08', url: 'https://projectvint.at/storage/components/08.png?v=6' },
  { name: 'ingredient-09', url: 'https://projectvint.at/storage/components/09.png?v=6' },
  { name: 'ingredient-10', url: 'https://projectvint.at/storage/components/10.png?v=6' },
  { name: 'ingredient-11', url: 'https://projectvint.at/storage/components/11.png?v=6' },
  { name: 'ingredient-12', url: 'https://projectvint.at/storage/components/12.png?v=6' },
  { name: 'ingredient-13', url: 'https://projectvint.at/storage/components/13.png?v=6' },
  { name: 'ingredient-14', url: 'https://projectvint.at/storage/components/14.png?v=6' },
  { name: 'ingredient-15', url: 'https://projectvint.at/storage/components/15.png?v=6' },
  { name: 'ingredient-16', url: 'https://projectvint.at/storage/components/16.png?v=6' },
  { name: 'ingredient-17', url: 'https://projectvint.at/storage/components/17.png?v=6' },
  { name: 'ingredient-18', url: 'https://projectvint.at/storage/components/18.png?v=6' },
  { name: 'ingredient-19', url: 'https://projectvint.at/storage/components/19.png?v=6' },
  { name: 'ingredient-20', url: 'https://projectvint.at/storage/components/20.png?v=6' },
  { name: 'ingredient-21', url: 'https://projectvint.at/storage/components/21.png?v=6' },
  { name: 'ingredient-22', url: 'https://projectvint.at/storage/components/22.png?v=6' },
  { name: 'ingredient-23', url: 'https://projectvint.at/storage/components/23.png?v=6' },
  { name: 'ingredient-24', url: 'https://projectvint.at/storage/components/24.png?v=6' },
  { name: 'ingredient-25', url: 'https://projectvint.at/storage/components/25.png?v=6' },
  { name: 'ingredient-26', url: 'https://projectvint.at/storage/components/26.png?v=6' },
  { name: 'ingredient-27', url: 'https://projectvint.at/storage/components/27.png?v=6' },
  { name: 'ingredient-28', url: 'https://projectvint.at/storage/components/28.png?v=6' },
  { name: 'ingredient-29', url: 'https://projectvint.at/storage/components/29.png?v=6' },
  { name: 'ingredient-30', url: 'https://projectvint.at/storage/components/30.png?v=6' },
  { name: 'ingredient-31', url: 'https://projectvint.at/storage/components/31.png?v=6' },
  { name: 'ingredient-32', url: 'https://projectvint.at/storage/components/32.png?v=6' },
  { name: 'ingredient-33', url: 'https://projectvint.at/storage/components/33.png?v=6' },
  { name: 'ingredient-34', url: 'https://projectvint.at/storage/components/34.png?v=6' },
  { name: 'ingredient-35', url: 'https://projectvint.at/storage/components/35.png?v=6' },
  { name: 'ingredient-36', url: 'https://projectvint.at/storage/components/36.png?v=6' },
  { name: 'ingredient-37', url: 'https://projectvint.at/storage/components/37.png?v=6' },
  { name: 'ingredient-38', url: 'https://projectvint.at/storage/components/38.png?v=6' },
  { name: 'ingredient-39', url: 'https://projectvint.at/storage/components/39.png?v=6' },
  { name: 'ingredient-40', url: 'https://projectvint.at/storage/components/40.png?v=6' },
  { name: 'ingredient-41', url: 'https://projectvint.at/storage/components/41.png?v=6' },
  { name: 'ingredient-42', url: 'https://projectvint.at/storage/components/42.png?v=6' },
  { name: 'ingredient-43', url: 'https://projectvint.at/storage/components/43.png?v=6' },
  { name: 'ingredient-44', url: 'https://projectvint.at/storage/components/44.png?v=6' },
  { name: 'ingredient-45', url: 'https://projectvint.at/storage/components/45.png?v=6' },
  { name: 'ingredient-46', url: 'https://projectvint.at/storage/components/46.png?v=6' }
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(ingredientsDir, filename));
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve(true);
        });
      } else {
        console.log(`❌ Failed to download: ${filename} (Status: ${response.statusCode})`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.log(`❌ Error downloading ${filename}:`, err.message);
      resolve(false);
    });
  });
}

async function downloadAllImages() {
  console.log('🚀 Starting to download Project V ingredient images...');
  
  let successCount = 0;
  for (const ingredient of ingredientImages) {
    const filename = `${ingredient.name}.png`;
    const success = await downloadImage(ingredient.url, filename);
    if (success) {
      successCount++;
    }
    // Небольшая задержка между запросами
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`✅ Download completed! Successfully downloaded ${successCount}/${ingredientImages.length} images.`);
}

downloadAllImages().catch(console.error);
