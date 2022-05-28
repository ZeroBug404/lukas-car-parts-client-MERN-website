import React from "react";
import { toast } from "react-toastify";

const DeleteProductConfirm = ({ deleteConfirm, setDeleteConfirm }) => {
  const { _id, name } = deleteConfirm;
  const handleDelete = () => {
    fetch(`https://protected-plains-56245.herokuapp.com/products/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your order is deleted successfully");
        setDeleteConfirm(null);
      });
  };
  return (
    <div className="text-slate-700">
      <input type="checkbox" id="delete-manage" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            for="delete-manage"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Are you sure want to delete{" "}
            <span className="text-warning">{name}</span> ?
          </h3>
          <p className="py-4 text-xl"></p>
          <div className="modal-action ">
            <label
              className="btn text-slate-700"
              onClick={handleDelete}
              for="delete-manage"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductConfirm;
