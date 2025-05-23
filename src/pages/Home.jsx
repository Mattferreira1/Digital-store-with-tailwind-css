import { useEffect, useState } from "react";
import Colecoes from "../components/Colecoes";
import Destaques from "../components/Destaques";
import Galeria from "../components/Galeria/Galeria";
import ProdutosListining from "../components/ProdutosListining";
import SpecialOffer from "../components/SpecialOffer";
import {API} from "../services";
import React from "react";



const Home = () => {
    const [Products, SetProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await API.get('/produtos?page=1&limit=8');
                SetProducts(response.data);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProducts();
    }, []);
    
    return ( 
        <main className="bg-white">
            <Galeria/>
            <Destaques/>
            <Colecoes/>
            <ProdutosListining produtos={Products} text={true} width="1200px"/>
            <SpecialOffer/>
        </main> 
);
}
 
export default Home;


