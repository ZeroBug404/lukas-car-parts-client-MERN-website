import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://protected-plains-56245.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-3xl text-slate-600 font-semibold">All Orders</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>User Email</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders?.map((order, index) => (
              <tr key={order._id} className="text-slate-800">
                <th>{index + 1}</th>

                <td>{order.productName}</td>
                <td>{order.userEmail}</td>
                <td>{order.productQuantity}</td>
                <td>
                  <label className="btn btn-error mr-2 btn-sm">delete</label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
