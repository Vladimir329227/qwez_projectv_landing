import { useState, useRef, useEffect, useLayoutEffect } from 'react';

const ExpertsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Данные экспертов из существующего кода
  const experts = [
    {
      id: 1,
      image: "/figma/68f2f983c941dfa8.png",
      name: "Prof. Torello Lotti",
      title: "PROFESSOR OF DERMATOLOGY, MARCONI UNIVERSITY",
      description: "President of the World Health Academy, renowned for work in skin health and integrative medicine."
    },
    {
      id: 2,
      image: "/figma/dc629768f4f3b866.png",
      name: "Dr Yann Rougier",
      title: "DOCTOR OF MEDICAL SCIENCES, NEUROBIOLOGIST, NUTRITIONIST",
      description: "One of the founders of the IN2A Institute of Neuronutrition and Applied Neuroscience"
    },
    {
      id: 3,
      image: "/figma/de669e817a4da2d5.png",
      name: "Fortunato Torre",
      title: "MANAGING DIRECTOR",
      description: "Research and development director at the FCC-Fragrances, Cosmetics & Consulting, Ltd cosmetics manufacturer"
    },
    {
      id: 4,
      image: "/figma/ad61296f2426129c.png",
      name: "Gerard Strauch",
      title: "PRESIDENT",
      description: "President of the Trading Point Elite Pharm Laboratories pharmaceutical manufacturer"
    },
    
  ];

  // Определяем количество карточек для показа
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardsToShow(1);
      } else if (width < 768) {
        setCardsToShow(2);
      } else if (width < 1024) {
        setCardsToShow(3);
      } else {
        setCardsToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    return Math.max(0, experts.length - cardsToShow);
  };

  // Сбрасываем индекс при изменении количества карточек
  useEffect(() => {
    const maxIndex = getMaxIndex();
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsToShow, currentIndex, experts.length]);

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

  const goToSlide = (index: number) => {
    const maxIndex = getMaxIndex();
    const newIndex = Math.min(index, maxIndex);
    setCurrentIndex(newIndex);
  };

  // Функция для получения gap в зависимости от размера экрана
  const getGap = () => {
    const width = window.innerWidth;
    if (width < 640) return 6;
    if (width < 1024) return 10;
    return 14;
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

  // Получаем максимальную ширину карточки для текущего разрешения
  const getMaxCardWidth = () => {
    const width = window.innerWidth;
    if (width < 640) return 280;
    if (width < 1024) return 300;
    return 350;
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

  const totalDots = Math.max(1, experts.length - cardsToShow + 1);
  const showSlider = experts.length > cardsToShow;

  return (
     <div className="w-full max-w-7xl mx-auto px-1 sm:px-2 py-2">
      {/* Заголовок */}
      <div className="text-center mb-4">
        <h2 className="text-[#1F2429] text-2xl sm:text-3xl lg:text-4xl font-bold">
          Meet Our Experts
        </h2>
      </div>

       {/* Карусель */}
       <div className="relative overflow-hidden min-h-[500px] sm:min-h-[550px] lg:min-h-[580px]" ref={containerRef}>
        <div 
          ref={carouselRef}
          className={`flex ${showSlider ? '' : 'justify-center'}`}
          style={{ 
            gap: `${getGap()}px`,
            width: showSlider ? `${
              containerWidth > 0
                ? `${
                    experts.length * getCardWidth() +
                    getGap() * (experts.length - 1)
                  }px`
                : "auto"
            }` : '100%',
            marginBottom: `20px`,
            willChange: "transform", // Оптимизация для анимаций
          }}
        >
          {experts.map((expert) => (
            <div 
              key={expert.id} 
              className="flex-shrink-0 flex justify-center"
              style={{ 
                width: containerWidth > 0 ? `${getCardWidth()}px` : undefined,
              }}
            >
               {/* Карточка эксперта с адаптивными размерами */}
                <div 
                  className="flex flex-col bg-white rounded-2xl h-full w-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[500px] sm:min-h-[550px] lg:min-h-[580px]"
                  style={{ maxWidth: `${getMaxCardWidth()}px` }}
                >
                {/* Фото эксперта */}
                <div className="w-full h-64 sm:h-72 lg:h-80 flex items-center justify-center p-4">
                    <img
                        src={expert.image}
                        className="w-full h-full object-cover object-top rounded-lg"
                        alt={expert.name}
                    />
                </div>
                
                 {/* Информация об эксперте */}
                 <div className="p-3 sm:p-4 flex-1 flex flex-col">
                   <h3 className="text-[#1F2429] text-base sm:text-lg lg:text-xl font-bold mb-2 text-center">
                     {expert.name}
                   </h3>
                   
                   <div className="text-center mb-2">
                     <span className="text-[#00A8E2] text-xs font-bold uppercase tracking-wide">
                       {expert.title}
                     </span>
                   </div>
                   
                   <div className="flex-1 flex items-center">
                     <p className="text-[#1F2429] text-xs sm:text-sm leading-tight text-center">
                       {expert.description}
                     </p>
                   </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Навигация с точками - показываем только если есть слайдер */}
      {showSlider && (
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Кнопка назад */}
            <button 
              onClick={prevSlide}
              className="p-2 sm:p-3 rounded-full bg-white transition-all duration-200 hover:scale-110 active:scale-95 "
            >
              <img
                src={"/figma/7f43061e53ed017f.png"}
                className="w-6 h-6 sm:w-9 sm:h-9 object-contain"
                alt="Previous"
                style={{ transform: 'scaleX(-1)' }}
              />
            </button>

            {/* Красивые точки-индикаторы */}
            <div className="flex items-center gap-2 sm:gap-3">
              {Array.from({ length: totalDots }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex 
                      ? 'scale-125' 
                      : 'hover:scale-110'
                  }`}
                >
                  <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#00A8E2] shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`} />
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
      )}
    </div>
  );
};

export default ExpertsCarousel;
