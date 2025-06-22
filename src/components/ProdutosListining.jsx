import { useEffect, useState } from "react";
import { API } from "../services";

// import products from "./Produtos"
// eslint-disable-next-line react/prop-types
const ProdutosListining = ({text, maxCols}) => {
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
            // <section className="w-full flex flex-col items-center xl:mx-[40px] py-[16px]">
            //     
            //     <div className={`grid-cols-2 w-full xl:p-6 grid gap-3 mx-auto xl:w-full ${cols=="3" ? "lg:grid-cols-3": cols=="4"? "lg:grid-cols-5": "lg:grid-cols-4"}  `} >
            //         {produtos.map((produto, index) => (
            //         <div
            //             key={index}
            //             id={produto.id}
            //             className="max-w-[230px] h-[300px]  rounded-lg flex flex-col items-center shadow-md bg-white p-2"
            //         >
            //             <div className="w-full h-[180px] flex justify-center items-center overflow-hidden">
            //                 <img
            //                     src={produto.image}
            //                     className="max-w-[90%] max-h-[90%] object-contain"
            //                     alt={produto.title}
            //                 />
            //             </div>
            //             <div className="w-full text-left mt-2">
            //                 <p className="text-xs font-bold text-lightGray truncate">{produto.category}</p>
            //                 <h2 className="text-sm font-medium text-darkGray2 truncate">{produto.title}</h2>
            //                 <span className="text-base font-bold text-darkGray">${produto.price}</span>
            //             </div>
            //         </div>
            //         ))}

            //     </div>
            // </section>
            <section className="mx-auto w-[80%] xl:w-full py-[16px]">
                {text?(
                    <div className="w-[100%] flex justify-between">
                        <span className="text-black">Produtos em alta</span><span className="text-black">Ver todos</span>
                    </div>
                ):""
                }
                <div className={`grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full grid place-items-center gap-3 mx-auto xl:w-full ${maxCols=="4" ? "lg:grid-cols-4": "xl:grid-cols-5"}  `} >
                     {produtos.map((produto, index) => (
                     <div
                         key={index}
                         id={produto.id}
                         className="w-[100%] p-3 h-[300px]  rounded-lg flex flex-col items-center shadow-md bg-white p-2"
                     >
                         <div className="w-full h-[180px] flex justify-center items-center overflow-hidden">
                             <img
                                 src={produto.image}
                                 className="max-w-[90%] max-h-[90%] object-contain"
                                 alt={produto.title}
                             />
                         </div>
                         <div className="w-full text-left mt-2">
                             <p className="text-xs font-bold text-lightGray truncate">{produto.category}</p>
                             <h2 className="text-sm font-medium text-darkGray2 truncate">{produto.title}</h2>
                             <span className="text-base font-bold text-darkGray">${produto.price}</span>
                         </div>
                     </div>
                     ))}

                 </div>

            </section>
     );
}
 
export default ProdutosListining;