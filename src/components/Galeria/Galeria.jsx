import "../../index.css"
import arrowR from "../../assets/arrow-right.svg";
import arrowL from "../../assets/arrow-left.svg";
import { Banner1, Banner2 } from "./Banners";
import { useState } from "react";

const Banners = [
  {
    banner: <Banner1 />,
  },
  {
    banner: <Banner2 />,
  },
];

const Galeria = () => {
  const [Index, SetIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const handleNavigation = (direction) => {
    if (isAnimating) return;

    const nextIndex =
      direction === "next"
        ? Math.min(Index + 1, Banners.length - 1)
        : Math.max(Index - 1, 0);

    if (nextIndex !== Index) {
      setIsAnimating(true);
      setAnimationClass(direction === "next" ? "slide-out-left" : "slide-out-right");

      setTimeout(() => {
        SetIndex(nextIndex);
        setAnimationClass(direction === "next" ? "slide-in-right" : "slide-in-left");
      }, 500);
      
      setTimeout(() => {
        setIsAnimating(false);
        setAnimationClass("");
      }, 1000); // Total para saída e entrada
    }
  };

  return (
    <section className="w-full h-[660px] bg-lightGray3 overflow-hidden relative lg:h-[600px]">
      <div
        className={`flex w-[95%] absolute right-2/4 translate-x-2/4 transition-all duration-500 ${animationClass}`}>
        {Banners[Index].banner}
      </div>
      <span className="absolute inset-y-1/2 left-4 cursor-pointer" onClick={() => handleNavigation("prev")}>
        <img src={arrowL} alt="Previous" />
      </span>
      <span className="absolute inset-y-1/2 right-4 cursor-pointer" onClick={() => handleNavigation("next")}>
        <img src={arrowR} alt="Next" />
      </span>
    </section>
  );
};

export default Galeria;
