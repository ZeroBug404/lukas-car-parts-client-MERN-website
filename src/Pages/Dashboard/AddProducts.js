import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProducts = () => {
  const textRef = useRef("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const product = {
      name: data.name,
      availableQuantity: data.availableQuantity,
      minimunOrderQuantity: data.minimunOrderQuantity,
      price: data.price,
      description: textRef.current.value,
    };

    fetch(`https://lukas-car-parts-api.onrender.com/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data);
        toast.success("Successfully Added New Product");
      });
  };
  return (
    <div className="text-center">
      <div className="card bg-base-100 shadow-xl">
        <div className="my-5">
          <h2 className="text-center text-slate-700 font-semibold text-2xl">
            Add New Product
          </h2>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="name"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs m-3 input-warning"
              {...register("name")}
            />
            <input
              type="minimunOrderQuantity"
              placeholder="Minimum Order Quantity"
              className="input input-bordered w-full max-w-xs  m-3 input-warning"
              {...register("minimunOrderQuantity")}
            />
            <input
              type="availableQuantity"
              placeholder="Avilable Quantity"
              className="input input-bordered w-full max-w-xs m-3 input-warning"
              {...register("availableQuantity")}
            />
            <input
              type="price"
              placeholder="Pice Per Unit"
              className="input input-bordered w-full max-w-xs m-3 input-warning"
              {...register("price")}
            />
            <input
              type="imageUrl"
              placeholder="Image URL"
              className="input input-bordered w-full max-w-xs m-3 input-warning"
              {...register("imageUrl")}
            />
            <div className="lg:px-10 px-3">
              <textarea
                ref={textRef}
                className="textarea textarea-warning w-full h-40 leading-6 text-slate-800 text-base"
                placeholder="Write here"
              ></textarea>
            </div>
            <input
              className="btn btn-warning w-full max-w-xs "
              type="submit"
              value="Add"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
