import { useEffect, useState } from "react";
import ProdutosListining from "../components/ProdutosListining";
import {API} from "../services"
import { useForm } from "react-hook-form";
const Produtos = () => {
       const [Products, SetProducts] = useState([])
       const {register, handleSubmit}= useForm()

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
        <section className="bg-white w-full flex justify-between p-[24px]">
            <div className="p-[24px]">
                <h2 className="text-black">Filtros</h2>
                <form action="" onSubmit={handleSubmit((e)=>console.log(e.filter))}>
                    <select name="" id="" {...register("filter")}>
                    <option value="men's clothing">men&apos;s clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                    <option value="women's clothing">women&apos;s clothing</option>
                </select>
                <button type="submit">Adicionar filtros</button>
                </form>
            </div>
            <div className="mx-auto w-[95%] md:w-[50%] lg:w-[60%] lx:w-[70%] p-[12px]">
                <ProdutosListining produtos={Products} maxCols="4"/>
            </div>
        </section>
     );
}
 
export default Produtos
