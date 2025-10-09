export type ProductIngredient = {
  title: string;
  imageSrc: string;
  amount: string;
};

export type ProductFeature = {
  title: string;
  text: string;
};

export type ProductContent = {
  key: string;
  productName: string;
  productNameColor?: string; // hex or tailwind-compatible color value
  heroBackgroundSrc: string;
  closeIconSrc: string;
  jarImageSrc: string;
  promoBannerSrc: string;
  ingredients: ProductIngredient[];
  description: string;
  features: ProductFeature[];
  capsulesBlock: {
    title: string;
    text: string;
  };
};

export const PRODUCTS: Record<string, ProductContent> = {
  ANTIOX: {
    key: "ANTIOX",
    productName: "Antiox",
    productNameColor: "#EA4B94",
    heroBackgroundSrc: "/product-page-images/product_A/bg_capsule_a.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_A/capsule_vitamins_a.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Grape Seeds",
        imageSrc: "/product-page-images/product_A/fruit_pomegranate.png",
        amount: "80 mg",
      },
      {
        title: "Vitamin C",
        imageSrc: "/product-page-images/product_A/fruit_lemon.png",
        amount: "65 mg",
      },
      {
        title: "Zinc",
        imageSrc: "/product-page-images/product_A/icon_zinc_zn.png",
        amount: "15 mg",
      },
    ],
    description:
      "A is antioxidant power in its most elegant form—with grape seed extract, vitamin C, E, zinc, and ginkgo biloba—working together to protect cells from damage, support collagen, and brighten the skin from within.Not just for beauty. For structure.For women who hold the world—and want to hold onto their glow.",
    features: [
      {
        title: "Fast action",
        text: "The usage of highly active extracts with improved bioavailability.",
      },
      {
        title: "Efficiency",
        text: "The complex includes well-known and well-studied components that have undergone prolonged clinical studies.",
      },
      {
        title: "Plant-derived capsule",
        text: "Suitable for vegetarians, does not contain paraffins.",
      },
    ],
    capsulesBlock: {
      title: "30 capsules",
      text: "An antioxidant formula that protects against infections, toxins and premature aging. Reduces the risk of developing chronic diseases. Slows down the aging process. Promotes cell regeneration. Supports immunity Prevents the development of oxidative processes. Each capsule of A contains 80 mg of grape seed extract and, when taken daily, helps reduce the risk of cardiovascular disease, cleanse blood vessels and neutralize oxidative processes.",
    },
  },
};

PRODUCTS.POWER_OF_MIND = {
  key: "POWER_OF_MIND",
  productName: "Power of Mind",
  productNameColor: "#442682",
  heroBackgroundSrc: "/product-page-images/product_P/bg_capsule_p.png",
  closeIconSrc: "/product-page-images/icon_close_x.png",
  jarImageSrc: "/product-page-images/product_P/capsule_vitamins_p.png",
  promoBannerSrc: "/product-page-images/promo_banner_a.png",
  ingredients: [
    {
      title: "Lavender",
      imageSrc: "/product-page-images/product_P/lavanda.png",
      amount: "15 mg",
    },
    {
      title: "Melissa",
      imageSrc: "/product-page-images/product_P/mellisa.png",
      amount: "10 mg",
    },
    {
      title: "Valerian",
      imageSrc: "/product-page-images/product_P/valerian.png",
      amount: "0.6 mg",
    },
  ],
  description:
    "Each P capsule contains 100 mg of lavender flower extract, which, when taken daily, helps relieve tension and anxiety.",
  features: [
    {
      title: "Fast action",
      text: "The usage of highly active extracts with improved bioavailability.",
    },
    {
      title: "Efficiency",
      text: "The complex includes well-known and well-studied components that have undergone prolonged clinical studies.",
    },
    {
      title: "Plant-derived capsule",
      text: "Suitable for vegetarians, does not contain paraffins.",
    },
  ],
  capsulesBlock: {
    title: "60 capsules",
    text: "An antioxidant formula that protects against infections, toxins and premature aging. Reduces the risk of developing chronic diseases. Slows down the aging process. Promotes cell regeneration. Supports immunity Prevents the development of oxidative processes. Each capsule of A contains 80 mg of grape seed extract and, when taken daily, helps reduce the risk of cardiovascular disease, cleanse blood vessels and neutralize oxidative processes.",
  },
};

PRODUCTS.CHROMEVITAL = {
  key: "CHROMEVITAL",
  productName: "Chromevital",
  productNameColor: "#EC6358",
  heroBackgroundSrc: "/product-page-images/product_CH/bg_capsule_ch.png",
  closeIconSrc: "/product-page-images/icon_close_x.png",
  jarImageSrc: "/product-page-images/product_CH/capsule_vitamins_ch.png",
  promoBannerSrc: "/product-page-images/promo_banner_a.png",
  ingredients: [
    { title: "Guarana", 
      imageSrc: "/product-page-images/product_CH/guarana.png", 
      amount: "10 mg" 
    },
    {
      title: "Spirulina",
      imageSrc: "/product-page-images/product_CH/organic-spirulin.png",
      amount: "15 mg",
    },
    {
      title: "Extract eleutherococcus",
      imageSrc: "/product-page-images/product_CH/eleuterokokka.png",
      amount: "15 mg",
    },
  ],
  description: "Soothes stress without sedating",
  features: [
    {
      title: "Fast action",
      text: "The usage of highly active extracts with improved bioavailability.",
    },
    {
      title: "Efficiency",
      text: "The complex includes well-known and well-studied components that have undergone prolonged clinical studies.",
    },
    {
      title: "Plant-derived capsule",
      text: "Suitable for vegetarians, does not contain paraffins.",
    },
  ],
  capsulesBlock: {
    title: "60 capsules",
    text: "An antioxidant formula that protects against infections, toxins and premature aging. Reduces the risk of developing chronic diseases. Slows down the aging process. Promotes cell regeneration. Supports immunity Prevents the development of oxidative processes. Each capsule of A contains 80 mg of grape seed extract and, when taken daily, helps reduce the risk of cardiovascular disease, cleanse blood vessels and neutralize oxidative processes.",
  },
};

export function getProductContent(
  key?: string,
  overrides?: Partial<ProductContent>
): ProductContent {
  const fallback = PRODUCTS.ANTIOX;
  const normalizedKey = key ? key.toUpperCase() : undefined;
  const base = (normalizedKey && PRODUCTS[normalizedKey]) || fallback;
  return {
    ...base,
    ...overrides,
    // Deep-merge arrays/objects where relevant
    ingredients: overrides?.ingredients ?? base.ingredients,
    features: overrides?.features ?? base.features,
    capsulesBlock: {
      ...base.capsulesBlock,
      ...(overrides?.capsulesBlock || {}),
    },
  };
}

export function registerProduct(content: ProductContent) {
  PRODUCTS[content.key.toUpperCase()] = {
    ...content,
    key: content.key.toUpperCase(),
  };
}
