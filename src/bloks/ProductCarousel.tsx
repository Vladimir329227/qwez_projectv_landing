import { useState, useRef, useEffect } from "react";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);

  // Все продукты из вашего кода
  const products = [
    {
      id: 1,
      image: "/product-page-images/product_A/capsule_vitamins_a.png",
      title: "Antioxidant Power",
      description:
        "A daily dose of plant-based antioxidants to strengthen immunity, support heart health, and help protect against early ageing and cognitive decline.",
      benefits: [
        { icon: "/figma/83fcdf496ddbb8fe.png", text: "Immunity" },
        { icon: "/figma/d8bfeab08fda3aa9.png", text: "Anti-Aging" },
        { icon: "/figma/cad89a2a6d1dbc63.png", text: "Heart Health" },
        { icon: "/figma/c1770dcacad3bd93.png", text: "Cell Protection" },
      ],
      ingredients: [
        { name: "Grape seed extract", amount: "80 mg" },
        { name: "including polyphenols", amount: "76 mg" },
        { name: "Vitamin C", amount: "65 mg" },
        { name: "Zinc", amount: "15 mg" },
      ],
    },
    {
      id: 2,
      image: "/product-page-images/product_CH/capsule_vitamins_ch.png",
      title: "Antioxidant Power",
      description:
        "A daily dose of plant-based antioxidants to strengthen immunity, support heart health, and help protect against early ageing and cognitive decline.",
      benefits: [
        { icon: "/figma/83fcdf496ddbb8fe.png", text: "Immunity" },
        { icon: "/figma/d8bfeab08fda3aa9.png", text: "Anti-Aging" },
        { icon: "/figma/cad89a2a6d1dbc63.png", text: "Heart Health" },
        { icon: "/figma/c1770dcacad3bd93.png", text: "Cell Protection" },
      ],
      ingredients: [
        { name: "Phycocyanins", amount: "30 mg" },
        { name: "Chlorophyll", amount: "15 mg" },
        { name: "Caffeine", amount: "10 mg" },
        { name: "Theobromine", amount: "5,25 mcg" },
      ],
    },
    {
      id: 3,
      image: "/product-page-images/product_D/capsule_vitamins_d.png",
      title: "Visible & tangible results",
      description:
        "A unique blend of herbal adaptogens, magnesium, and activated B-vitamins to ease stress, restore emotional balance, and support nervous system health.",
      benefits: [
        { icon: "/figma/976ffc53f6e1ec5c.png", text: "Better Sleep" },
        { icon: "/figma/cb6e5f8d1a94e7ab.png", text: "Reduces Stress" },
        { icon: "/figma/96dd755ae3262da1.png", text: "Nervous System Health" },
      ],
      ingredients: [
        { name: "Lavender Flower", amount: "80 mg" },
        { name: "Melissa Leaf Extract", amount: "76 mg" },
        { name: "Valerian Root Extract", amount: "65 mg" },
        { name: "Vitamin B1", amount: "50 mcg" },
      ],
    },
    {
      id: 4,
      image: "/product-page-images/product_G/capsule_vitamins_g.png",
      title: "Visible & tangible results",
      description:
        "A unique blend of herbal adaptogens, magnesium, and activated B-vitamins to ease stress, restore emotional balance, and support nervous system health.",
      benefits: [
        { icon: "/figma/976ffc53f6e1ec5c.png", text: "Better Sleep" },
        { icon: "/figma/cb6e5f8d1a94e7ab.png", text: "Reduces Stress" },
        { icon: "/figma/96dd755ae3262da1.png", text: "Nervous System Health" },
      ],
      ingredients: [
        { name: "Lavender Flower", amount: "80 mg" },
        { name: "Melissa Leaf Extract", amount: "76 mg" },
        { name: "Valerian Root Extract", amount: "65 mg" },
        { name: "Vitamin B1", amount: "50 mcg" },
      ],
    },
    {
      id: 5,
      image: "/product-page-images/product_M/capsule_vitamins_m.png",
      title: "Visible & tangible results",
      description:
        "Combination of the power of herbal antidepressants with a complex of magnesium and active forms of vitamins to provide calmness and a good mood daily.",
      benefits: [
        { icon: "/figma/18f17531fb8776a5.png", text: "Reduces Stress" },
        { icon: "/figma/be384eb251d281e3.png", text: "Improves Mood" },
        { icon: "/figma/1bf15e50d4a96fc7.png", text: "Emotional Regulation" },
      ],
      ingredients: [
        { name: "Magnesium", amount: "80 mg" },
        { name: "Vitamin C", amount: "76 mg" },
        { name: "St John's wort extract", amount: "65 mg" },
        { name: "Black horehound extract", amount: "15 mg" },
      ],
    },
    {
      id: 6,
      image: "/product-page-images/product_MGR/capsule_vitamins_mgr.png",
      title: "Visible & tangible results",
      description:
        "Combination of the power of herbal antidepressants with a complex of magnesium and active forms of vitamins to provide calmness and a good mood daily.",
      benefits: [
        { icon: "/figma/18f17531fb8776a5.png", text: "Reduces Stress" },
        { icon: "/figma/be384eb251d281e3.png", text: "Improves Mood" },
        { icon: "/figma/1bf15e50d4a96fc7.png", text: "Emotional Regulation" },
      ],
      ingredients: [
        { name: "Magnesium", amount: "80 mg" },
        { name: "Vitamin C", amount: "76 mg" },
        { name: "St John's wort extract", amount: "65 mg" },
        { name: "Black horehound extract", amount: "15 mg" },
      ],
    },
    {
      id: 7,
      image: "/product-page-images/product_N/capsule_vitamins_n.png",
      title: "Visible & tangible results",
      description:
        "Combination of the power of herbal antidepressants with a complex of magnesium and active forms of vitamins to provide calmness and a good mood daily.",
      benefits: [
        { icon: "/figma/18f17531fb8776a5.png", text: "Reduces Stress" },
        { icon: "/figma/be384eb251d281e3.png", text: "Improves Mood" },
        { icon: "/figma/1bf15e50d4a96fc7.png", text: "Emotional Regulation" },
      ],
      ingredients: [
        { name: "Magnesium", amount: "80 mg" },
        { name: "Vitamin C", amount: "76 mg" },
        { name: "St John's wort extract", amount: "65 mg" },
        { name: "Black horehound extract", amount: "15 mg" },
      ],
    },
    {
      id: 8,
      image: "/product-page-images/product_P/capsule_vitamins_p.png",
      title: "Visible & tangible results",
      description:
        "Combination of the power of herbal antidepressants with a complex of magnesium and active forms of vitamins to provide calmness and a good mood daily.",
      benefits: [
        { icon: "/figma/18f17531fb8776a5.png", text: "Reduces Stress" },
        { icon: "/figma/be384eb251d281e3.png", text: "Improves Mood" },
        { icon: "/figma/1bf15e50d4a96fc7.png", text: "Emotional Regulation" },
      ],
      ingredients: [
        { name: "Magnesium", amount: "80 mg" },
        { name: "Vitamin C", amount: "76 mg" },
        { name: "St John's wort extract", amount: "65 mg" },
        { name: "Black horehound extract", amount: "15 mg" },
      ],
    },
    {
      id: 9,
      image: "/product-page-images/product_S/capsule_vitamins_s.png",
      title: "Visible & tangible results",
      description:
        "Combination of the power of herbal antidepressants with a complex of magnesium and active forms of vitamins to provide calmness and a good mood daily.",
      benefits: [
        { icon: "/figma/18f17531fb8776a5.png", text: "Reduces Stress" },
        { icon: "/figma/be384eb251d281e3.png", text: "Improves Mood" },
        { icon: "/figma/1bf15e50d4a96fc7.png", text: "Emotional Regulation" },
      ],
      ingredients: [
        { name: "Magnesium", amount: "80 mg" },
        { name: "Vitamin C", amount: "76 mg" },
        { name: "St John's wort extract", amount: "65 mg" },
        { name: "Black horehound extract", amount: "15 mg" },
      ],
    },
    {
      id: 10,
      image: "/product-page-images/product_SV/capsule_vitamins_sv.png",
      title: "Visible & tangible results",
      description:
        "Combination of the power of herbal antidepressants with a complex of magnesium and active forms of vitamins to provide calmness and a good mood daily.",
      benefits: [
        { icon: "/figma/18f17531fb8776a5.png", text: "Reduces Stress" },
        { icon: "/figma/be384eb251d281e3.png", text: "Improves Mood" },
        { icon: "/figma/1bf15e50d4a96fc7.png", text: "Emotional Regulation" },
      ],
      ingredients: [
        { name: "Magnesium", amount: "80 mg" },
        { name: "Vitamin C", amount: "76 mg" },
        { name: "St John's wort extract", amount: "65 mg" },
        { name: "Black horehound extract", amount: "15 mg" },
      ],
    },
  ];

  // Определяем количество карточек для показа
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsToShow(1);
      } else if (width < 1024) {
        setCardsToShow(2);
      } else if (width < 1280) {
        setCardsToShow(3);
      } else {
        setCardsToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Сбрасываем индекс при изменении количества карточек
  useEffect(() => {
    const maxIndex = Math.max(0, products.length - cardsToShow);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsToShow, currentIndex, products.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, products.length - cardsToShow);
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, products.length - cardsToShow);
      if (prev <= 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, products.length - cardsToShow);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Функция для получения gap в зависимости от размера экрана
  const getGap = () => {
    const width = window.innerWidth;
    if (width < 640) return 6;
    if (width < 1024) return 10;
    return 14;
  };

  // Рассчитываем ширину карточки с учетом gap
  const getCardWidth = () => {
    if (!containerRef.current) return 0;
    const containerWidth = containerRef.current.offsetWidth;
    const gap = getGap();
    return (containerWidth + 50 - gap * (cardsToShow - 1)) / cardsToShow;
  };

  // Обновляем трансформацию при изменении currentIndex или размера окна
  useEffect(() => {
    if (carouselRef.current && containerRef.current) {
      const carousel = carouselRef.current;
      const cardWidth = getCardWidth();
      const gap = getGap();
      const translateX = currentIndex * (cardWidth + gap);

      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(-${translateX}px)`;
    }
  }, [currentIndex, cardsToShow]);

  // Обработчик изменения размера окна
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        carousel.style.transition = "none";

        // Принудительное обновление позиции после ресайза
        setTimeout(() => {
          if (carouselRef.current) {
            const cardWidth = getCardWidth();
            const gap = getGap();
            const translateX = currentIndex * (cardWidth + gap);
            carouselRef.current.style.transform = `translateX(-${translateX}px)`;

            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition =
                  "transform 0.5s ease-in-out";
              }
            }, 50);
          }
        }, 10);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, cardsToShow]);

  const totalDots = Math.max(1, products.length - cardsToShow + 1);

  return (
    <div className="w-full max-w-7xl mx-auto px-1 sm:px-2 py-16">
      {/* Карусель с градиентными краями */}
      <div className="relative overflow-hidden mb-6" ref={containerRef}>
        {/* Градиентные маски для левого и правого краев */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 lg:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        <div
          ref={carouselRef}
          className="flex"
          style={{
            gap: `${getGap()}px`,
            width: `calc(${(products.length * 100) / cardsToShow}% + ${
              getGap() * (products.length - 1)
            }px)`,
            marginBottom: `15px`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 flex justify-center"
              style={{
                width: `calc(${100 / products.length}% - ${
                  (getGap() * (products.length - 1)) / products.length
                }px)`,
              }}
            >
              {/* Карточка товара с адаптивными размерами */}
              <div className="flex flex-col items-center bg-[#F6F6F6] rounded-2xl h-full w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Контейнер для картинки с адаптивными размерами */}
                <div className="w-[70%] h-[70%] sm:h-56 lg:h-64 p-2 sm:p-3 pb-0 flex items-center justify-center">
                  <img
                    src={product.image}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                    alt={product.title}
                  />
                </div>

                {/* Контент карточки с адаптивными размерами */}
                <div className="p-3 sm:p-4 flex-1 flex flex-col">
                  <span className="text-[#1F2429] text-lg font-bold mb-2">
                    {product.title}
                  </span>

                  <div className="flex-1 mb-3">
                    <span className="text-[#1F2429] text-sm leading-relaxed line-clamp-2">
                      {product.description}
                    </span>
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <img
                          src={benefit.icon}
                          className="w-4 h-4 mr-1 object-contain"
                          alt=""
                        />
                        <span className="text-[#00A8E2] text-xs font-bold whitespace-nowrap">
                          {benefit.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hide ingredients */}
                  <span className="text-[#1F2429] text-sm font-bold mb-3 cursor-pointer hover:text-blue-600 transition-colors">
                    Hide all ingredients
                  </span>

                  {/* Ingredients */}
                  <span className="text-[#1F2429] text-base font-bold mb-2">
                    Ingredients:
                  </span>

                  <div className="space-y-1">
                    {product.ingredients.map((ingredient, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="text-[#1F2429] text-xs font-bold">
                          {ingredient.name}
                        </span>
                        <span className="text-[#1F2429] text-xs font-bold">
                          {ingredient.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Навигация с точками */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Кнопка назад */}
          <button
            onClick={prevSlide}
            className="p-2 sm:p-3 rounded-full bg-white transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <img
              src={"/figma/7f43061e53ed017f.png"}
              className="w-6 h-6 sm:w-9 sm:h-9 object-contain"
              alt="Previous"
              style={{ transform: "scaleX(-1)" }}
            />
          </button>

          {/* Красивые точки-индикаторы */}
          <div className="flex items-center gap-2 sm:gap-3">
            {Array.from({ length: totalDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex ? "scale-125" : "hover:scale-110"
                }`}
              >
                <div
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#00A8E2] shadow-lg"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Кнопка вперед */}
          <button
            onClick={nextSlide}
            className="p-2 sm:p-3 rounded-full bg-white transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <img
              src={"/figma/7f43061e53ed017f.png"}
              className="w-6 h-6 sm:w-9 sm:h-9 object-contain"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
