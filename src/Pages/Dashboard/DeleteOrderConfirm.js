import React from "react";
import { toast } from "react-toastify";

const DeleteOrderConfirm = ({ deleteConfirm, refetch }) => {
  const { productName, _id } = deleteConfirm;

  //  console.log(order);

  const handleDelete = (id) => {
    fetch(`https://lukas-car-parts-api.onrender.com/myorders/${id}`, {
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
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="delete-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-warning">{productName}</h3>
          <p>Are you sure want to delete?</p>
          <div className="modal-action ">
            <label
              className="btn text-slate-700"
              onClick={() => handleDelete(_id)}
              for="delete-modal"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderConfirm;
