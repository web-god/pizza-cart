import React from "react";
import { useEffect,useContext } from "react";

import { useState } from "react";
import { useParams,useNavigate} from "react-router-dom";
import { CartContext } from "../pages/CartContext";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate=useNavigate();
  

  useEffect(() => {
    fetch(`https://star-spark-pasta.glitch.me/api/products/${params._id}`)
      .then( res => res.json())
      .then(product => {
        setProduct(product);
      });
  }, [params._id]);

  const [isAdding,setIsAdding]=useState(false)
  const { cart, setCart } = useContext(CartContext);
  const addToCart = (event, product) => {
    event.preventDefault();
    const _cart = { ...cart };
    if (!_cart.items) {
      _cart.items = {};
    }

    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;

    setCart(_cart);
    setIsAdding(true);
    setTimeout(()=>{
      setIsAdding(false)
    },1000)
  };
  return (
    <>
      <div className="container mx-auto mt-12">
        <button   onClick={() => navigate(-1)}  className="mb-12 font-bold">Back</button>
        <div className="flex">
          <img src={product.image} alt="" />
          <div className="ml-16">
            <h1 className="text-xl font-bold">{product.name}</h1>
            <div className="text-md">{product.size}</div>
            <div className="font-bold mt-2">₹ {product.price}</div>
          
            <button disabled={isAdding}
              onClick={(e) => addToCart(e, product)}
              className={`${isAdding?'bg-green-500':'bg-yellow-500'} py-1 px-8 mt-4 rounded-full font-bold `}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
