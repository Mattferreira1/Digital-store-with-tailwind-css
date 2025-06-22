import { useEffect, useState } from "react";
import ProdutosListining from "../components/ProdutosListining";
import {API} from "../services"
const Produtos = () => {
       const [Products, SetProducts] = useState([])
       async function fetchProducts() {
           try {
               const response = await API.get();
               SetProducts(response.data);
           } catch (error) {
               console.error("Erro ao buscar produtos:", error);
           }
       }
    useEffect(()=>{
        fetchProducts()
    },[])
    return ( 
        <section className="bg-white w-full flex justify-evenly">
            <div className="w-[30%]">
                <h1>Filtros</h1>
                <select name="" id="">
                    <option value="men's clothing">men&apos;s clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                    <option value="women's clothing">women&apos;s clothing</option>
                </select>
            </div>
            <div className="w-[60%]">
                <ProdutosListining produtos={Products} width="100%"/>
            </div>
        </section>
     );
}
 
export default Produtos
