import "../../index.css";
import { useRef } from "react";

import arrowR from "../../assets/arrow-right.svg";
import arrowL from "../../assets/arrow-left.svg";

import { Banner1, Banner2, Banner3 } from "./Banners";

const Banners = [
  { banner: <Banner1 /> },
  { banner: <Banner2 /> },
  { banner: <Banner3 /> },
];

const Galeria = () => {
  const sliderRef = useRef(null);

  const handleSlide = (direction) => {
    const container = sliderRef.current;
    const slideWidth = container.offsetWidth; // agora 100% da largura

    if (direction === "left") {
      container.scrollBy({ left: -slideWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: slideWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full h-[660px] bg-lightGray3 relative lg:h-[600px] overflow-hidden">
      <div
        ref={sliderRef}
        className="flex w-full h-full overflow-x-hidden scroll-smooth scrollbar-hide"
      >
        {Banners.map((item, i) => (
          <div key={i} className="w-full flex-shrink-0 h-full">
            {item.banner}
          </div>
        ))}
      </div>

      {/* Setas */}
      <span
        className="absolute inset-y-1/2 left-4 z-10 cursor-pointer"
        onClick={() => handleSlide("left")}
      >
        <img src={arrowL} alt="Anterior" />
      </span>
      <span
        className="absolute inset-y-1/2 right-4 z-10 cursor-pointer"
        onClick={() => handleSlide("right")}
      >
        <img src={arrowR} alt="Próximo" />
      </span>
    </section>
  );
};

export default Galeria;
