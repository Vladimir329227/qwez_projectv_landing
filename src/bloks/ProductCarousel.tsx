import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { PRODUCTS } from "../components/product-page/ProductContent";
import { openProductModal } from "../App";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const DEFAULT_INGREDIENTS_VISIBLE = 0;
  const [containerWidth, setContainerWidth] = useState(0);

  // Специфические benefits для каждого продукта
  const productBenefitsMap: { [key: string]: Array<{ icon: string; text: string }> } = {
    "G": [
      { icon: "/figma/d8bfeab08fda3aa9.png", text: "Memory Boost" },
      { icon: "/figma/1bf15e50d4a96fc7.png", text: "Fast Metabolism" },
      { icon: "/figma/cad89a2a6d1dbc63.png", text: "Balanced Pressure" },
      { icon: "/figma/cb6e5f8d1a94e7ab.png", text: "Hormonal Harmony" }
    ],
    "CH": [
      { icon: "/figma/1bf15e50d4a96fc7.png", text: "Natural Energy" },
      { icon: "/figma/1bf15e50d4a96fc7.png", text: "Quick Recovery" },
      { icon: "/figma/d8bfeab08fda3aa9.png", text: "Sharp Focus" }
    ],
    "D": [
      { icon: "/figma/96dd755ae3262da1.png", text: "Deep Cleanse" },
      { icon: "/figma/83fcdf496ddbb8fe.png", text: "Strong Immunity" },
      { icon: "/figma/d8bfeab08fda3aa9.png", text: "Cell Protection" }
    ],
    "M": [
      { icon: "/figma/cad89a2a6d1dbc63.png", text: "Heart Health" },
      { icon: "/figma/d8bfeab08fda3aa9.png", text: "Brain Function" },
      { icon: "/figma/cad89a2a6d1dbc63.png", text: "Blood Pressure" },
      { icon: "/figma/d8bfeab08fda3aa9.png", text: "Anti-Aging" }
    ],
    "N": [
      { icon: "/figma/83fcdf496ddbb8fe.png", text: "Anti-Inflammation" },
      { icon: "/figma/83fcdf496ddbb8fe.png", text: "Urinary Health" },
      { icon: "/figma/96dd755ae3262da1.png", text: "Toxin Removal" },
      { icon: "/figma/83fcdf496ddbb8fe.png", text: "Swelling Relief" }
    ],
    "P": [
      { icon: "/figma/cb6e5f8d1a94e7ab.png", text: "Stress Relief" },
      { icon: "/figma/cb6e5f8d1a94e7ab.png", text: "Inner Calm" },
      { icon: "/figma/976ffc53f6e1ec5c.png", text: "Restful Sleep" },
      { icon: "/figma/cad89a2a6d1dbc63.png", text: "Heart Balance" }
    ],
    "S": [
      { icon: "/figma/96dd755ae3262da1.png", text: "Ease of Digestion" },
      { icon: "/figma/96dd755ae3262da1.png", text: "Healthy Microflora" },
      { icon: "/figma/96dd755ae3262da1.png", text: "Smooth Digestion" },
      { icon: "/figma/96dd755ae3262da1.png", text: "Toxin Defense" }
    ],
    "SV": [
      { icon: "/figma/1bf15e50d4a96fc7.png", text: "Active Metabolism" },
      { icon: "/figma/1bf15e50d4a96fc7.png", text: "Appetite Control" },
      { icon: "/figma/1bf15e50d4a96fc7.png", text: "Weight Balance" },
      { icon: "/figma/96dd755ae3262da1.png", text: "Digestive Harmony" }
    ],
    "A": [
      { icon: "/figma/83fcdf496ddbb8fe.png", text: "Immunity" },
      { icon: "/figma/d8bfeab08fda3aa9.png", text: "Anti-Ageing" },
      { icon: "/figma/cad89a2a6d1dbc63.png", text: "Heart Health" },
      { icon: "/figma/d8bfeab08fda3aa9.png", text: "Cell Protection" }
    ],
    "MGR": [
      { icon: "/figma/cb6e5f8d1a94e7ab.png", text: "Reduces Stress" },
      { icon: "/figma/cb6e5f8d1a94e7ab.png", text: "Improves Mood" },
      { icon: "/figma/cb6e5f8d1a94e7ab.png", text: "Emotional Regulation" }
    ]
  };

  // Функция для преобразования данных из ProductContent в формат карусели
  const transformProductData = (productData: any) => {
    // Получаем benefits для конкретного продукта
    const getBenefitsForProduct = (productKey: string) => {
      return productBenefitsMap[productKey] || [
        { icon: "/figma/83fcdf496ddbb8fe.png", text: "Health" },
        { icon: "/figma/d8bfeab08fda3aa9.png", text: "Wellness" }
      ];
    };

    return {
      id: productData.key,
      image: productData.jarImageSrc,
      title: productData.productName.split(" | ")[1] || productData.productName, // Убираем код продукта
      description: productData.description,
      benefits: getBenefitsForProduct(productData.key),
      ingredients: productData.ingredients.map((ing: any) => ({
        name: ing.title,
        amount: ing.amount,
      })),
    };
  };

  // Определяем порядок продуктов согласно требованиям
  const productOrder = [
    "A",
    "G",
    "D",
    "P",
    "CH",
    "M",
    "SV",
    "S",
    "MGR",
    "N",
    // "BR",
    // "DR",
    // "ENT",
    // "LV",
    // "OS",
    // "VS",
    // "S2S",
    // "MDS",
    // "GQ10",
    // "NPM",
    // "JN",
    // "JNB",
  ];

  // Преобразуем продукты в указанном порядке
  const products = productOrder
    .map((key) => PRODUCTS[key])
    .filter((product) => product) // Убираем undefined если продукт не найден
    .map(transformProductData);

  // Определяем количество карточек для показа
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsToShow(1);
      } else if (width < 1024) {
        setCardsToShow(3);
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

  // Надежное измерение ширины контейнера при монтировании и изменении/layout
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;

    // Инициализируем начальное значение, если возможно
    const initialWidth = element.offsetWidth;
    if (initialWidth > 0) {
      setContainerWidth(initialWidth);
    }

    // Наблюдаем изменения размеров контейнера
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const w = Math.floor(entry.contentRect.width);
          if (w > 0) {
            setContainerWidth((prev) => (prev !== w ? w : prev));
          }
        }
      });
      resizeObserver.observe(element);
    }

    // На случай, если во время первого кадра ширина была 0
    const rafId = requestAnimationFrame(() => {
      if (element.offsetWidth > 0) {
        setContainerWidth((prev) =>
          prev !== element.offsetWidth ? element.offsetWidth : prev
        );
      }
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  // Исправляем позицию при первой загрузке (только если есть проблемы)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Проверяем, нужна ли коррекция позиции
      if (carouselRef.current && containerRef.current) {
        const currentTransform = carouselRef.current.style.transform;
        const expectedTransform = `translateX(-${calculatePosition(
          currentIndex
        )}px)`;

        // Исправляем только если позиция действительно неправильная
        if (currentTransform !== expectedTransform) {
          forceUpdatePosition();
        }
      }
    }, 1000); // Увеличиваем время ожидания

    return () => clearTimeout(timer);
  }, []);

  // Правильный расчет максимального индекса для полной видимости последнего элемента
  const getMaxIndex = () => {
    return Math.max(0, products.length - cardsToShow);
  };

  // Сбрасываем индекс при изменении количества карточек
  useEffect(() => {
    const maxIndex = getMaxIndex();
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsToShow, currentIndex, products.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = getMaxIndex();
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = getMaxIndex();
      if (prev <= 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  // Функция для получения gap в зависимости от размера экрана
  const getGap = () => {
    const width = window.innerWidth;
    if (width < 640) return 8; // Увеличиваем gap для мобильных устройств
    if (width < 1024) return 12;
    return 16;
  };

  // Более точный расчет ширины карточки
  const getCardWidth = () => {
    if (!containerRef.current) return 0;
    if (!containerWidth) return 0;
    const gap = getGap();
    const totalGaps = gap * (cardsToShow - 1);
    return Math.floor((containerWidth - totalGaps) / cardsToShow);
  };

  // Функция для точного расчета позиции
  const calculatePosition = (index: number) => {
    const cardWidth = getCardWidth();
    const gap = getGap();
    return index * (cardWidth + gap);
  };

  // Обновляем трансформацию при изменении currentIndex или размера окна
  useEffect(() => {
    if (carouselRef.current && containerRef.current && containerWidth > 0) {
      const carousel = carouselRef.current;
      const translateX = calculatePosition(currentIndex);

      // Используем более плавную анимацию
      carousel.style.transition =
        "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      carousel.style.transform = `translateX(-${translateX}px)`;
    }
  }, [currentIndex, cardsToShow, containerWidth]);

  // Улучшенный обработчик изменения размера окна
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      // Очищаем предыдущий таймаут
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      if (carouselRef.current && containerRef.current) {
        const carousel = carouselRef.current;

        // Отключаем анимацию во время ресайза
        carousel.style.transition = "none";

        // Ждем завершения ресайза
        resizeTimeout = setTimeout(() => {
          if (carouselRef.current && containerRef.current) {
            // Пересчитываем позицию с новыми размерами
            const translateX = calculatePosition(currentIndex);
            carouselRef.current.style.transform = `translateX(-${translateX}px)`;

            // Включаем анимацию обратно с плавным переходом
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition =
                  "transform 0.3s ease-out";
              }
            }, 50);
          }
        }, 200); // Увеличиваем время ожидания для более плавного ресайза
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
    };
  }, [currentIndex, cardsToShow, containerWidth]);

  // Функция для мягкого исправления позиции
  const forceUpdatePosition = () => {
    if (carouselRef.current && containerRef.current) {
      const carousel = carouselRef.current;

      // Отключаем анимацию только на короткое время
      carousel.style.transition = "none";

      setTimeout(() => {
        if (carouselRef.current) {
          const translateX = calculatePosition(currentIndex);
          carouselRef.current.style.transform = `translateX(-${translateX}px)`;

          // Быстро включаем анимацию обратно
          setTimeout(() => {
            if (carouselRef.current) {
              carouselRef.current.style.transition =
                "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            }
          }, 10);
        }
      }, 10);
    }
  };

  // Плавное переключение на слайд
  const goToSlide = (index: number) => {
    const maxIndex = getMaxIndex();
    const newIndex = Math.min(index, maxIndex);
    setCurrentIndex(newIndex);
  };

  const totalDots = Math.max(1, products.length - cardsToShow + 1);

  // Ограничиваем количество видимых точек на мобильных устройствах
  const getMaxVisibleDots = () => {
    const width = window.innerWidth;
    if (width < 640) return 5; // мобильные
    if (width < 1024) return 7; // планшеты
    return 10; // десктоп
  };

  const maxVisibleDots = getMaxVisibleDots();
  const visibleDots = Math.min(totalDots, maxVisibleDots);

  // Вычисляем диапазон видимых точек
  const getVisibleDotRange = () => {
    if (totalDots <= maxVisibleDots) {
      return { start: 0, end: totalDots };
    }

    const halfVisible = Math.floor(maxVisibleDots / 2);
    let start = Math.max(0, currentIndex - halfVisible);
    let end = Math.min(totalDots, start + maxVisibleDots);

    // Корректируем если достигли конца
    if (end === totalDots) {
      start = Math.max(0, end - maxVisibleDots);
    }

    return { start, end };
  };

  const { start: dotStart, end: dotEnd } = getVisibleDotRange();

  return (
    <div className="w-full max-w-7xl mx-auto px-1 sm:px-2 py-16">
      {/* Карусель с градиентными краями */}
      <div className="relative overflow-hidden mb-6" ref={containerRef}>
        {/* Градиентные маски для левого и правого краев */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-5 lg:w-4 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-5 lg:w-4 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        <div
          ref={carouselRef}
          className="flex items-start"
          style={{
            gap: `${getGap()}px`,
            width:
              containerWidth > 0
                ? `${
                    products.length * getCardWidth() +
                    getGap() * (products.length - 1)
                  }px`
                : "auto",
            marginBottom: `15px`,
            willChange: "transform", // Оптимизация для анимаций
          }}
        >
          {products.map((product) => {
            const isExpanded = expandedIds.has(product.id);
            return (
              <div
                key={product.id}
                className="flex-shrink-0 flex justify-center"
                style={{
                  width: containerWidth > 0 ? `${getCardWidth()}px` : undefined,
                }}
              >
                {/* Карточка товара с адаптивными размерами */}
                 <div
                   className={`flex flex-col items-center bg-[#F6F6F6] rounded-2xl w-full max-w-[300px] sm:max-w-[320px] lg:max-w-[340px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                     !isExpanded
                       ? "min-h-[540px] sm:min-h-[600px] lg:min-h-[640px]"
                       : ""
                   }`}
                 >
                  {/* Контейнер для картинки с адаптивными размерами */}
                  <div className="w-[70%] h-44 sm:h-56 lg:h-64 p-2 sm:p-3 pb-0 flex items-center justify-center relative">
                    <button
                      type="button"
                      aria-label={`Open ${product.title}`}
                      title="View product"
                      className="cursor-pointer group relative rounded-2xl overflow-hidden"
                      onClick={() => openProductModal(product.id)}
                    >
                      <img
                        src={product.image}
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                        alt={product.title}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity pointer-events-none rounded-2xl">
                        <span className="text-white text-xs sm:text-sm font-bold">
                          View product
                        </span>
                      </div>
                    </button>
                  </div>
                  
                  {/* Блок "Check the product" с серым текстом и стрелкой */}
                  <div className="w-full px-3 sm:px-4 pt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-xs sm:text-sm text-left">
                        *Click*
                      </span>
                      <img 
                        src="/figma/arrow.png" 
                        alt="arrow" 
                        className="h-10 w-10"
                      />
                    </div>
                  </div>

                  {/* Контент карточки с адаптивными размерами */}
                   <div className="p-3 sm:p-4 flex flex-col w-full">
                    <button
                      type="button"
                      onClick={() => openProductModal(product.id)}
                      className="text-[#1F2429] text-lg font-bold mb-2 text-left hover:underline break-words"
                    >
                      {product.title}
                    </button>

                     <div className="mb-3 min-h-[96px] sm:min-h-[112px] md:min-h-[112px] lg:min-h-[112px]">
                      <span className="text-[#1F2429] text-sm leading-relaxed block break-words">
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
                    {/* Toggle ingredients button */}
                    {product.ingredients.length >
                      DEFAULT_INGREDIENTS_VISIBLE && (
                      <button
                        className="mt-2 mb-4 self-center text-[#1F2429] text-sm font-bold underline"
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedIds((prev) => {
                            const next = new Set(prev);
                            if (next.has(product.id)) {
                              next.delete(product.id);
                            } else {
                              next.add(product.id);
                            }
                            return next;
                          });
                        }}
                      >
                        {expandedIds.has(product.id)
                          ? "Hide all ingredients"
                          : "Show all ingredients"}
                      </button>
                    )}

                    {expandedIds.has(product.id) && (
                      <div className="w-full">
                        <span className="block text-[#1F2429] text-base font-bold mb-2">
                          Ingredients:
                        </span>
                        <div className="space-y-1 mb-4 sm:mb-6">
                          {product.ingredients.map(
                            (ingredient: any, index: number) => (
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
                            )
                          )}
                        </div>
                      </div>
                    )}
                     {/* <a
                      href="https://projectvint.at/en/nutraceuticals/"
                      target="_blank"
                      rel="noopener noreferrer"
                       className={`${isExpanded ? 'mt-auto ' : ''}mx-auto w-[88%] bg-[#00A8E2] text-white text-center py-2 sm:py-3 rounded-full hover:bg-[#1FC8F8] transition-colors mb-3`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Buy Now
                    </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Навигация с точками - улучшенная адаптивность */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-full max-w-sm mx-auto px-4">
          {/* Кнопка назад */}
          <button
            onClick={prevSlide}
            className="p-2 sm:p-3 rounded-full bg-white transition-all duration-200 hover:scale-110 active:scale-95 flex-shrink-0"
          >
            <img
              src={"/figma/7f43061e53ed017f.png"}
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-9 lg:h-9 object-contain"
              alt="Previous"
              style={{ transform: "scaleX(-1)" }}
            />
          </button>

          {/* Контейнер для точек с прокруткой */}
          <div className="flex-1 flex justify-center items-center mx-2 sm:mx-4">
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
              {/* Показываем многоточие в начале если есть скрытые точки */}
              {dotStart > 0 && (
                <div className="flex items-center">
                  <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-gray-300"></div>
                  <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-gray-300 ml-1"></div>
                  <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-gray-300 ml-1"></div>
                </div>
              )}

              {/* Круглые точки этапов */}
              {Array.from({ length: dotEnd - dotStart }).map((_, index) => {
                const dotIndex = dotStart + index;
                return (
                  <button
                    key={dotIndex}
                    onClick={() => goToSlide(dotIndex)}
                    className="transition-transform duration-300 hover:scale-110"
                  >
                    <div
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                        dotIndex === currentIndex
                          ? "bg-[#00A8E2]"
                          : "bg-gray-300"
                      }`}
                    />
                  </button>
                );
              })}

              {/* Показываем многоточие в конце если есть скрытые точки */}
              {dotEnd < totalDots && (
                <div className="flex items-center ml-1">
                  <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-gray-300"></div>
                  <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-gray-300 ml-1"></div>
                  <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-gray-300 ml-1"></div>
                </div>
              )}
            </div>
          </div>

          {/* Кнопка вперед */}
          <button
            onClick={nextSlide}
            className="p-2 sm:p-3 rounded-full bg-white transition-all duration-200 hover:scale-110 active:scale-95 flex-shrink-0"
          >
            <img
              src={"/figma/7f43061e53ed017f.png"}
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-9 lg:h-9 object-contain"
              alt="Next"
            />
          </button>
        </div>

        {/* Индикатор текущей позиции */}
        <div className="mt-2 text-xs text-gray-500">
          {currentIndex + 1} / {totalDots}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
