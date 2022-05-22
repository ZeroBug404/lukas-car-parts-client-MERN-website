import React from "react";

const Product = ({ product }) => {
  const { name, image } = product;
  return (
    <div class="card card-compact bg-base-100 shadow-xl text-slate-900">
      <figure>
        <img
          src={image}
          alt=""
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
          <button class="btn btn-primary block w-full">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
