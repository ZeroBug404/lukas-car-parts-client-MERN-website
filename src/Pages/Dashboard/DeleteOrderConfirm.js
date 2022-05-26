import React from "react";
import { toast } from "react-toastify";

const DeleteOrderConfirm = ({order, refetch}) => {
   const {productName} = order;

   const handleDelete = (id) => {
    fetch(`http://localhost:5000/myorders/${id}`, {
      method: "DELETE",
      // headers: {
      //     'Content-type': 'application/json'
      // }
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        refetch();
        toast.success("Your order is deleted successfully");
      });
  };
  return (
    <div className="text-slate-900">
      {/* <!-- The button to open modal --> */}
      

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-warning">
            {productName}
          </h3>
          <p>Are you sure want to delete?</p>
          <div class="modal-action ">
            <label className="btn text-slate-700" onClick={() => handleDelete(order._id)} for="delete-modal">
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderConfirm;