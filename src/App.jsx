import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Cart from "./pages/Cart";
import Home from "./pages/Home"
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./pages/CartContext";
import { useState } from "react";
import { useEffect } from "react";
import { getCart,storeCart } from "./pages/helpers";


const App = () => {

    const [cart,setCart]=useState({});
    useEffect(()=>{
                getCart().then(cart => {
                    setCart(JSON.parse(cart))
                })
    
      
        
    },[])

    useEffect(()=> {
        storeCart(JSON.stringify(cart))
       
    },[cart])
    return (
        <>
            <Router>
                <CartContext.Provider value={{ cart,setCart }}> 
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/productspage" element={<ProductsPage/>}/>
                    <Route path="/products/:_id" element={<SingleProduct/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
                </CartContext.Provider>
            </Router>
        </>
    )
}

export default App