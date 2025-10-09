- Добавил поддержку ключа продукта: теперь можно открывать страницу по ключу реестра. В `App.tsx` `navigateToProduct` сохраняет `productKey` (и `productName` для обратной совместимости) в cookie и открывает `ProductPage`.
- `ProductPage` принимает новый проп `productKey` и прокидывает его в `ProductPageDesktop`/`Tablet`/`Mobile`.
- Компоненты рендерят контент через `getProductContent(productKey, { productName })`.
- В `ProductContent.ts` добавил нормализацию ключей и `registerProduct(content)` для регистрации новых товаров.

Как добавить новый продукт:

1. Откройте `src/components/product-page/ProductContent.ts` и добавьте новый объект в `PRODUCTS`, например:

```typescript
PRODUCTS.POWER_OF_MIND = {
  key: "POWER_OF_MIND",
  productName: "Power of Mind",
  productNameColor: "#442682",
  heroBackgroundSrc: "/product-page-images/capsule_vitamins.png",
  closeIconSrc: "/product-page-images/icon_close_x.png",
  jarImageSrc: "/product-page-images/power_of_mind-product.png",
  promoBannerSrc: "/product-page-images/promo_banner_a.png",
  ingredients: [
    {
      title: "Lavender",
      imageSrc: "/product-page-images/icon_magnesium.png",
      amount: "300 mg",
    },
    {
      title: "Melissa",
      imageSrc: "/product-page-images/icon_b6.png",
      amount: "10 mg",
    },
    {
      title: "Valerian",
      imageSrc: "/product-page-images/icon_zinc_zn.png",
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
    title: "30 capsules",
    text: "An antioxidant formula that protects against infections, toxins and premature aging. Reduces the risk of developing chronic diseases. Slows down the aging process. Promotes cell regeneration. Supports immunity Prevents the development of oxidative processes. Each capsule of A contains 80 mg of grape seed extract and, when taken daily, helps reduce the risk of cardiovascular disease, cleanse blood vessels and neutralize oxidative processes.",
  },
};
```

2. Переход на страницу:

- Из любого места UI вызовите `navigateToProduct('POWER_OF_MIND')`. Кейс не важен: ключ нормализуется к верхнему регистру.
- Если вызываете со старым именем, тоже работает: сохранится и `productName`, и `productKey`.

Готово: чтобы создать новую страницу — просто добавьте запись в `PRODUCTS` и вызовите `navigateToProduct` с этим ключом.
