import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, imageUrl, description, minimunOrderQuantity, availableQuantity, price } = product;

  const navigate = useNavigate()

  const handleOrder = () => {
    navigate(`/order/${_id}`)
  }
  return (
    <div class="card card-compact bg-base-100 shadow-xl text-slate-900">
      <figure>
        <img
          src={imageUrl}
          alt=""
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description}</p>
        <div>
          <p>Minimum Order Quantity: <span className="font-bold">{minimunOrderQuantity}</span></p>
          <p>Available products: <span className="font-bold">{availableQuantity}</span></p>
          <p>Price per unit: <span className="font-bold">{price}</span></p>
        </div>
        <div class="card-actions">
          <button onClick={handleOrder} class="btn btn-primary block w-full">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
