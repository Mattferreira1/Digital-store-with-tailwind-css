import Colecoes from "../components/Colecoes";
import Destaques from "../components/Destaques";
import Galeria from "../components/Galeria/Galeria";
import ProdutosListining from "../components/ProdutosListining";
import SpecialOffer from "../components/SpecialOffer";




const Home = () => {
    return ( 
        <main className="bg-white flex  flex-col items-center w-full">
            <Galeria/>
            <section className="w-[100%] xl:w-[1200px] py-[24px]">
                <Destaques/>    
                <Colecoes/>
                <ProdutosListining text={true} maxCols=""/>
            </section>
            <SpecialOffer/>
        </main> 
);
}
 
export default Home;


