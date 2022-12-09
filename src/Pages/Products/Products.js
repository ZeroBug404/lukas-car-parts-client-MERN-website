import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://lukas-car-parts-api.onrender.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="px-12 my-12">
      <h1 className="text-4xl text-slate-900 font-bold text-center my-8">
        All Of Our Products
      </h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
