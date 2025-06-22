// import "../../index.css";
// // Remova as importações de arrowR e arrowL, pois não serão mais usadas para navegação
// import arrowR from "../../assets/arrow-right.svg";
// import arrowL from "../../assets/arrow-left.svg";

// import { Banner1, Banner2 } from "./Banners";
// // Remova a importação de useState, pois não teremos mais estado para navegação
// // import { useState } from "react";

// const Banners = [
//   {
//     banner: <Banner1 />,
//   },
//   {
//     banner: <Banner2 />,
//   },  
// ];

// const Galeria = () => {
//   return (
//     <section className="w-[100%] h-[660px] bg-lightGray3 relative lg:h-[600px] flex">
//       {/* Container para os banners com Flexbox para que fiquem um ao lado do outro */}
//         {Banners.map((item) => (
//           item.banner
//         ))}
//       {/* Remova os spans de navegação se não quiser mais as setas */}
//       <span className="absolute inset-y-1/2 left-4 cursor-pointer" >
//         <img src={arrowL} alt="Previous" />
//       </span>
//       <span className="absolute inset-y-1/2 right-4 cursor-pointer" >
//         <img src={arrowR} alt="Next" />
//       </span>
     
//     </section>
//   );
// };

// export default Galeria;






// import "../../index.css";
// import arrowR from "../../assets/arrow-right.svg";
// import arrowL from "../../assets/arrow-left.svg";
// import { Banner1, Banner2, Banner3 } from "./Banners";
// import { useState } from "react"; // Reintroduzindo useState

// const Banners = [
//   {
//     banner: <Banner1 />,
//   },
//   {
//     banner: <Banner2 />,
//   },
//   // Adicione mais banners aqui para testar o slide de 33%
//   // Exemplo:
//   {
//     banner: <Banner3 />,
//   },
//   // {
//   //   banner: <Banner2 />,
//   // },
//   // {
//   //   banner: <Banner1 />,
//   // },
// ];

// const Galeria = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Calcula a porcentagem de slide com base no número de banners.
//   // Se houver 3 banners, cada slide moverá 100% / 3 = 33.33%
//   // Se houver 2 banners, cada slide moverá 100% / 2 = 50%
//   const slidePercentage = 100 / Banners.length;

//   const handleNavigation = (direction) => {
//     let newIndex = currentIndex;

//     if (direction === "next") {
//       newIndex = (currentIndex + 1) % Banners.length; // Cicla de volta ao início
//     } else {
//       newIndex = (currentIndex - 1 + Banners.length) % Banners.length; // Cicla para o final
//     }
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <section className="w-full h-[660px] bg-lightGray3 relative lg:h-[600px] overflow-hidden">
//       {/* Container que irá se mover */}
//       <div
//         className="flex transition-transform duration-500 ease-in-out h-full"
//         style={{ transform: `translateX(-${currentIndex * slidePercentage}%)` }}
//       >
//         {Banners.map((item, index) => (
//           // Cada banner ocupa 100% da largura do seu "slot" dentro do container flex.
//           // A largura do slot é determinada pela porcentagem de slide.
//           <div key={index} style={{ minWidth: `${100 / Banners.length}%` }} className="flex-shrink-0 h-full">
//             {item.banner}
//           </div>
//         ))}
//       </div>

//       {/* Setas de navegação */}
//       <span
//         className="absolute inset-y-1/2 left-4 cursor-pointer z-10" // Adicionei z-10 para garantir que as setas estejam acima dos banners
//         onClick={() => handleNavigation("prev")}
//       >
//         <img src={arrowL} alt="Previous" />
//       </span>
//       <span
//         className="absolute inset-y-1/2 right-4 cursor-pointer z-10" // Adicionei z-10
//         onClick={() => handleNavigation("next")}
//       >
//         <img src={arrowR} alt="Next" />
//       </span>
//     </section>
//   );
// };

// export default Galeria;



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
