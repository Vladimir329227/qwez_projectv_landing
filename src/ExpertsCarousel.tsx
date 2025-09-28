import { useState, useRef, useEffect } from 'react';

const ExpertsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
    {
        id: 5,
        image: "/figma/de669e817a4da2d5.png",
        name: "Fortunato Torre",
        title: "MANAGING DIRECTOR",
        description: "Research and development director at the FCC-Fragrances, Cosmetics & Consulting, Ltd cosmetics manufacturer"
    },
    {
        id: 6,
        image: "/figma/ad61296f2426129c.png",
        name: "Gerard Strauch",
        title: "PRESIDENT",
        description: "President of the Trading Point Elite Pharm Laboratories pharmaceutical manufacturer"
    }
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

  // Сбрасываем индекс при изменении количества карточек
  useEffect(() => {
    const maxIndex = Math.max(0, experts.length - cardsToShow);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsToShow, currentIndex, experts.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, experts.length - cardsToShow);
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, experts.length - cardsToShow);
      if (prev <= 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, experts.length - cardsToShow);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Функция для получения gap в зависимости от размера экрана
  const getGap = () => {
    const width = window.innerWidth;
    if (width < 640) return 6;
    if (width < 1024) return 10;
    return 24;
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
      const cardWidth = getCardWidth();
      const gap = getGap();
      const translateX = currentIndex * (cardWidth + gap);
      
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateX(-${translateX}px)`;
    }
  }, [currentIndex, cardsToShow]);

  // Обработчик изменения размера окна
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        carousel.style.transition = 'none';
        
        // Принудительное обновление позиции после ресайза
        setTimeout(() => {
          if (carouselRef.current) {
            const cardWidth = getCardWidth();
            const gap = getGap();
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

  const totalDots = Math.max(1, experts.length - cardsToShow + 1);

  return (
     <div className="w-full max-w-7xl mx-auto px-1 sm:px-2 py-2">
      {/* Заголовок */}
      <div className="text-center mb-4">
        <h2 className="text-[#1F2429] text-2xl sm:text-3xl lg:text-4xl font-bold">
          Meet Our Experts
        </h2>
      </div>

       {/* Карусель с градиентными краями */}
       <div className="relative overflow-hidden min-h-[500px] sm:min-h-[550px] lg:min-h-[580px]" ref={containerRef}>
        {/* Градиентные маски для левого и правого краев */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 lg:w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        
        <div 
          ref={carouselRef}
          className="flex"
          style={{ 
            gap: `${getGap()}px`,
            width: `calc(${(experts.length * 100) / cardsToShow}% + ${getGap() * (experts.length - 1)}px)`,
            marginBottom: `20px`
          }}
        >
          {experts.map((expert) => (
            <div 
              key={expert.id} 
              className="flex-shrink-0 flex justify-center"
              style={{ 
                width: `calc(${100 / experts.length}% - ${getGap() * (experts.length - 1) / experts.length}px)`
              }}
            >
               {/* Карточка эксперта с адаптивными размерами */}
                <div className="flex flex-col bg-white rounded-2xl h-full w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[500px] sm:min-h-[550px] lg:min-h-[580px]">
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

      {/* Навигация с точками */}
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
    </div>
  );
};

export default ExpertsCarousel;
