/* eslint-disable no-unused-vars */
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteOrderConfirm from "./DeleteOrderConfirm";

const MyOrders = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate()

  const {
    data: orders,
    isLoading,
    error,
    refetch,
  } = useQuery("myorders", () =>
    fetch(`http://localhost:5000/myorders?userEmail=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
        }
        return res.json()
    })
  );

  if(isLoading){
      return <Loading></Loading>
  }


  

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          {
              orders?.map(order => <DeleteOrderConfirm
                key={order._id} 
                order={order}
                refetch={refetch}
                ></DeleteOrderConfirm>)
          }
          <tbody>
            {orders?.map((order, index) => (
              <tr key={order._id} className="text-slate-800">
                <th>{index + 1}</th>

                <td>{order.productName}</td>
                <td>{order.productQuantity}</td>
                <td>
                  <label for="delete-modal" class="btn btn-error mr-2 btn-sm">
                    delete
                  </label>
                  <button class="btn btn-success btn-sm">pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
