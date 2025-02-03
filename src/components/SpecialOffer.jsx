import Ellipse from "../assets/Ellipse.svg"
import Shoes from "../assets/Shoes.svg"

const SpecialOffer = () => {
    return ( 
        <section className="w-full h-[550px] bg-white flex">
            <div className="w-2/4 border-3 h-full relative flex justify-center items-center">
                <img src={Ellipse} alt="" />
                <img src={Shoes} alt="" className="absolute" />
            </div>

            <div className="w-2/4 border-3 h-full flex justify-center items-center">
                {/* <div className=""> */}
                    <div className="flex flex-col p-3 text-center justify-center gap-4 items-center md:text-start md:items-start lg:justify-start">
                        <p className="font-inter font-bold text-[16px] text-warning">Melhores ofertas personalizadas</p>
                        <h1 className="font-inter font-extrabold text-[40px] md:text-[64px] text-black">Queima de estoque Nike 🔥</h1>
                        <p className="font-inter font-light text-[18px] text-darkGray2">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                        <button className="bg-primary w-full h-[48px] text-[16px] font-bold md:w-[220px]">Ver Ofertas</button>
                    </div>
                {/* </div> */}
            </div>
        </section>
     );
}
 
export default SpecialOffer;