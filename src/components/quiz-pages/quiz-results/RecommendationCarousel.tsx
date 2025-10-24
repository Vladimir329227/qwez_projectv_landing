import { useState, useRef, useEffect } from "react";
import { openProductModal } from "../../../App";
import { RecommendationResult } from "./recommendationEngine";
import { 
  getProductImage2, 
  getProductIngredients, 
  getProductDescription
} from "../../../utils/recommendationHelpers";

interface RecommendationCarouselProps {
  recommendations: RecommendationResult;
}

const RecommendationCarousel = ({ recommendations }: RecommendationCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(14);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Определяем количество карточек для показа
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsToShow(1);
        setGap(6);
      } else if (width < 1024) {
        setCardsToShow(2);
        setGap(10);
      } else if (width < 1280) {
        setCardsToShow(3);
        setGap(14);
      } else {
        setCardsToShow(3);
        setGap(14);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Рассчитываем ширину карточки на основе доступного пространства
  useEffect(() => {
    const updateCardWidth = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const containerWidth = container.getBoundingClientRect().width;
      
      // Вычитаем padding контейнера если есть
      const computedStyle = window.getComputedStyle(container);
      const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
      const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
      
      const availableWidth = containerWidth - paddingLeft - paddingRight;
      
      // Убедимся, что availableWidth положительное число
      if (availableWidth <= 0) return;
      
      const calculatedCardWidth = (availableWidth - gap * (cardsToShow - 1)) / cardsToShow;
      
      setCardWidth(calculatedCardWidth);
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    
    const resizeObserver = new ResizeObserver(updateCardWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    
    return () => {
      window.removeEventListener("resize", updateCardWidth);
      resizeObserver.disconnect();
    };
  }, [cardsToShow, gap]);

  // Сбрасываем индекс при изменении количества карточек
  useEffect(() => {
    const maxIndex = Math.max(0, recommendations.recommended_products.length - cardsToShow);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsToShow, currentIndex, recommendations.recommended_products.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, recommendations.recommended_products.length - cardsToShow);
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, recommendations.recommended_products.length - cardsToShow);
      if (prev <= 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, recommendations.recommended_products.length - cardsToShow);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Обновляем трансформацию
  useEffect(() => {
    if (carouselRef.current && cardWidth > 0) {
      const carousel = carouselRef.current;
      // Точное перемещение: текущий индекс * (ширина карточки + gap)
      const translateX = currentIndex * (cardWidth + gap);

      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(-${translateX}px)`;
    }
  }, [currentIndex, cardWidth, gap]);

  const totalDots = Math.max(1, recommendations.recommended_products.length - cardsToShow + 1);
  const showCarousel = recommendations.recommended_products.length > cardsToShow;

  // Рассчитываем точную ширину контейнера карусели
  const getCarouselWidth = () => {
    if (!showCarousel || cardWidth === 0) return '100%';
    const totalWidth = recommendations.recommended_products.length * cardWidth + 
                      gap * (recommendations.recommended_products.length - 1);
    return `${totalWidth}px`;
  };

  // Получаем ширину для отдельной карточки
  const getSingleCardWidth = () => {
    if (!showCarousel) {
      const cardsCount = Math.min(recommendations.recommended_products.length, cardsToShow);
      return `calc(${100 / cardsCount}% - ${(gap * (cardsCount - 1)) / cardsCount}px)`;
    }
    
    return `${cardWidth}px`;
  };

  return (
    <div className="w-full">
      {/* Карусель */}
      <div 
        className="relative overflow-hidden mb-6 py-6" 
        ref={containerRef}
      >
        <div
          ref={carouselRef}
          className="flex"
          style={{
            gap: `${gap}px`,
            width: getCarouselWidth(),
            marginBottom: `15px`,
          }}
        >
          {recommendations.recommended_products.map((product) => (
            <div
              key={product.product_id}
              className="flex-shrink-0 flex justify-center"
              style={{
                width: getSingleCardWidth(),
                maxWidth: showCarousel ? '400px' : 'none',
                flexShrink: 0,
              }}
            >
              {/* Карточка товара */}
              <div className="flex flex-col bg-white w-full py-4 rounded-xl h-full"
                style={{
                  boxShadow: "0px 12px 35px #3E5BB926"
                }}>
                <div className="flex flex-col items-start self-stretch py-1 mx-4 gap-5 flex-grow">
                  <div className="flex flex-col items-start ml-0.5">
                    <img
                      src={getProductImage2(product.product_id)}
                      className="w-[96px] h-[72px] object-fill"
                    />
                  </div>
                  <div className="flex flex-col self-stretch gap-3">
                    <div className="flex flex-col items-start self-stretch gap-1.5">
                      <span className="text-[#1F2429] text-base font-bold" >
                        {product.product_name}
                      </span>
                      <div className="flex items-center ml-[1px] gap-1.5">
                        <span className="text-[#1F2429] text-[15px] font-bold" >
                          {"🌿"}
                        </span>
                        <span className="text-[#1F2429] text-[15px]" >
                          {getProductIngredients(product.product_id)}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center self-stretch">
                      <span className="text-[#626669] text-[15px] w-full" >
                        {getProductDescription(product)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end self-stretch mt-auto">
                  <div className="flex flex-col items-start mr-4">
                    <button
                      aria-label="View product"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        openProductModal(product.product_id);
                      }}
                      className="flex items-center bg-[#1F2429] hover:bg-[#0f1215] transition-colors duration-200 rounded-[120000000px] p-2"
                    >
                      <img
                        src="/quiz-result-images/icon_arrow_up.png" 
                        className="ml-auto w-2 h-2 object-contain"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Навигация с точками - показываем только если нужна карусель */}
      {showCarousel && (
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
      )}
    </div>
  );
};

export default RecommendationCarousel;