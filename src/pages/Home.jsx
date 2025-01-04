import Colecoes from "../components/Colecoes";
import Destaques from "../components/Destaques";
import Galeria from "../components/Galeria/Galeria";
import products from "../components/Produtos"



const Home = () => {
    console.log(products);
    
    return ( 
        <main className="bg-white">
            <Galeria/>
            <Destaques/>
            <Colecoes/>
            <section className=" w-[1200px] p-6 grid gap-4 grid-rows-3 grid-cols-4 px-[24px] mx-auto">
                
                {products.map((produto, index) =>(
                    <div className="w-[100%] h-[400px] border-2 rounded-lg flex flex-col items-center">
                        <div className="w-full h-[300px] border-2">

                        </div>
                        <div className="w-[100%] p-2">
                            <p className="font-inter text-[12px] font-bold text-lightGray">{produto.category}</p>
                            <h2 className="font-inter text-[24px] font-light text-darkGray2">{produto.name}</h2>
                            <span className="font-inter text-[24px] font-light text-lightGray line-through">${produto.price_w_discount}</span> <span className="font-inter text-[24px] font-bold text-darkGray">${produto.price}</span> 
                        </div>
                    </div>
                ))}
            </section>
        </main> 
);
}
 
export default Home;


