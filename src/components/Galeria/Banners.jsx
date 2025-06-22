import whiteSneaker from "../../assets/white-sneaker.png"
import ornament from "../../assets/ornament.png"

const Banner1 = () => {
    return ( 
        <div className="flex flex-col-reverse flex-wrap flex-shrink-0 justify-center p-[48px] items-center right-2/4 w-[100%] h-[100%] overflow-hidden lg:flex-row">
            <div className="flex flex-col p-[24px] text-center justify-center gap-4 w-[80%] h-[50%] items-center md:w-2/4 md:h-3/4 md:text-start md:items-start lg:justify-start lg:w-[670px]">
                <p className="font-inter font-bold text-[16px] text-warning">Melhores ofertas personalizadas</p>
                <h1 className="font-inter font-extrabold text-[40px] md:text-[64px] text-black">Queima de estoque Nike 🔥</h1>
                <p className="font-inter font-light text-[18px] text-darkGray2">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                <button className="bg-primary w-full h-[48px] text-[16px] font-bold md:w-[220px]">Ver Ofertas</button>
            </div>
            <div className="relative h-[250px] w-full p-3 md:w-2/4 md:h-3/4 flex justify-center items-center">
                <img className=" right-12 rotate-[-21deg] object-contain top-4 h-[160px] w-[280px]  md:right-12 md:w-[600px] md:h-[431px]" src={whiteSneaker} alt="" />
                <img className="absolute w-[140px] h-[140px] right-[-89px] top-[-20px] md:right-[-60px] md:top-[-40px]" src={ornament} alt="" />
            </div>
        </div>
     );
}
const Banner2 = () => {
    return ( 
        <div className="flex flex-col-reverse flex-wrap justify-center flex-shrink-0 items-center w-[100%] h-[660px] lg:w-11/12 lg:h-[600px] lg:flex-row">
            <h1 className="text-black">oi</h1>
        </div>
     );
}
const Banner3 = () => {
    return ( 
        <div className="flex flex-col-reverse flex-wrap justify-center flex-shrink-0 items-center w-[100%] h-[660px] lg:w-11/12 lg:h-[600px] lg:flex-row">
            <h1 className="text-black">Salve</h1>
        </div>
     );
}
 
export {Banner1, Banner2, Banner3};