import { useEffect, useState } from "react";
import { API } from "../services";

// import products from "./Produtos"
// eslint-disable-next-line react/prop-types
const ProdutosListining = ({text}) => {
    // const filteredProducts = produtos.filter((produto) => produto.featured === true)
const [produtos, setProdutos]= useState([])
    async function fetchPordutos(){
        API.get()
        .then((response)=>{
            setProdutos(response.data)
        })
    }
    useEffect(()=>{
        fetchPordutos()
    },[])


    return (
        <section className={`w-[100%] flex flex-col items-center mx-auto`}>
            {text?(
                <div className="w-[95%] flex justify-between">
                <span className="text-black">Produtos em alta</span><span className="text-black">Ver todos</span>
            </div>
            ):""
            }
            <div className={` w-full p-6 grid gap-4 grid-cols-2 px-[24px] mx-auto md:grid-cols-4 xl:w-full `} >
                {produtos.map((produto, index) =>(
                    <div key={index} id={produto.id} className="w-[100%] h-[350px] border-2 rounded-lg flex flex-col items-center shadow-lg">
                        <div className="w-full h-[250px] border-2">
                            <img src={produto.image} className="w-[80%] h-[80%] object-contain"alt="" />
                        </div>
                        <div className="w-[100%] p-2 overflow-hidden text-ellipsis whitespace-nowrap">
                            <p className="font-inter text-[12px] font-bold text-lightGray">{produto.category}</p>
                            <h2 className="font-inter text-[24px] font-light text-darkGray2 truncate">{produto.title}</h2>
                            <span className="font-inter text-[24px] font-bold text-darkGray">${produto.price}</span> 
                        </div>
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default ProdutosListining;