import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "../template/template";
import Home from "../pages/Home";

const Rotas = () => {
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route element={<Template/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default Rotas ;