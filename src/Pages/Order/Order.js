import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Order = () => {
  const [user, loading, error] = useAuthState(auth);
  const [products, setProducts] = useState({});
  const [quantityError, setQuantityError] = useState(false);
  // const quantityRef = useRef(0);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const onChange = (data) => {

  // };

  const onSubmit = (data) => {
    const quantity = parseInt(data.quantity);
    console.log(data);

    const oreder = {
      productId: products._id,
      productName: products.name,
      productQuantity: data.quantity,
      addresss: data.address,
      phone: data.phone,
      price: products.price,
      image: products.image
    };

    if (
      quantity < products.minimunOrderQuantity ||
      quantity > products.availableQuantity
    ) {
      return setQuantityError(true);
    } else {
      // console.log(oreder);
      fetch("http://localhost:5000/bookings", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(oreder),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          toast.success("Your Order is placed");
        });

      setQuantityError(false);
    }

  };

  return (
    <div>
      <h2 className="text-4xl text-center text-slate-700 my-5 font-bold">
        Continue with the order
      </h2>

      <div class="hero min-h-screen lg:px-20">
        <div class="hero-content flex-col justify-between lg:flex-row">
          <div class="card lg:w-1/2 bg-base-100 shadow-xl text-slate-700">
            <div class="card-body">
              {/* <div className="text-center"> */}
              <img width={"80%"} src={products.image} alt="" />
              {/* </div> */}
              <h2 class="card-title font-bold">{products.name}</h2>
              <p>{products.description}</p>
              <div className="mt-5">
                <p className="font-bold">
                  Available Products:{" "}
                  <span className="text-primary">
                    {products.availableQuantity}
                  </span>
                </p>
                <p className="font-bold">
                  Order Quantity:{" "}
                  <span className="text-primary">
                    {products.minimunOrderQuantity}
                  </span>
                </p>
              </div>
              <div className="mt-5">
                <p className="font-bold">
                  Price of a unit:{" "}
                  <span className="text-primary">{products.price}</span>
                </p>
              </div>
              {/* <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>

          {/* continue to order form */}
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-slate-700 font-bold text-4xl text-center my-5">
              Fill up to order
            </h2>
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="name"
                  placeholder={user.displayName}
                  value={user.displayName}
                  readOnly
                  className="input input-bordered w-full max-w-xs my-3"
                  {...register("name", {
                    required: true,
                  })}
                />
                {/* {errors.name?.type === "required" && (
                  <span className="text-red-500">Name is required</span>
                )} */}
                <input
                  type="email"
                  placeholder={user.email}
                  value={user.email}
                  className="input input-bordered w-full max-w-xs my-3"
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  })}
                />
                {/* {errors.email?.type === "required" && (
                  <span className="text-red-500">Email is required</span>
                )} */}
                <input
                  type="phone"
                  placeholder="Phone number"
                  className="input input-bordered w-full max-w-xs my-3"
                  {...register("phone", {
                    required: true,
                  })}
                />
                {errors.phone?.type === "required" && (
                  <span className="text-red-500">Phone is required</span>
                )}
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full max-w-xs my-3"
                  {...register("address", {
                    required: true,
                  })}
                />
                {errors.address?.type === "required" && (
                  <span className="text-red-500">Address is required</span>
                )}
                <input
                  type="text"
                  placeholder="Order Quantity"
                  className="input input-bordered w-full max-w-xs my-3"
                  {...register("quantity", {
                    required: true,
                    maxLength: 7550,
                  })}
                  // onChange={onChange}
                  // ref={quantityRef}
                />
                {errors.quantity?.type === "required" && (
                  <span className="text-red-500">
                    You must order minimum {products.minimunOrderQuantity} and
                    maximum {products.availableQuantity}
                  </span>
                )}
                {errors.quantity?.type === "maxLength" && (
                  <span role="alert">Max length exceeded</span>
                )}

                <input
                  className="btn btn-warning w-full max-w-xs my-3"
                  type="submit"
                  value="order"
                  disabled={quantityError}
                />
              </form>
              {/* react hook form */}

              {/* <form onSubmit={handleConfirmOrder}>
                <div class="form-control my-2">
                  <input
                    type="name"
                    placeholder={user.displayName}
                    class="input input-bordered"
                    readOnly
                  />
                </div>
                <div class="form-control my-2">
                  <input
                    type="email"
                    placeholder={user.email}
                    class="input input-bordered"
                    readOnly
                  />
                </div>
                <div class="form-control my-2">
                  <input
                    type="text"
                    placeholder="Address"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control my-2">
                  <input
                    type="phone"
                    placeholder="Phone Number"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control my-2">
                  <input
                    type="number"
                    placeholder="Order Quantity"
                    class="input input-bordered"
                    ref={quantityRef}
                  />
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-primary">Order</button>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
