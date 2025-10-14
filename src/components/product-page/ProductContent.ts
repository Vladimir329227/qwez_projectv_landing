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
      },
      {
        title: "Vitamin C",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_c.png",
        amount: "65 mg",
      },
      {
        title: "Zinc",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/zinc.png",
        amount: "15 mg",
      },
    ],
    description: "An antioxidant formula to protect against infections, toxins, and premature aging. A contains 80 mg of grape seed extract in one capsule and, when taken daily: Reduces the risk of chronic diseases Slows down aging Stimulates cell renewal Supports immunity Blocks oxidative processes",
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
      text: "An antioxidant formula to protect against infections, toxins, and premature aging. A contains 80 mg of grape seed extract in one capsule and, when taken daily: Reduces the risk of chronic diseases Slows down aging Stimulates cell renewal Supports immunity Blocks oxidative processes",
    },
  },
  BR: {
    key: "BR",
    productName: "BR | Strong nerves",
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
    description: "Your daily protection for your brain and nervous system. BR contains docosahexaenoic acid (DHA), vitamins B5 and B6, and ginkgo biloba extract. When taken daily, it: Protects the brain and nervous system from stress and overload Improves cognitive function and supports clarity of thought Lowers cholesterol levels, promoting vascular cleansing Neutralizes free radicals, slowing down neurodegenerative processes",
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
      text: "Your daily protection for your brain and nervous system. BR contains docosahexaenoic acid (DHA), vitamins B5 and B6, and ginkgo biloba extract. When taken daily, it: Protects the brain and nervous system from stress and overload Improves cognitive function and supports clarity of thought Lowers cholesterol levels, promoting vascular cleansing Neutralizes free radicals, slowing down neurodegenerative processes",
    },
  },
  CH: {
    key: "CH",
    productName: "CH | Charged and Energized",
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
      },
      {
        title: "Guarana",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/guarana.png",
        amount: "10 mg",
      },
      {
        title: "Eleutherococcus",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/eleutherococcus.png",
        amount: "15 mg",
      },
    ],
    description: "A multi-component natural energy supplement based on eleutherococcus, spirulina, and guarana. Each CH capsule contains 75 mg of spirulina microalgae and, when taken daily: Increases mental and physical performance Accelerates recovery after exercise and colds Helps reduce fatigue Protects against overexertion",
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
      title: "60 capsules ",
      text: "A multi-component natural energy supplement based on eleutherococcus, spirulina, and guarana. Each CH capsule contains 75 mg of spirulina microalgae and, when taken daily: Increases mental and physical performance Accelerates recovery after exercise and colds Helps reduce fatigue Protects against overexertion",
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
    description: "A natural complex for cleansing the body at the cellular level. Product D contains 150 mg of cat's claw powder and 50 mg of cat's claw extract in one capsule, and, when taken daily: Cleanses the body of toxins and waste Normalizes the immune system Has anti-inflammatory effects Is an effective natural antibiotic",
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
      title: "60 capsules ",
      text: "A natural complex for cleansing the body at the cellular level. Product D contains 150 mg of cat's claw powder and 50 mg of cat's claw extract in one capsule, and, when taken daily: Cleanses the body of toxins and waste Normalizes the immune system Has anti-inflammatory effects Is an effective natural antibiotic",
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
    description: "Support and restore your body's primary filter—the liver. Natural ingredients for cell protection, detoxification, and energy. Each DG capsule contains 85 mg of choline, and when taken daily, it: Supports healthy liver function Regulates cholesterol levels Has antioxidant and detoxifying effects Boosts energy and vitality Helps normalize blood sugar levels",
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
      text: "Support and restore your body's primary filter—the liver. Natural ingredients for cell protection, detoxification, and energy. Each DG capsule contains 85 mg of choline, and when taken daily, it: Supports healthy liver function Regulates cholesterol levels Has antioxidant and detoxifying effects Boosts energy and vitality Helps normalize blood sugar levels",
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
    description: "Healthy gut life. Each DR capsule contains 175 mg of the unique fermented food blend Lalmin Immune™ based on yeast, including 40 mg of β-1,3/1,6-glucans, and when taken regularly, it: Supports the immune system Relieves symptoms of respiratory tract inflammation Normalizes intestinal microflora",
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
      text: "Healthy gut life. Each DR capsule contains 175 mg of the unique fermented food blend Lalmin Immune™ based on yeast, including 40 mg of β-1,3/1,6-glucans, and when taken regularly, it: Supports the immune system Relieves symptoms of respiratory tract inflammation Normalizes intestinal microflora",
    },
  },
  ENT: {
    key: "ENT",
    productName: "ENT | Youth of joints",
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
        imageSrc: "/product-page-images/ingredients-google/Ingridients/chondroitin_sulfate.tif",
        amount: "100 mg",
      },
    ],
    description: "Youth and vitality with every confident step. ENT contains 516 mg of glucosamine sulfate in two capsules, and when taken daily, it: Restores cartilage tissue and improves joint mobility Has a pronounced anti-inflammatory and analgesic effect Supports normal connective tissue formation Prevents depletion and destruction of bone and cartilage structure",
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
      text: "Youth and vitality with every confident step. ENT contains 516 mg of glucosamine sulfate in two capsules, and when taken daily, it: Restores cartilage tissue and improves joint mobility Has a pronounced anti-inflammatory and analgesic effect Supports normal connective tissue formation Prevents depletion and destruction of bone and cartilage structure",
    },
  },
  G: {
    key: "G",
    productName: "G | HEALTH GENERATOR",
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
    description: "An adaptogenic formula for restoring energy, harmony, and protecting your body. Only 1 out of 20 roots that have undergone a 6-year cultivation cycle in the mountains is selected to create G cryogenic powder.\nEach capsule of G contains 270 mg of cryogenic white imperial ginseng powder, a balanced complex of saponins, organic germanium, amino acids, and minerals. When taken daily: Improves memory, concentration, and reduces stress levels Accelerates metabolism and supports liver function Normalizes blood pressure and improves blood circulation Regulates hormonal balance, alleviating symptoms of menstrual pain and menopause Nourishes the skin and strengthens hair, preventing hair loss",
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
      title: "60 capsules ",
      text: "An adaptogenic formula for restoring energy, harmony, and protecting your body. Only 1 out of 20 roots that have undergone a 6-year cultivation cycle in the mountains is selected to create G cryogenic powder.\nEach capsule of G contains 270 mg of cryogenic white imperial ginseng powder, a balanced complex of saponins, organic germanium, amino acids, and minerals. When taken daily: Improves memory, concentration, and reduces stress levels Accelerates metabolism and supports liver function Normalizes blood pressure and improves blood circulation Regulates hormonal balance, alleviating symptoms of menstrual pain and menopause Nourishes the skin and strengthens hair, preventing hair loss",
    },
  },
  GQ10: {
    key: "GQ10",
    productName: "GQ10 | Youth formula",
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
    description: "A natural energy activator complex. GQ10 contains 5 mg of coenzyme Q10 in one capsule, and when taken daily, it: Creates powerful antioxidant protection for organs and body systems Stimulates the process of cellular energy exchange Improves skin turgor, eliminating the appearance of age-related changes Prevents the development of cardiovascular diseases",
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
      title: "60 capsules ",
      text: "A natural energy activator complex. GQ10 contains 5 mg of coenzyme Q10 in one capsule, and when taken daily, it: Creates powerful antioxidant protection for organs and body systems Stimulates the process of cellular energy exchange Improves skin turgor, eliminating the appearance of age-related changes Prevents the development of cardiovascular diseases",
    },
  },
  JN: {
    key: "JN",
    productName: "JN | Child growth",
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
    description: "A vitamin and mineral complex for the harmonious development of children's bodies. One capsule contains 20 mg of orange extract, and when taken regularly, it: Provides children with the nutrients necessary for full growth Increases cognitive and motor activity Promotes the formation of good health in children Prevents fatigue and overexcitement",
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
      text: "A vitamin and mineral complex for the harmonious development of children's bodies. One capsule contains 20 mg of orange extract, and when taken regularly, it: Provides children with the nutrients necessary for full growth Increases cognitive and motor activity Promotes the formation of good health in children Prevents fatigue and overexcitement",
    },
  },
  JNB: {
    key: "JNB",
    productName: "JNB | Royal growth | Royal posture",
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
    description: "A blackcurrant-flavored nutraceutical for the harmonious growth and ideal posture of children. With regular use, it: Promotes proper posture and harmonious growth Strengthens bones, teeth, and hair Supports immunity, heart, and nerves Strengthens ligaments and tendons\nThe balanced complex of vitamins and minerals helps replenish calcium, strengthen the bone and muscle system, normalize metabolism, and the functioning of the heart and nervous system.",
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
      text: "A blackcurrant-flavored nutraceutical for the harmonious growth and ideal posture of children. With regular use, it: Promotes proper posture and harmonious growth Strengthens bones, teeth, and hair Supports immunity, heart, and nerves Strengthens ligaments and tendons\nThe balanced complex of vitamins and minerals helps replenish calcium, strengthen the bone and muscle system, normalize metabolism, and the functioning of the heart and nervous system.",
    },
  },
  LV: {
    key: "LV",
    productName: "LV | Radiance of youth",
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
    description: "Antioxidant protection against aging processes. LV contains 100 mg of acai berry extract in one capsule, and when taken daily, it: Supports health and beauty thanks to the action of antioxidants Helps reduce the risk of cardiovascular disease Has immunomodulatory and anti-inflammatory effects Improves quality of life by helping to relieve fatigue",
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
      title: "60 capsules ",
      text: "Antioxidant protection against aging processes. LV contains 100 mg of acai berry extract in one capsule, and when taken daily, it: Supports health and beauty thanks to the action of antioxidants Helps reduce the risk of cardiovascular disease Has immunomodulatory and anti-inflammatory effects Improves quality of life by helping to relieve fatigue",
    },
  },
  M: {
    key: "M",
    productName: "М | Healthy Heart and Sharp Mind",
    productNameColor: "#FEEA0F",
    heroBackgroundSrc: "/product-page-images/product_M/bg_capsule_m.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_M/capsule_vitamins_m.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Omega-3",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/omega3.png",
        amount: "135 mg",
      },
      {
        title: "Vitamin E",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/vitamin_e.png",
        amount: "10 mg",
      },
    ],
    description: "A complex of polyunsaturated fatty acids for the heart, blood vessels, brain, and skin. Product M contains 500 mg of fish oil and 135 mg of omega-3 polyunsaturated fatty acids (eicosapentaenoic acid, docosahexaenoic acid) in one capsule and, when taken daily: Prevents the destruction of brain neurons Slows down the aging process Prevents the development of cardiovascular diseases Normalizes blood pressure Improves intelligence.",
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
      text: "A complex of polyunsaturated fatty acids for the heart, blood vessels, brain, and skin. Product M contains 500 mg of fish oil and 135 mg of omega-3 polyunsaturated fatty acids (eicosapentaenoic acid, docosahexaenoic acid) in one capsule and, when taken daily: Prevents the destruction of brain neurons Slows down the aging process Prevents the development of cardiovascular diseases Normalizes blood pressure Improves intelligence.",
    },
  },
  MDS: {
    key: "MDS",
    productName: "MDS | MATURE BEAUTY",
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
    description: "A complex of phytoestrogens, vitamins, and minerals to support beauty and health in mature women. MDS contains soy isoflavones, vitamin D3, and calcium bisglycinate in one capsule, and when taken daily, it: Helps maintain the necessary level of estrogen Reduces the negative symptoms of menopause Improves the condition of teeth, hair, and bone and cartilage tissue Helps slow down the aging process",
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
      text: "A complex of phytoestrogens, vitamins, and minerals to support beauty and health in mature women. MDS contains soy isoflavones, vitamin D3, and calcium bisglycinate in one capsule, and when taken daily, it: Helps maintain the necessary level of estrogen Reduces the negative symptoms of menopause Improves the condition of teeth, hair, and bone and cartilage tissue Helps slow down the aging process",
    },
  },
  MGR: {
    key: "MGR",
    productName: "MGR | Magic of magnesium",
    productNameColor: "#267C5D",
    heroBackgroundSrc: "/product-page-images/product_MGR/bg_capsule_mgr.png",
    closeIconSrc: "/product-page-images/icon_close_x.png",
    jarImageSrc: "/product-page-images/product_MGR/capsule_vitamins_mgr.png",
    promoBannerSrc: "/product-page-images/product_A/promo_banner_a.png",
    ingredients: [
      {
        title: "Magnesium",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/magnesium.png",
        amount: "200 mg",
      },
      {
        title: "St. John's Wort",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/zveroboi.png",
        amount: "50 mg",
      },
      {
        title: "Hawthorn",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/hawthorn.png",
        amount: "25 mg",
      },
    ],
    description: "A complex for supporting the nervous system with plant adaptogens, magnesium, and active vitamins, which helps maintain inner calm and resistance to stress: Promotes muscle relaxation and reduces physical tension Strengthens the nervous system and increases resistance to stress Normalizes serotonin levels, maintaining a stable emotional background",
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
      title: "60 capsules ",
      text: "A complex for supporting the nervous system with plant adaptogens, magnesium, and active vitamins, which helps maintain inner calm and resistance to stress: Promotes muscle relaxation and reduces physical tension Strengthens the nervous system and increases resistance to stress Normalizes serotonin levels, maintaining a stable emotional background",
    },
  },
  N: {
    key: "N",
    productName: "N | Protection and Prevention",
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
      },
      {
        title: "Cherry Stalks",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/cherry.png",
        amount: "25 mg",
      },
      {
        title: "Witch Hazel",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/witch_hazel.png",
        amount: "15 mg",
      },
    ],
    description: "A natural antiseptic with powerful anti-inflammatory and diuretic properties. N contains 50 mg of Archangelica (angelica) in one capsule and, when taken daily: Provides anti-inflammatory and antibacterial effects without antibiotics Normalizes the functioning of the genitourinary system Reduces swelling Supports the health of the immune and hematopoietic systems Has a diuretic effect Promotes the removal of sand and small stones from the kidneys",
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
      title: "60 capsules ",
      text: "A natural antiseptic with powerful anti-inflammatory and diuretic properties. N contains 50 mg of Archangelica (angelica) in one capsule and, when taken daily: Provides anti-inflammatory and antibacterial effects without antibiotics Normalizes the functioning of the genitourinary system Reduces swelling Supports the health of the immune and hematopoietic systems Has a diuretic effect Promotes the removal of sand and small stones from the kidneys",
    },
  },
  NPM: {
    key: "NPM",
    productName: "NPM I Nature's Power for Men",
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
    description: "A natural formula of active ingredients that provides neuro-nutrition and targets problems of the male urogenital system.\nNPM is recommended for all men, as well as women who take responsibility for their health. With daily use, it: Prevents diseases of the genitourinary system Strengthens the body's immune system and increases resistance to viruses, microbes, and fungi Reduces the risk of infectious diseases of the genitourinary tract Protects against the development of chronic diseases and consolidates the results of previous therapy.",
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
      title: "60 capsules ",
      text: "A natural formula of active ingredients that provides neuro-nutrition and targets problems of the male urogenital system.\nNPM is recommended for all men, as well as women who take responsibility for their health. With daily use, it: Prevents diseases of the genitourinary system Strengthens the body's immune system and increases resistance to viruses, microbes, and fungi Reduces the risk of infectious diseases of the genitourinary tract Protects against the development of chronic diseases and consolidates the results of previous therapy.",
    },
  },
  OS: {
    key: "OS",
    productName: "OS | Strongs bones and joints",
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
    description: "A complex of marine minerals and vitamins for strengthening bones and joint health. OS contains 834 mg of marine minerals from whole calcareous seaweed in one capsule, and when taken daily: Normalizes the mineral composition and strength of bone tissue Helps reduce the risk of fractures and other injuries Reduces joint discomfort during physical activity Normalizes the health of muscles, cartilage, and connective tissues Promotes protein metabolism",
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
      text: "A complex of marine minerals and vitamins for strengthening bones and joint health. OS contains 834 mg of marine minerals from whole calcareous seaweed in one capsule, and when taken daily: Normalizes the mineral composition and strength of bone tissue Helps reduce the risk of fractures and other injuries Reduces joint discomfort during physical activity Normalizes the health of muscles, cartilage, and connective tissues Promotes protein metabolism",
    },
  },
  P: {
    key: "P",
    productName: "P | Nervous system balance",
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
      },
      {
        title: "Melissa",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/lemon_balm.png",
        amount: "10 mg",
      },
      {
        title: "Valerian",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/valerian.png",
        amount: "0.6 mg",
      },
    ],
    description: "A natural anti-stress complex based on lavender, lemon balm, and valerian. P contains 100 mg of lavender flower extract in one capsule and, when taken daily: Prevents stress and neutralizes its effects Supports nervous system health Normalizes heart rhythm Eliminates feelings of anxiety and restlessness Ensures restful sleep",
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
      text: "A natural anti-stress complex based on lavender, lemon balm, and valerian. P contains 100 mg of lavender flower extract in one capsule and, when taken daily: Prevents stress and neutralizes its effects Supports nervous system health Normalizes heart rhythm Eliminates feelings of anxiety and restlessness Ensures restful sleep",
    },
  },
  S: {
    key: "S",
    productName: "S | Ease of digestion",
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
    description: "A complex of live bifidobacteria and lactobacilli and natural prebiotics for normal bowel function. S contains 40 mg of Lactobacillus rhamnosus GG, 40 mg of lactic acid bacteria, and 300 mg of natural prebiotics in one capsule. When taken daily, it: Helps improve the condition and volume of beneficial intestinal microflora Activates the digestive system Improves the body's adaptation to environmental changes Reduces the risk of developing pathogenic microorganisms and new diseases Strengthens protection against toxins from food and the environment",
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
      text: "A complex of live bifidobacteria and lactobacilli and natural prebiotics for normal bowel function. S contains 40 mg of Lactobacillus rhamnosus GG, 40 mg of lactic acid bacteria, and 300 mg of natural prebiotics in one capsule. When taken daily, it: Helps improve the condition and volume of beneficial intestinal microflora Activates the digestive system Improves the body's adaptation to environmental changes Reduces the risk of developing pathogenic microorganisms and new diseases Strengthens protection against toxins from food and the environment",
    },
  },
  S2S: {
    key: "S2S",
    productName: "S2S | Keen eye",
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
    description: "Comprehensive eye health protection. S2S contains 140 mg of blueberry extract in one capsule, as well as lutein and zeaxanthin, and when taken daily, it: Helps maintain visual acuity Helps prevent the development of serious eye diseases Helps improve therapy results, especially in older people Helps strengthen blood vessels, reduce dryness, and redness Helps reduce discomfort",
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
      text: "Comprehensive eye health protection. S2S contains 140 mg of blueberry extract in one capsule, as well as lutein and zeaxanthin, and when taken daily, it: Helps maintain visual acuity Helps prevent the development of serious eye diseases Helps improve therapy results, especially in older people Helps strengthen blood vessels, reduce dryness, and redness Helps reduce discomfort",
    },
  },
  SV: {
    key: "SV",
    productName: "SV | Joyful and Beautiful",
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
      },
      {
        title: "Green Tea",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/green_tea_leaf_extract.png",
        amount: "50 mg",
      },
      {
        title: "Chromium",
        imageSrc: "/product-page-images/ingredients-google/Ingridients/chromium.png",
        amount: "5 mg",
      },
    ],
    description: "A balanced formula for improving digestion and metabolism. Each SV capsule contains 150 mg of Garcinia cambogia peel extract and, when taken daily: Restores metabolism Reduces appetite and dulls hunger Enhances the effects of diets Normalizes the digestive process Regulates the endocrine system",
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
      text: "A balanced formula for improving digestion and metabolism. Each SV capsule contains 150 mg of Garcinia cambogia peel extract and, when taken daily: Restores metabolism Reduces appetite and dulls hunger Enhances the effects of diets Normalizes the digestive process Regulates the endocrine system",
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
    description: "An antioxidant complex for maintaining vascular health and lightness of gait. VS contains grape seed extract, resveratrol, diosmin, and hesperidin in one capsule, and when taken daily, it: Supports and normalizes blood circulation Increases vascular elasticity Improves cerebral blood circulation Strengthens memory Provides antioxidant protection",
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
      title: "60 capsules ",
      text: "An antioxidant complex for maintaining vascular health and lightness of gait. VS contains grape seed extract, resveratrol, diosmin, and hesperidin in one capsule, and when taken daily, it: Supports and normalizes blood circulation Increases vascular elasticity Improves cerebral blood circulation Strengthens memory Provides antioxidant protection",
    },
  },
};


// Auto-merge generated product content if present (from CSVs)
// @ts-ignore
let GENERATED_PRODUCTS: Record<string, ProductContent> = {};
try { 
  const path = require('path');
  const generatedPath = path.join(__dirname, 'ProductContent.generated.ts');
  GENERATED_PRODUCTS = require(generatedPath).GENERATED_PRODUCTS; 
  console.log('Loaded GENERATED_PRODUCTS keys:', Object.keys(GENERATED_PRODUCTS));
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
