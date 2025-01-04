import camisa from "../assets/camisa.svg"
import headset from "../assets/headset.svg"
import bone from "../assets/bone.svg"
import tenis from "../assets/tenis.svg"
import calca from "../assets/calca.svg" 
import "../index.css"

const Colecoes = () => {
    return ( 
        <section className="p-[24px] w-full mx-auto xl:w-[1200px] flex flex-col items-center">
            <h2 className="text-darkGray2 mb-[6px] font-inter font-bold text-[24px] mb-[16px] ">Coleções em Destaque</h2>
            <ul className="flex gap-[48px]">
                <li>
                    <span className="rounded-full w-[80px] h-[80px] flex items-center justify-center hover:drop-shadow">
                        <img id="icon" src={camisa} alt="" />
                    </span>
                    <p className="text-center text-darkGray2 mt-[3px] font-bold font-inter text-[14px]">Camisas</p>
                </li>
                <li>
                    <span className="rounded-full w-[80px] h-[80px] flex items-center justify-center hover:drop-shadow">
                        <img id="icon" className="" src={calca} alt="" />
                    </span>
                    <p className="text-center text-darkGray2 mt-[3px] font-bold font-inter text-[14px]">Calças</p>
                </li>
                <li>
                    <span className="rounded-full w-[80px] h-[80px] flex items-center justify-center hover:drop-shadow">
                        <img id="icon" className="" src={bone} alt="" />
                    </span>
                    <p className="text-center text-darkGray2 mt-[3px] font-bold font-inter text-[14px]">Bonés</p>
                </li>
                <li>
                    <span className="rounded-full w-[80px] h-[80px] flex items-center justify-center hover:drop-shadow">
                        <img id="icon" className="" src={headset}alt=""/>
                    </span>
                    <p className="text-center text-darkGray2 mt-[3px] font-bold font-inter text-[14px]">Headsets</p>

                </li>
                <li>
                    <span className="rounded-full w-[80px] h-[80px] flex items-center justify-center hover:drop-shadow">
                        <img id="icon" className="" src={tenis} alt="" />
                    </span>
                    <p className="text-center text-darkGray2 mt-[3px] font-bold font-inter text-[14px]">Tênis</p>
                </li>
            </ul>
        </section>
     );
}
 
export default Colecoes;