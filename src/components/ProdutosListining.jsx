// import products from "./Produtos"
const ProdutosListining = ({produtos, text, cols, width}) => {
const products= produtos
    return (
        <section className={`w-[${width}] flex flex-col items-center mx-auto`}>
            {text?(
                <div className="w-[95%] flex justify-between">
                <span className="text-black">Produtos em alta</span><span className="text-black">Ver todos</span>
            </div>
            ):""
            }
            <div className={` w-full p-6 grid gap-4 grid-cols-2 px-[24px] mx-auto md:grid-cols-3 xl:w-full xl:grid-cols-${cols? cols : "4"}`} >
                {products.map((produto, index) =>(
                    <div key={index} className="w-[100%] h-[350px] border-2 rounded-lg flex flex-col items-center shadow-lg">
                        <div className="w-full h-[250px] border-2">

                        </div>
                        <div className="w-[100%] p-2 overflow-hidden text-ellipsis whitespace-nowrap">
                            <p className="font-inter text-[12px] font-bold text-lightGray">{produto.category}</p>
                            <h2 className="font-inter text-[24px] font-light text-darkGray2 truncate">{produto.name}</h2>
                            <span className="font-inter text-[24px] font-light text-lightGray line-through">${produto.price_w_discount}</span> <span className="font-inter text-[24px] font-bold text-darkGray">${produto.price}</span> 
                        </div>
                    </div>
                ))}
            </div>
        </section>
     );
}
 
export default ProdutosListining;