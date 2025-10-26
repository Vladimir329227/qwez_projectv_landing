export type ProductIngredient = {
  title: string;
  imageSrc: string;
  amount: string;
  showOnProductPage?: boolean; // по умолчанию true
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
  A: {
    key: "A",
    productName: "А | Antioxidant Power",
    productNameColor: "#B93E8F",
    heroBackgroundSrc: "/product-page-images/product_A/bg_capsule_a.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_A/capsule_vitamins_a.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Grape Seed",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/grape_seed_extract.png",
        amount: "80 mg",
        showOnProductPage: true,
      },
      {
        title: "Vitamin C",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_c.png",
        amount: "65 mg",
        showOnProductPage: true,
      },
      {
        title: "Zinc",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/zinc.png",
        amount: "15 mg",
        showOnProductPage: true,
      },
      {
        title: "Polyphenols",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/grape_seed_extract.png",
        amount: "76 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin E",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_e.png",
        amount: "12 mg",
        showOnProductPage: false,
      },
      {
        title: "Ginkgo Biloba",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/ginkgo_biloba_extract.png",
        amount: "10 mg",
        showOnProductPage: false,
      },
      {
        title: "Beta-carotene",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/beta_carotene.png",
        amount: "5 mg",
        showOnProductPage: false,
      },
      {
        title: "Selenium",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/selenium.png",
        amount: "50 mcg",
        showOnProductPage: false,
      },
    ],
    description: "A daily dose of plant-based antioxidants to strengthen immunity, support heart health, and help protect against early ageing and cognitive decline.",
    features: [
      {
        title: "Antioxidant Power",
        text: "High-potency grape seed extract provides superior antioxidant protection against free radicals.",
      },
      {
        title: "Immune Support",
        text: "Vitamin C and zinc work together to strengthen your body's natural defense system.",
      },
      {
        title: "Youthful Skin",
        text: "Helps maintain healthy, radiant skin by protecting against oxidative stress and premature aging.",
      },
    ],
    capsulesBlock: {
      title: "30 capsules",
      text: "Daily antioxidant support with 80mg grape seed extract, 65mg vitamin C, and 15mg zinc. Helps protect cells from oxidative stress, supports immune function, and promotes healthy aging.",
    },
  },
  BR: {
    key: "BR",
    productName: "BR | Strong Nerves",
    productNameColor: "#00B1DA",
    heroBackgroundSrc: "/product-page-images/product_MGR/bg_capsule_mgr.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_BR/capsule_vitamins_br.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Omega-3",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/omega3.png",
        amount: "100 mg",
      },
      {
        title: "Ginkgo Biloba",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/ginkgo_biloba_extract.png",
        amount: "50 mg",
      },
      {
        title: "Vitamin E",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_e.png",
        amount: "15 mg",
      },
    ],
    description: "Brain and nervous system support with omega-3, ginkgo biloba, and vitamin E. This cognitive enhancement formula improves memory, focus, and mental clarity while protecting against neurological stress.",
    features: [
      {
        title: "Cognitive Enhancement",
        text: "Omega-3 fatty acids and ginkgo biloba work together to improve memory, focus, and mental clarity.",
      },
      {
        title: "Brain Protection",
        text: "Helps protect brain cells from oxidative stress and supports healthy neurological function.",
      },
      {
        title: "Stress Relief",
        text: "Vitamin E and ginkgo biloba help reduce mental fatigue and support emotional well-being.",
      },
    ],
    capsulesBlock: {
      title: "30 capsules",
      text: "Cognitive support with 100mg omega-3, 50mg ginkgo biloba, and 15mg vitamin E. Enhances brain function, improves memory, and supports nervous system health.",
    },
  },
  CH: {
    key: "CH",
    productName: "CH | Charged & Energized",
    productNameColor: "#EC6358",
    heroBackgroundSrc: "/product-page-images/product_CH/bg_capsule_ch.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_CH/capsule_vitamins_ch.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Spirulina",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/spirulina.png",
        amount: "75 mg",
        showOnProductPage: true,
      },
      {
        title: "Guarana",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/guarana.png",
        amount: "75 mg",
        showOnProductPage: true,
      },
      {
        title: "Eleutherococcus",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/eleutherococcus.png",
        amount: "50 mg",
        showOnProductPage: true,
      },
      {
        title: "Caffeine",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/caffeine.png",
        amount: "2.62 mg",
        showOnProductPage: false,
      },
      {
        title: "Eleutherosides",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/eleutherococcus.png",
        amount: "0.4 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin C",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_c.png",
        amount: "42 mg",
        showOnProductPage: false,
      },
      {
        title: "Cola Nut",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/cola_nut.png",
        amount: "20 mg",
        showOnProductPage: false,
      },
      {
        title: "Cola Caffeine",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/caffeine.png",
        amount: "0.3 mg",
        showOnProductPage: false,
      },
      {
        title: "Chromium",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/chromium.png",
        amount: "100 mcg",
        showOnProductPage: false,
      },
    ],
    description: "Natural energy boost with spirulina, guarana, and eleutherococcus. This energizing formula increases stamina, reduces fatigue, and supports physical and mental performance throughout the day.",
    features: [
      {
        title: "Natural Energy",
        text: "Spirulina provides sustained energy without the crash associated with caffeine-based stimulants.",
      },
      {
        title: "Performance Boost",
        text: "Guarana and eleutherococcus enhance both physical and mental performance throughout the day.",
      },
      {
        title: "Recovery Support",
        text: "Helps accelerate recovery after exercise and supports the body's natural energy production.",
      },
    ],
    capsulesBlock: {
      title: "60 capsules",
      text: "Natural energy with 75mg spirulina, 10mg guarana, and 15mg eleutherococcus. Boosts physical and mental energy, reduces fatigue, and supports recovery.",
    },
  },
  D: {
    key: "D",
    productName: "D | Body Detox",
    productNameColor: "#5DB23F",
    heroBackgroundSrc: "/product-page-images/product_D/bg_capsule_d.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_D/capsule_vitamins_d.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Cat's Claw",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/cat_cogat.png",
        amount: "150 mg",
      },
      {
        title: "Ginger Root",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/ginger_root.png",
        amount: "50 mg",
      },
    ],
    description: "Deep cellular detox with cat's claw and ginger root. This cleansing formula supports liver function, removes toxins, and provides natural anti-inflammatory benefits for overall wellness.",
    features: [
      {
        title: "Deep Cleansing",
        text: "Cat's claw provides powerful detoxification at the cellular level, removing harmful toxins.",
      },
      {
        title: "Anti-Inflammatory",
        text: "Natural anti-inflammatory properties help reduce inflammation and support overall wellness.",
      },
      {
        title: "Immune Support",
        text: "Ginger root enhances immune function and provides additional antioxidant protection.",
      },
    ],
    capsulesBlock: {
      title: "60 capsules",
      text: "Detox support with 150mg cat's claw and 50mg ginger root. Helps cleanse the body, support liver function, and provide natural anti-inflammatory benefits.",
    },
  },
  DG: {
    key: "DG",
    productName: "DG | Liver protection",
    productNameColor: "#8B4513",
    heroBackgroundSrc: "/product-page-images/product_DG/bg_capsule_dg.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_DG/capsule_vitamins_dg.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Choline",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b.png",
        amount: "85 mg",
      },
      {
        title: "Milk Thistle",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/thistle.png",
        amount: "50 mg",
      },
      {
        title: "Turmeric",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/turmeric.png",
        amount: "25 mg",
      },
    ],
    description: "Liver protection and support with choline, milk thistle, and turmeric. This hepatoprotective formula helps maintain healthy liver function, supports detoxification, and promotes optimal metabolic health.",
    features: [
      {
        title: "Liver Protection",
        text: "Choline and milk thistle work together to protect and support healthy liver function.",
      },
      {
        title: "Metabolic Support",
        text: "Turmeric helps support healthy metabolism and normal blood sugar levels.",
      },
      {
        title: "Detoxification",
        text: "Natural ingredients support the body's natural detoxification processes.",
      },
    ],
    capsulesBlock: {
      title: "30 capsules",
      text: "Liver support with 85mg choline, 50mg milk thistle, and 25mg turmeric. Protects liver cells, supports detoxification, and helps maintain healthy cholesterol levels.",
    },
  },
  DR: {
    key: "DR",
    productName: "DR | Strong Immune System",
    productNameColor: "#EDC08D",
    heroBackgroundSrc: "/product-page-images/product_N/bg_capsule_n.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_DR/capsule_vitamins_dr.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Beta-Glucans",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/lalmin_immune_2.png",
        amount: "40 mg",
      },
      {
        title: "Echinacea",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/echinacea2.png",
        amount: "50 mg",
      },
      {
        title: "Selenium",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/selenium.png",
        amount: "25 mcg",
      },
    ],
    description: "Immune system support with beta-glucans, echinacea, and selenium. This immune-boosting formula helps strengthen natural defenses and supports respiratory health during seasonal changes.",
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
      text: "Immune support with 40mg beta-glucans, 50mg echinacea, and 25mcg selenium. Strengthens natural immunity and supports respiratory health.",
    },
  },
  ENT: {
    key: "ENT",
    productName: "ENT | Youth of Joints",
    productNameColor: "#00846F",
    heroBackgroundSrc: "/product-page-images/product_D/bg_capsule_d.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_ENT/capsule_vitamins_ent.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Glucosamine Sulfate",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/glucosamine.png",
        amount: "516 mg",
      },
      {
        title: "Marine Collagen",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/collagen.png",
        amount: "200 mg",
      },
      {
        title: "Chondroitin",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/chondroitin_sulfate.png",
        amount: "100 mg",
      },
    ],
    description: "Joint health and mobility support with glucosamine, marine collagen, and chondroitin. This comprehensive formula helps maintain healthy joints, supports cartilage repair, and reduces joint discomfort.",
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
      text: "Joint support with 516mg glucosamine, 200mg marine collagen, and 100mg chondroitin. Promotes joint mobility and cartilage health.",
    },
  },
  G: {
    key: "G",
    productName: "G | Health Generator",
    productNameColor: "#6C4533",
    heroBackgroundSrc: "/product-page-images/product_G/bg_capsule_g.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_G/capsule_vitamins_g.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Ginseng Root",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/ginseng_root.png",
        amount: "270 mg",
      },
      {
        title: "Ginger Root",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/ginger_root.png",
        amount: "50 mg",
      },
    ],
    description: "Premium adaptogenic energy with white imperial ginseng and ginger. This exclusive formula provides sustained energy, supports stress management, and promotes overall vitality and wellness.",
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
      text: "Premium adaptogenic energy with 270mg white imperial ginseng and 50mg ginger. Supports energy, stress management, and overall vitality.",
    },
  },
  GQ10: {
    key: "GQ10",
    productName: "GQ10 | Youth Formula",
    productNameColor: "#EC6358",
    heroBackgroundSrc: "/product-page-images/product_CH/bg_capsule_ch.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_GQ10/capsule_vitamins_gq10.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Coenzyme Q10",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/coenzyme_q10.png",
        amount: "5 mg",
      },
      {
        title: "Vitamin C",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_c.png",
        amount: "50 mg",
      },
      {
        title: "Resveratrol",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/pomegranate.png",
        amount: "25 mg",
      },
    ],
    description: "Cellular energy and anti-aging with coenzyme Q10, vitamin C, and resveratrol. This powerful combination supports cellular energy production, provides antioxidant protection, and promotes youthful vitality.",
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
      text: "Cellular energy with 5mg coenzyme Q10, 50mg vitamin C, and 25mg resveratrol. Supports cellular energy production and antioxidant protection.",
    },
  },
  JN: {
    key: "JN",
    productName: "JN | Child Growth",
    productNameColor: "#00B1DA",
    heroBackgroundSrc: "/product-page-images/product_P/bg_capsule_p.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_JN/capsule_vitamins_jn.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Bitter Orange Extract",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/bitter_orange_extract.png",
        amount: "20 mg",
      },
      {
        title: "Vitamin C",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_c.png",
        amount: "30 mg",
      },
      {
        title: "Vitamin D3",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_d3.png",
        amount: "5 mcg",
      },
    ],
    description: "Children's growth and development support with bitter orange, vitamin C, and vitamin D3. This gentle formula provides essential nutrients for healthy growth, cognitive development, and immune support.",
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
      text: "Children's growth support with 20mg bitter orange, 30mg vitamin C, and 5mcg vitamin D3. Supports healthy development and immune function.",
    },
  },
  JNB: {
    key: "JNB",
    productName: "JNB | Royal Growth | Royal Posture",
    productNameColor: "#EC6358",
    heroBackgroundSrc: "/product-page-images/product_CH/bg_capsule_ch.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_JNB/capsule_vitamins_jnb.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Calcium",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/calcium.png",
        amount: "200 mg",
      },
      {
        title: "Vitamin K2",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_k2.png",
        amount: "50 mcg",
      },
      {
        title: "Vitamin D3",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_d3.png",
        amount: "10 mcg",
      },
    ],
    description: "Children's bone and posture support with calcium, vitamin K2, and vitamin D3. This blackcurrant-flavored formula promotes healthy bone development, proper posture, and overall growth.",
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
      text: "Bone support with 200mg calcium, 50mcg vitamin K2, and 10mcg vitamin D3. Promotes healthy bone development and proper posture in children.",
    },
  },
  LV: {
    key: "LV",
    productName: "LV | Radiance of Youth",
    productNameColor: "#B93E8F",
    heroBackgroundSrc: "/product-page-images/product_A/bg_capsule_a.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_LV/capsule_vitamins_lv.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Acai Berry Extract",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/acai_berry_extract.png",
        amount: "100 mg",
      },
      {
        title: "Green Tea Extract",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/green_tea_leaf_extract.png",
        amount: "50 mg",
      },
      {
        title: "Resveratrol",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/pomegranate.png",
        amount: "25 mg",
      },
    ],
    description: "Youthful radiance with acai berry, green tea, and resveratrol. This antioxidant-rich formula helps maintain youthful skin, supports cardiovascular health, and provides natural anti-aging benefits.",
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
      text: "Anti-aging support with 100mg acai berry, 50mg green tea, and 25mg resveratrol. Promotes youthful skin and cardiovascular health.",
    },
  },
  M: {
    key: "M",
    productName: "М | Healthy Heart & Sharp Mind",
    productNameColor: "#FEEA0F",
    heroBackgroundSrc: "/product-page-images/product_M/bg_capsule_m.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_M/capsule_vitamins_m.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Omega-3",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/omega3.png",
        amount: "500 mg",
        showOnProductPage: true,
      },
      {
        title: "Vitamin E",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_e.png",
        amount: "10 mg",
        showOnProductPage: true,
      },
      {
        title: "Eicosapentaenoic Acid",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/omega3.png",
        amount: "81 mg",
        showOnProductPage: false,
      },
      {
        title: "Docosahexaenoic Acid",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/omega3.png",
        amount: "54 mg",
        showOnProductPage: false,
      },
    ],
    description: "Heart and brain health with omega-3 fatty acids and vitamin E. This essential fatty acid formula supports cardiovascular health, cognitive function, and helps maintain healthy blood pressure.",
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
      text: "Heart and brain support with 135mg omega-3 and 10mg vitamin E. Supports cardiovascular health and cognitive function.",
    },
  },
  MDS: {
    key: "MDS",
    productName: "MDS | Mature Beauty",
    productNameColor: "#B93E8F",
    heroBackgroundSrc: "/product-page-images/product_A/bg_capsule_a.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_MDS/capsule_vitamins_mds.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Soy Isoflavones",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/soy.png",
        amount: "50 mg",
      },
      {
        title: "Vitex Agnus-Castus",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/grade_vitex.png",
        amount: "30 mg",
      },
      {
        title: "Calcium",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/calcium.png",
        amount: "200 mg",
      },
    ],
    description: "Mature women's wellness with soy isoflavones, vitex, and calcium. This specialized formula helps support hormonal balance, bone health, and overall wellness during menopause and beyond.",
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
      text: "Women's wellness with 50mg soy isoflavones, 30mg vitex, and 200mg calcium. Supports hormonal balance and bone health.",
    },
  },
  MGR: {
    key: "MGR",
    productName: "MGR | Magic of Magnesium",
    productNameColor: "#267C5D",
    heroBackgroundSrc: "/product-page-images/product_MGR/bg_capsule_mgr.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_MGR/capsule_vitamins_mgr.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Magnesium",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/magnesium.png",
        amount: "46.88 mg",
        showOnProductPage: true,
      },
      {
        title: "St. John's Wort",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/zveroboi.png",
        amount: "20 mg",
        showOnProductPage: true,
      },
      {
        title: "Hawthorn",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/hawthorn.png",
        amount: "20 mg",
        showOnProductPage: true,
      },
      {
        title: "Vitamin C",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_c.png",
        amount: "30 mg",
        showOnProductPage: false,
      },
      {
        title: "Black Horehound",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/black_horehound.png",
        amount: "20 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B1",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b.png",
        amount: "1 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B6",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b6.png",
        amount: "1 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B12",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b12.png",
        amount: "0.6 mcg",
        showOnProductPage: false,
      },
    ],
    description: "Combination of the power of herbal antidepressants with a complex of magnesium and active forms of vitamins to provide calmness and a good mood daily.",
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
      text: "Stress support with 200mg magnesium, 50mg St. John's wort, and 25mg hawthorn. Promotes relaxation and emotional balance.",
    },
  },
  N: {
    key: "N",
    productName: "N | Protection & Prevention",
    productNameColor: "#EDC08D",
    heroBackgroundSrc: "/product-page-images/product_N/bg_capsule_n.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_N/capsule_vitamins_n.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Angelica",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/angelica.png",
        amount: "50 mg",
        showOnProductPage: true,
      },
      {
        title: "Cherry Stalks",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/cherry.png",
        amount: "35 mg",
        showOnProductPage: true,
      },
      {
        title: "Witch Hazel",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/witch_hazel.png",
        amount: "30 mg",
        showOnProductPage: true,
      },
      {
        title: "Bearberry Leaves",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/bearberry.png",
        amount: "35 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B3",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b3.png",
        amount: "18 mg",
        showOnProductPage: false,
      },
      {
        title: "Iron",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/iron.png",
        amount: "7 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B5",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b5.png",
        amount: "6 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B6",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b6.png",
        amount: "2.5 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B1",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b.png",
        amount: "2 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B2",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b2.png",
        amount: "2 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B9",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b9.png",
        amount: "200 mcg",
        showOnProductPage: false,
      },
      {
        title: "Biotin",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/biotin.png",
        amount: "150 mcg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin D3",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_d3.png",
        amount: "10 mcg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B12",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b12.png",
        amount: "2.5 mcg",
        showOnProductPage: false,
      },
    ],
    description: "Urinary tract health with angelica, cherry stalks, and witch hazel. This natural formula supports urinary system function, provides anti-inflammatory benefits, and helps maintain kidney health.",
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
      text: "Urinary health with 50mg angelica, 25mg cherry stalks, and 15mg witch hazel. Supports urinary tract function and kidney health.",
    },
  },
  NPM: {
    key: "NPM",
    productName: "NPM | Nature's Power for Men",
    productNameColor: "#5DB23F",
    heroBackgroundSrc: "/product-page-images/product_D/bg_capsule_d.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_NPM/capsule_vitamins_npm.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Harpagophytum",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/harpagophytum.png",
        amount: "50 mg",
      },
      {
        title: "Echinacea",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/echinacea2.png",
        amount: "40 mg",
      },
      {
        title: "Nigella Sativa",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/black_tmin.png",
        amount: "30 mg",
      },
    ],
    description: "Men's urogenital health with harpagophytum, echinacea, and nigella sativa. This specialized formula supports male reproductive health, immune function, and overall wellness.",
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
      text: "Men's health with 50mg harpagophytum, 40mg echinacea, and 30mg nigella sativa. Supports urogenital health and immune function.",
    },
  },
  OS: {
    key: "OS",
    productName: "OS | Strongs Bones and Joints",
    productNameColor: "#B93E8F",
    heroBackgroundSrc: "/product-page-images/product_A/bg_capsule_a.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_OS/capsule_vitamins_os.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Marine Minerals",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/marine_minerals.png",
        amount: "834 mg",
      },
      {
        title: "Calcium",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/calcium.png",
        amount: "200 mg",
      },
      {
        title: "Vitamin D3",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_d3.png",
        amount: "10 mcg",
      },
    ],
    description: "Bone and joint strength with marine minerals, calcium, and vitamin D3. This comprehensive formula supports bone density, joint health, and helps maintain strong skeletal structure.",
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
      text: "Bone strength with 834mg marine minerals, 200mg calcium, and 10mcg vitamin D3. Supports bone density and joint health.",
    },
  },
  P: {
    key: "P",
    productName: "P | Nervous System Balance",
    productNameColor: "#442682",
    heroBackgroundSrc: "/product-page-images/product_P/bg_capsule_p.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_P/capsule_vitamins_p.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Lavender",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/lavender.png",
        amount: "100 mg",
        showOnProductPage: true,
      },
      {
        title: "Melissa",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/lemon_balm.png",
        amount: "25 mg",
        showOnProductPage: true,
      },
      {
        title: "Valerian",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/valerian.png",
        amount: "25 mg",
        showOnProductPage: true,
      },
      {
        title: "Vitamin B3",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b3.png",
        amount: "16 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B5",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b5.png",
        amount: "9 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B6",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b6.png",
        amount: "1.65 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B2",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b2.png",
        amount: "1.6 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B1",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b.png",
        amount: "1.1 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B9",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b9.png",
        amount: "180 mcg",
        showOnProductPage: false,
      },
      {
        title: "Biotin",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/biotin.png",
        amount: "120 mcg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin B12",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_b12.png",
        amount: "1 mcg",
        showOnProductPage: false,
      },
    ],
    description: "A unique blend of herbal adaptogens, magnesium, and activated B-vitamins to ease stress, restore emotional balance, and support nervous system health.",
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
      text: "Sleep support with 100mg lavender, 10mg lemon balm, and 0.6mg valerian. Promotes relaxation and restful sleep.",
    },
  },
  S: {
    key: "S",
    productName: "S | Ease of Digestion",
    productNameColor: "#E8456A",
    heroBackgroundSrc: "/product-page-images/product_S/bg_capsule_s.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_S/capsule_vitamins_s.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Lactobacillus Rhamnosus",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/lactobacilli.png",
        amount: "40 mg",
      },
      {
        title: "Probiotic Complex",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/lactobacilli.png",
        amount: "40 mg",
      },
      {
        title: "FOS",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/fos.png",
        amount: "300 mg",
      },
    ],
    description: "Digestive health with probiotics and prebiotics. This gut-friendly formula contains live beneficial bacteria and natural prebiotics to support healthy digestion and immune function.",
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
      text: "Digestive support with 40mg Lactobacillus rhamnosus, 40mg lactic acid bacteria, and 300mg prebiotics. Supports gut health and immune function.",
    },
  },
  S2S: {
    key: "S2S",
    productName: "S2S | Keen Eye",
    productNameColor: "#442682",
    heroBackgroundSrc: "/product-page-images/product_P/bg_capsule_p.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_S2S/capsule_vitamins_s2s.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Lutein",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/marigold2.png",
        amount: "10 mg",
      },
      {
        title: "Zeaxanthin",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/marigold2.png",
        amount: "2 mg",
      },
      {
        title: "Blueberry Extract",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/blueberry.png",
        amount: "140 mg",
      },
    ],
    description: "Eye health and vision support with lutein, zeaxanthin, and blueberry extract. This specialized formula helps maintain visual acuity and protects against age-related eye concerns.",
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
      text: "Eye health with 10mg lutein, 2mg zeaxanthin, and 140mg blueberry extract. Supports visual acuity and eye health.",
    },
  },
  SV: {
    key: "SV",
    productName: "SV | Joyful & Beautiful",
    productNameColor: "#F4981A",
    heroBackgroundSrc: "/product-page-images/product_SV/bg_capsule_sv.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_SV/capsule_vitamins_sv.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Garcinia Cambogia",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/extract_cedra_garcinia_cambodzi.png",
        amount: "150 mg",
        showOnProductPage: true,
      },
      {
        title: "Green Tea",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/green_tea_leaf_extract.png",
        amount: "30 mg",
        showOnProductPage: true,
      },
      {
        title: "Chromium",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/chromium.png",
        amount: "100 mcg",
        showOnProductPage: true,
      },
      {
        title: "Hydroxycitric Acid",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/extract_cedra_garcinia_cambodzi.png",
        amount: "75 mg",
        showOnProductPage: false,
      },
      {
        title: "Fucus Thallus",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/fucus.png",
        amount: "70 mg",
        showOnProductPage: false,
      },
      {
        title: "Vitamin C",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_c.png",
        amount: "42 mg",
        showOnProductPage: false,
      },
      {
        title: "Polyphenols",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/green_tea_leaf_extract.png",
        amount: "9 mg",
        showOnProductPage: false,
      },
      {
        title: "Caffeine",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/caffeine.png",
        amount: "1.5 mg",
        showOnProductPage: false,
      },
    ],
    description: "Metabolism and weight management with Garcinia cambogia, green tea, and chromium. This natural formula supports healthy metabolism and helps maintain optimal body weight.",
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
      text: "Metabolism support with 150mg Garcinia cambogia, 50mg green tea, and 5mg chromium. Helps maintain healthy metabolism and weight.",
    },
  },
  VS: {
    key: "VS",
    productName: "VS | Healthy Veins",
    productNameColor: "#5DB23F",
    heroBackgroundSrc: "/product-page-images/product_D/bg_capsule_d.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_VS/capsule_vitamins_vs.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Grape Seed",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/grape_seed_extract.png",
        amount: "100 mg",
      },
      {
        title: "Diosmin",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/pomegranate.png",
        amount: "50 mg",
      },
      {
        title: "Hesperidin",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_c.png",
        amount: "25 mg",
      },
    ],
    description: "Vascular health and circulation with grape seed, diosmin, and hesperidin. This circulatory support formula helps maintain healthy blood vessels and optimal blood flow.",
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
      text: "Vascular support with 100mg grape seed, 50mg diosmin, and 25mg hesperidin. Promotes healthy circulation and vascular function.",
    },
  },
};


// Auto-merge generated product content if present (from CSVs)
// @ts-ignore
let GENERATED_PRODUCTS: Record<string, ProductContent> = {};

// Try to load generated products dynamically (only in browser environment)
try { 
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // In browser, we can't use require, so we'll skip loading generated products
    console.log('Browser environment detected - skipping generated products load');
  } else {
    // This would only work in Node.js environment (build time)
    console.log('Node.js environment detected - generated products loading not implemented for runtime');
  }
} catch (e) {
  console.log('Failed to load GENERATED_PRODUCTS:', (e as Error).message);
}

// Merge generated products into main PRODUCTS object
Object.assign(PRODUCTS, GENERATED_PRODUCTS);
console.log('After merge, PRODUCTS keys:', Object.keys(PRODUCTS));

// Ingredients are now populated directly in the generated file

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
