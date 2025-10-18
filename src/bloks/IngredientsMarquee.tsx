import React from 'react';

const IngredientsMarquee = () => {
  const ingredients = [
    { name: "Vitamin E", image: "/ingredients/ingredient-01.png" },
    { name: "Eleutherococcus extract", image: "/ingredients/ingredient-02.png" },
    { name: "Melissa", image: "/ingredients/ingredient-03.png" },
    { name: "Grape seed extract", image: "/ingredients/ingredient-04.png" },
    { name: "Cola nut", image: "/ingredients/ingredient-05.png" },
    { name: "Argan oil", image: "/ingredients/ingredient-06.png" },
    { name: "Paprika", image: "/ingredients/ingredient-07.png" },
    { name: "Magnesium", image: "/ingredients/ingredient-08.png" },
    { name: "Cat's claw", image: "/ingredients/ingredient-09.png" },
    { name: "Witch hazel leaf extract", image: "/ingredients/ingredient-10.png" },
    { name: "Fucus vesiculosus", image: "/ingredients/ingredient-11.png" },
    { name: "Acai berry extract", image: "/ingredients/ingredient-12.png" },
    { name: "Zinc", image: "/ingredients/ingredient-13.png" },
    { name: "Garcinia cambogia extract", image: "/ingredients/ingredient-14.png" },
    { name: "Copper", image: "/ingredients/ingredient-15.png" },
    { name: "Goji berry extract", image: "/ingredients/ingredient-16.png" },
    { name: "Cherry stems", image: "/ingredients/ingredient-17.png" },
    { name: "Bitter orange extract", image: "/ingredients/ingredient-18.png" },
    { name: "Marigold", image: "/ingredients/ingredient-19.png" },
    { name: "Vitamin B", image: "/ingredients/ingredient-20.png" },
    { name: "Ceramides", image: "/ingredients/ingredient-21.png" },
    { name: "Valerian", image: "/ingredients/ingredient-22.png" },
    { name: "Prickly Pear", image: "/ingredients/ingredient-23.png" },
    { name: "Ginkgo biloba extract", image: "/ingredients/ingredient-24.png" },
    { name: "Soy lecithin", image: "/ingredients/ingredient-25.png" },
    { name: "Omega-3", image: "/ingredients/ingredient-26.png" },
    { name: "Calcium", image: "/ingredients/ingredient-27.png" },
    { name: "Lavender", image: "/ingredients/ingredient-28.png" },
    { name: "Green tea leaf extract", image: "/ingredients/ingredient-29.png" },
    { name: "Glucans 30 wheat lipid extract", image: "/ingredients/ingredient-30.png" },
    { name: "Bamboo extract", image: "/ingredients/ingredient-31.png" },
    { name: "Choline", image: "/ingredients/ingredient-32.png" },
    { name: "Echinacea", image: "/ingredients/ingredient-33.png" },
    { name: "Angelica chinensis", image: "/ingredients/ingredient-34.png" },
    { name: "Seaweed", image: "/ingredients/ingredient-35.png" },
    { name: "Ginger Root", image: "/ingredients/ingredient-36.png" },
    { name: "Chrome", image: "/ingredients/ingredient-37.png" },
    { name: "Guarana", image: "/ingredients/ingredient-38.png" },
    { name: "Vitamin D3", image: "/ingredients/ingredient-39.png" },
    { name: "Borage oil", image: "/ingredients/ingredient-40.png" },
    { name: "Blueberry", image: "/ingredients/ingredient-41.png" },
    { name: "Sod", image: "/ingredients/ingredient-42.png" },
    { name: "Organic spirulina", image: "/ingredients/ingredient-43.png" },
    { name: "Vitamin C", image: "/ingredients/ingredient-44.png" },
    { name: "Lalmin® Immune", image: "/ingredients/ingredient-45.png" },
    { name: "Mulberry", image: "/ingredients/ingredient-46.png" }
  ];

  // Создаем несколько дорожек с разной скоростью - дублируем для бесшовной анимации
  const track1 = [...ingredients, ...ingredients, ...ingredients];
  const track2 = [...ingredients.slice(5), ...ingredients.slice(5), ...ingredients.slice(5)];
  const track3 = [...ingredients.slice(10), ...ingredients.slice(10), ...ingredients.slice(10)];

  return (
    <div className="w-full from-[#F8F9FA] to-[#E8F4FD] overflow-hidden">
      
      {/* Первая дорожка */}
      <div className="marquee-track">
        <div className="marquee-content">
          {track1.map((ingredient, index) => (
            <div key={`track1-${index}`} className={`ingredient-item flex-col items-center`}>
              <img 
                src={ingredient.image} 
                alt={ingredient.name}
                className="h-[185px] w-[148px] object-contain"
              />
              <span className="ingredient-name">{ingredient.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Вторая дорожка */}
      <div className="marquee-track">
        <div className="marquee-content marquee-reverse">
          {track2.map((ingredient, index) => (
            <div key={`track2-${index}`} className={`ingredient-item flex-col items-center`}>
              <img 
                src={ingredient.image} 
                alt={ingredient.name}
                className="h-[185px] w-[148px] object-contain"
              />
              <span className="ingredient-name">{ingredient.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Третья дорожка */}
      <div className="marquee-track">
        <div className="marquee-content marquee-slow">
          {track3.map((ingredient, index) => (
            <div key={`track3-${index}`} className={`ingredient-item flex-col items-center`}>
              <img 
                src={ingredient.image} 
                alt={ingredient.name}
                className="h-[185px] w-[148px] object-contain"
              />
              <span className="ingredient-name">{ingredient.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .marquee-track {
            overflow: hidden;
            white-space: nowrap;
            position: relative;
          }

          .marquee-content {
            display: inline-flex;
            align-items: center;
            animation: marquee 180s linear infinite;
          }

          .marquee-reverse {
            animation: marquee-reverse 210s linear infinite;
          }

          .marquee-slow {
            animation: marquee 240s linear infinite;
          }

          .ingredient-item {
            display: flex;
            align-items: center;
            padding: 0 1rem 0 0;
            transition: all 0.3s ease;
            flex-shrink: 0;
            min-width: max-content;
            backdrop-filter: blur(10px);
          }

          .ingredient-item:hover {
            transform: translateY(-2px) scale(1.05);
          }

          .ingredient-icon {
            width: 24px;
            height: 24px;
            object-fit: contain;
            flex-shrink: 0;
          }

          .ingredient-name {
            font-weight: 600;
            color:rgb(96, 99, 105);
            font-size: 1rem;
            white-space: nowrap;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes marquee-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          /* Непрерывная анимация без паузы */
          .marquee-track:hover .marquee-content {
            animation-play-state: running;
          }
        `
      }} />
    </div>
  );
};

export default IngredientsMarquee;