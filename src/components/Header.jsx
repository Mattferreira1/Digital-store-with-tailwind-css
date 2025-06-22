import menu from "../assets/menu-button.svg"
import logo from "../assets/logo.svg"
import search from "../assets/search.svg"
import cart from "../assets/cart.svg"
import { NavLink, useNavigate } from "react-router-dom";
import "../index.css"
import { useState } from "react";
import SideMenu from "./SideMenu";
// import { useEffect, useState } from "react";



const NavLinks=()=>{
    return (
        <div className="md: hidden lg:flex gap-7 px-2">
            <NavLink to="/" className="text-darkGray2 text-base font-light font-inter hover:underline">Home</NavLink>
            <NavLink to="/Produtos" className="text-darkGray2 text-base font-light font-inter hover:underline hover:text-darkGray3">Produtos</NavLink>
            <NavLink to="/Produtos" className="text-darkGray2 text-base font-light font-inter hover:underline hover:text-darkGray3">Categorias</NavLink>
            <NavLink to="/Produtos" className="text-darkGray2 text-base font-light font-inter hover:underline hover:text-darkGray3 ">Meus Pedidos</NavLink>
        </div>
    )}


// eslint-disable-next-line react/prop-types
const HeaderMenu = ({is_open, setMenu})=>{
  const navigate = useNavigate();
    return (
        <section>
            <div className="flex justify-between items-center mb-4 sm:mb-1 lg:mb-9 ">
            <img src={menu} alt="" onClick={()=> setMenu(!is_open)}className="w-4 h-4 cursor-pointer sm:block md:block lg:hidden" />

            <img src={logo} alt="" onClick={() => navigate("/")} className=" sm:w-32 h-6 lg:w-60 lg:h-[50px] xl:w-60 xl:h-[50px]"/>

            <input className="hidden text-darkGray2 sm:hidden md:hidden w-1/3 lg:block bg-lightGray3 w-2/5 mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 xl:w-3/5" type="text" placeholder="Pesquisar produto..."/>

            <div className="hidden sm:hidden md:hidden lg:flex gap-6">
                <a className="flex items-center justify-center text-darkGray2 text-base font-normal hover:hover:text-darkGray3 underline" href="">Cadastrar</a>

                <a href="" className="bg-primary w-28 h-10 text-white rounded-lg flex items-center justify-center">Entrar</a>
            </div>

            <span className="flex gap-3 items-center">
                <img src={search} alt=""className=" cursor-pointer sm:w-4 h-4 lg:hidden" />
                <img src={cart} alt=""className=" cursor-pointer sm:w-4 h-4 md:w-6 h-4 lg:w-8 h-5 xl:w-6 h-6" />
            </span>
        </div>
        </section>
    )
}
const Header = () => {
    const [Menu, setMenu]= useState(false) 
    return ( 
            <section className="container-none bg-white w-full flex lg:h-40 flex-col p-6 ">

                <SideMenu is_open={Menu} setMenu={setMenu} />
                <HeaderMenu is_open={Menu} setMenu={setMenu}/>
                <input className=" bg-lightGray3 text-darkGray2 mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm lg:hidden" type="text" placeholder="Pesquisar produto..."/>
                <NavLinks/>
            </section>

     );
}
 
export default Header;
