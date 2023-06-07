import React, { useEffect } from "react";
import Product from "./Product";
import { useState } from "react";


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch("https://star-spark-pasta.glitch.me/api/products")
      .then(response =>response.json())
      .then(products => setProducts(products))
  }, []);
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-6 my-8 gap-24">
        {
          products.map(product => <Product key={product._id} product={product}/>)
        }
      </div>
    </div>
  );
};

export default Products;
