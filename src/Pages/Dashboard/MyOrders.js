/* eslint-disable no-unused-vars */
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteOrderConfirm from "./DeleteOrderConfirm";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const navigate = useNavigate();

  const {
    data: orders,
    isLoading,
    error,
    refetch,
  } = useQuery("myorders", () =>
    fetch(
      `https://protected-plains-56245.herokuapp.com/myorders?userEmail=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders?.map((order, index) => (
              <tr key={order._id} className="text-slate-800">
                <th>{index + 1}</th>

                <td>{order.productName}</td>
                <td>{order.productQuantity}</td>
                <td>
                  <label
                    onClick={() => setDeleteConfirm(order)}
                    for="delete-modal"
                    className="btn btn-error mr-2 btn-sm"
                  >
                    delete
                  </label>
                  <button className="btn btn-success btn-sm">pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deleteConfirm && (
          <DeleteOrderConfirm
            deleteConfirm={deleteConfirm}
            setDeleteConfirm={setDeleteConfirm}
            refetch={refetch}
          ></DeleteOrderConfirm>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
