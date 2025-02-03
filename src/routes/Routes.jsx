import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Templates/Layout";
import Produtos from "../pages/Produtos";

const Rotas = () => {
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Produtos" element={<Produtos/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default Rotas ;