import { useState } from "react";
import ProdutosListining from "../components/ProdutosListining";
import {API} from "../services"
import { useParams } from "react-router-dom";
import products from "./Produtos"

const Produtos = () => {
       const [Products, SetProducts] = useState([])
    //    async function fetchProducts() {
    //        try {
    //            const response = await API.get('/produtos?page=1&limit=20');
    //            SetProducts(response.data);
    //        } catch (error) {
    //            console.error("Erro ao buscar produtos:", error);
    //        }
    //    }
       const filter = useParams()
        console.log(filter)
    //    fetchProducts(products)
    return ( 
        <section className="bg-white w-full flex justify-evenly">
            <div className="w-[30%]">

            </div>
            <div className="w-[60%]">
                <ProdutosListining produtos={Products} cols="3" width="100%"/>
            </div>
        </section>
     );
}
 
export default Produtos
