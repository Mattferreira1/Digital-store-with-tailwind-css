import logo from "../assets/logo (1).svg"
import facebook from "../assets/icons/facebook.svg"
import twitter from "../assets/icons/Twitter.svg"
import instagram from "../assets/icons/instagram.svg"

const Footer = () => {
    return ( 
        <footer>
            <div className="bg-black px-[8px] py-[50px] flex flex-col md:flex-row md:gap-2 lg:gap-[8px] lg:px-[72px] lg:pt-[72px] lg:pb-[34px] lg:justify-between">
                <div className="w-[300px]">
                    <img src={logo} alt="" />
                    <p className="font-inter font-medium text-[14px] md:font-light lg:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <ul className="flex mt-[20px] gap-[35px]">
                        <li>
                            <img src={facebook} alt="" />
                        </li>
                        <li>
                            <img src={instagram} alt="" />
                        </li>
                        <li>
                            <img src={twitter} alt="" />
                        </li>
                    </ul>
                </div>

                <div className="w-[400px] flex my-[40px] md:m-0 lg:w-[400px]">
                    <div className="w-2/4 p3">
                        <h3 className="text-[18px] font-inter font-semibold ">Informação</h3>
                        <ul className="flex flex-col gap-[8px] mt-[10px]">
                            <li className="font-inter text-[16px] font-light">Sobre a Drip store</li>
                            <li className="font-inter text-[16px] font-light">Segurança</li>
                            <li className="font-inter text-[16px] font-light">Wishlist</li>
                            <li className="font-inter text-[16px] font-light"> Blog</li>
                            <li className="font-inter text-[16px] font-light">Trabalhe conosco</li>
                            <li className="font-inter text-[16px] font-light">Meus pedidos</li>
                        </ul>
                    </div>

                    <div className="w-2/4 p3">
                        <h3 className="text-[18px] font-inter font-semibold ">Informação</h3>
                        <ul className="flex flex-col gap-[8px] mt-[10px]">
                            <li className="font-inter text-[16px] font-light">Camisetas</li>
                            <li className="font-inter text-[16px] font-light">Calças</li>
                            <li className="font-inter text-[16px] font-light">Bonés</li>
                            <li className="font-inter text-[16px] font-light">Headphones</li>
                            <li className="font-inter text-[16px] font-light">Tênis</li>
                        </ul>
                    </div>
                </div>

                <div className="w-[300px]"> 
                    <h3 className="text-[18px] font-inter font-semibold">Contato</h3>
                    <ul className="flex flex-col gap-[8px] mt-[10px]">
                        <li className="font-inter text-[16px] font-light">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</li>
                        <li className="font-inter text-[16px] font-light">(85) 3051-3411</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center">
                <hr className="w-[1240px]"/>
            </div>
            <p className="py-[22px] text-center font-inter text-[13px] font-light">@ 2022 Digital College</p>
        </footer>
     );
}
 
export default Footer;
