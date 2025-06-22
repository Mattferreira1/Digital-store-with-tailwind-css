import starWars from "../assets/images/star-wars.png"
import shoes from "../assets/images/shoes.png"
import headset from "../assets/images/headset.png"

const Destaques = () => {
    return ( 
        <section className="mx-auto w-[80%] xl:w-[1200px] py-[16px]">
            <h2 className="text-darkGray2 mb-[6px] font-inter font-bold text-[24px] text-center lg:text-start">Coleções em destaque</h2>
            <div className="flex flex-col justify-between items-center gap-4 md:flex-row ">
                <div className="w-[380px] h-[212px] bg-[#D8E3F2] p-[20px] shrink-0 rounded-md relative flex  overflow-hidden md:w-[31%]">
                    <div className="w-2/4 h-full flex justify-evenly flex-col z-10">
                        <p className="bg-[#E7FF86] flex justify-center items-center rounded-full text-darkGray2 w-[90px] h-[30px] text-[14px] font-bold">30% OFF</p>
                        <h1 className="text-[24px] font-bold font-inter text-[28px] text-darkGray2">Novo drop
                        Supreme</h1>
                        <button className="bg-white rounded-lg w-[144px] h-[48px] text-primary">Comprar</button>
                    </div>
                    <img src={starWars}className="w-[200px] absolute botton-0 right-0 z-0"/>
                </div>

                <div className="w-[380px] h-[212px] bg-[#D8E3F2] p-[20px] shrink-0 rounded-md relative flex overflow-hidden md:w-[31%]">
                    <div className="w-2/4 h-full flex justify-evenly flex-col z-10">
                        <p className="bg-[#E7FF86] flex justify-center items-center rounded-full text-darkGray2 w-[90px] h-[30px] text-[14px] font-bold">30% OFF</p>
                        <h1 className="text-[24px] font-bold font-inter text-[28px] text-darkGray2">Novo drop
                        Supreme</h1>
                        <button className="bg-white rounded-lg w-[144px] h-[48px] text-primary">Comprar</button>
                    </div>
                    <img src={shoes}className="w-[200px] absolute botton-0 right-0 z-0"/>
                </div>

                <div className="w-[380px] h-[212px] bg-[#D8E3F2] p-[20px] shrink-0 rounded-md relative flex overflow-hidden md:w-[31%]"> 
                    <div className="w-2/4 h-full flex justify-evenly flex-col z-10">
                        <p className="bg-[#E7FF86] flex justify-center items-center rounded-full text-darkGray2 w-[90px] h-[30px] text-[14px] font-bold">30% OFF</p>
                        <h1 className="text-[24px] font-bold font-inter text-[28px] text-darkGray2">Novo drop
                        Supreme</h1>
                        <button className="bg-white rounded-lg w-[144px] h-[48px] text-primary">Comprar</button>
                    </div>
                    <img src={headset}className="w-[200px] absolute botton-0 right-0 z-0"/>
                </div>

            </div>
        </section>
     );
}
 
export default Destaques