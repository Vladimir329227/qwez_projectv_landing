import React, { useRef, useEffect, useState } from 'react';
import './index.css'; 

const InfiniteScroller = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [duplicates, setDuplicates] = useState(3);

  const items = [
    { icon: "/figma/4688cfc0a83381f6.png", text: "NON GMO" },
    { icon: "/figma/1310a6e51e6367fb.png", text: "PLANT-BASED" },
    { icon: "/figma/2f0f3b4f0d3d3509.png", text: "NO SUGAR" },
    { icon: "/figma/2e7a45d67335c568.png", text: "NATURAL INGREDIENTS" },
    { icon: "/figma/18ae96b6e0f77080.png", text: "GMP CERTIFIED" },
    { icon: "/figma/18ae96b6e0f77080.png", text: "NO PRESERVATIVES" }
  ];

  // Рассчитываем необходимое количество дубликатов
  useEffect(() => {
    const calculateDuplicates = () => {
      if (!containerRef.current || !contentRef.current) return 3;
      
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.offsetWidth;
      
      // Минимум 2 дубликата + запас для бесшовной анимации
      const needed = Math.ceil((containerWidth * 2) / contentWidth) + 1;
      return Math.max(3, needed);
    };

    const updateDuplicates = () => {
      setDuplicates(calculateDuplicates());
    };

    // Инициализация
    updateDuplicates();

    // Обработчик изменения размера
    const resizeObserver = new ResizeObserver(updateDuplicates);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Создаем дубликаты элементов
  const renderItems = () => {
    return Array.from({ length: duplicates }, (_, duplicateIndex) => (
      <div key={duplicateIndex} className="flex items-center flex-shrink-0">
        {items.map((item, itemIndex) => (
          <div key={`${duplicateIndex}-${itemIndex}`} className="flex items-center gap-2 mx-4">
            <img 
              src={item.icon} 
              className="w-[15px] h-[19px] object-contain" 
              alt={item.text}
            />
            <span className="text-white text-base font-bold whitespace-nowrap">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div 
      ref={containerRef}
      className="relative flex items-center mb-8 w-full overflow-hidden bg-blue-500 py-4"
    >
      {/* Градиенты для плавного скрытия */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-500 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-500 to-transparent z-10 pointer-events-none" />
      
      {/* Скрытый элемент для измерения ширины контента */}
      <div 
        ref={contentRef}
        className="flex items-center absolute opacity-0 pointer-events-none"
      >
        {items.map((item, index) => (
          <div key={`measure-${index}`} className="flex items-center gap-2 mx-4">
            <img src={item.icon} className="w-[15px] h-[19px] object-contain" alt="" />
            <span className="text-white text-base font-bold whitespace-nowrap">{item.text}</span>
          </div>
        ))}
      </div>
      
      {/* Анимированный контент */}
      <div className="flex animate-infinite-scroll">
        {renderItems()}
      </div>
    </div>
  );
};

export default InfiniteScroller;