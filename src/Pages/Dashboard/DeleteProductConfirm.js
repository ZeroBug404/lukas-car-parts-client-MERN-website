import React from "react";
import { toast } from "react-toastify";

const DeleteProductConfirm = ({deleteConfirm, setDeleteConfirm}) => {
    const {_id, name} = deleteConfirm;
  const handleDelete = () => {
    fetch(`http://localhost:5000/products/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your order is deleted successfully");
        setDeleteConfirm(null)
      });
  };
  return (
    <div className="text-slate-700">
      <input type="checkbox" id="delete-manage" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="delete-manage"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
          Are you sure want to delete <span className="text-warning">{name}</span> ?
          </h3>
          <p class="py-4 text-xl">
            
          </p>
          <div class="modal-action ">
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
