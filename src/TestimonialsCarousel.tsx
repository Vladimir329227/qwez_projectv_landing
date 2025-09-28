import { useState, useRef, useEffect } from 'react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Данные отзывов из вашего кода
  const testimonials = [
    {
      id: 1,
      stars: "/figma/feea408cc3f29c3b.png",
      text: "Sensational! Within 2 months, I got rid of these so-called \"warts\" on my hands that I had been fighting for 3 years! Project V's products are an investment in a long and healthy life!",
      name: "Martha",
      verifiedIcon: "/figma/134c20f110cf0754.png",
      hasShadow: false
    },
    {
      id: 2,
      stars: "/figma/5a0939dcbe4fc1d7.png",
      text: "Product A helped me get rid of the onset of osteoarthritis. I take 6 capsules a day - 2 in the morning, 2 at noon and 2 in the evening. I also take P and N. You get to feel great. Nobody can tell me that it doesn't work. I RECOMMEND IT!",
      name: "Camilla",
      verifiedIcon: "/figma/3f73070e378af6c0.png",
      hasShadow: true
    },
    {
      id: 3,
      stars: "/figma/01d4078010005bf7.png",
      text: "I got rid of small kidney stones. I also got rid of torsion in my legs and crusts. Now I have forgotten all about that pain. I will recommend these products to everyone.",
      name: "Martha",
      verifiedIcon: "/figma/0b8090b4263ac852.png",
      hasShadow: false
    },
    {
      id: 4,
      stars: "/figma/feea408cc3f29c3b.png",
      text: "Amazing results! After using Project V products for just one month, I noticed significant improvements in my overall health and energy levels. Highly recommended!",
      name: "Sarah",
      verifiedIcon: "/figma/134c20f110cf0754.png",
      hasShadow: false
    }
  ];

  // Определяем количество карточек для показа
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsToShow(1);
      } else if (width < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3); // Всегда 3 карточки на десктопе
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Сбрасываем индекс при изменении количества карточек
  useEffect(() => {
    const maxIndex = Math.max(0, testimonials.length - cardsToShow);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsToShow, currentIndex, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, testimonials.length - cardsToShow);
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, testimonials.length - cardsToShow);
      if (prev <= 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, testimonials.length - cardsToShow);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Функция для получения gap в зависимости от размера экрана
  const getGap = () => {
    const width = window.innerWidth;
    if (width < 640) return 16;
    if (width < 1024) return 24;
    return 33;
  };

  // Рассчитываем ширину карточки с учетом gap
  const getCardWidth = () => {
    if (!containerRef.current) return 0;
    const containerWidth = containerRef.current.offsetWidth;
    const gap = getGap();
    return (containerWidth - (gap * (cardsToShow - 1))) / cardsToShow;
  };

  // Обновляем трансформацию при изменении currentIndex или размера окна
  useEffect(() => {
    if (carouselRef.current && containerRef.current) {
      const carousel = carouselRef.current;
      const containerWidth = containerRef.current.offsetWidth;
      const gap = getGap();
      const cardWidth = (containerWidth - (gap * (cardsToShow - 1))) / cardsToShow;
      const translateX = currentIndex * (cardWidth + gap);
      
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateX(-${translateX}px)`;
    }
  }, [currentIndex, cardsToShow]);

  // Обработчик изменения размера окна
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current && containerRef.current) {
        const carousel = carouselRef.current;
        carousel.style.transition = 'none';
        
        // Принудительное обновление позиции после ресайза
        setTimeout(() => {
          if (carouselRef.current && containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const gap = getGap();
            const cardWidth = (containerWidth - (gap * (cardsToShow - 1))) / cardsToShow;
            const translateX = currentIndex * (cardWidth + gap);
            carouselRef.current.style.transform = `translateX(-${translateX}px)`;
            
            setTimeout(() => {
              if (carouselRef.current) {
                carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
              }
            }, 50);
          }
        }, 10);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, cardsToShow]);

  const totalDots = Math.max(1, testimonials.length - cardsToShow + 1);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{marginBottom: '15px'}}>
      {/* Карусель без градиентных краев */}
      <div className="relative overflow-visible mb-8" ref={containerRef}>
        <div 
          ref={carouselRef}
          className="flex"
          style={{ 
            gap: `${getGap()}px`,
            width: `calc(${(testimonials.length * 100) / cardsToShow}% + ${getGap() * (testimonials.length - 1)}px)`,
            marginBottom: `15px`
          }}
        >
          {testimonials.map((testimonial, index) => {
            const isCenterCard = cardsToShow === 3 && index === currentIndex + 1;
            const isDesktop = window.innerWidth >= 1024;
            
            return (
              <div 
                key={testimonial.id} 
                className="flex-shrink-0 flex justify-center"
                style={{ 
                  width: `calc(${100 / testimonials.length}% - ${getGap() * (testimonials.length - 1) / testimonials.length}px)`
                }}
              >
                {/* Карточка отзыва */}
                <div 
                  className={`flex flex-1 flex-col bg-white py-6 rounded-2xl border border-solid border-[#B6B6B9] h-full w-full mx-2 sm:mx-3 transition-all duration-300 ${
                    isCenterCard && isDesktop ? 'scale-110 shadow-lg' : ''
                  }`}
                  style={{
                    ...(testimonial.hasShadow ? { boxShadow: "0px 4px 4px #0C0C0D0D" } : {}),
                    transformOrigin: 'center center',
                    zIndex: isCenterCard && isDesktop ? 10 : 1
                  }}
                >
                  <div className="flex flex-col items-center self-stretch mb-2">
                    <img
                      src={testimonial.stars} 
                      className="w-24 h-4 object-fill"
                      alt="Rating stars"
                    />
                  </div>
                  <span className="text-[#1F2429] text-base mx-4 sm:mx-6 flex-1">
                    {testimonial.text}
                  </span>
                  <span className="text-[#1F2429] text-base font-bold text-center mb-2 mx-4 sm:mx-6">
                    {testimonial.name}
                  </span>
                  <div className="flex items-center self-stretch mx-4 sm:mx-[131px] gap-2">
                    <img
                      src={testimonial.verifiedIcon} 
                      className="w-6 h-6 object-fill"
                      alt="Verified"
                    />
                    <span className="text-[#5DB23F] text-base">
                      Verified Buyer
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
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
    </div>
  );
};

export default TestimonialsCarousel;
