import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../pages/CartContext";

const Navigation = () => {

  const cartStyle = {
    background:"#F59E0D",
    display:"flex",
    padding:"6px 12px",
    borderRadius:"50px"
  }

  const {cart}=useContext(CartContext);

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        
          <Link to="/">
            <img src="/images/logo.png" alt="logo" style={{height:45}} />
          </Link>
          
          <ul className="flex items-center">
            <li className="ml-6"><Link to="/">Home</Link>
            </li>
            <li className="ml-6"><Link to="/productspage">Products</Link></li>
            <li className="ml-6">
              <Link to="/cart">
                <div style={cartStyle}>
                  <span className="ml-2 mr-2">{cart.totalItems?cart.totalItems:0}</span>
                  <img src="/images/cart.png" alt="cart"  />
                </div>
              </Link>
            </li>
          </ul>
        

      </nav>
      
    </>
  );
};

export default Navigation;
