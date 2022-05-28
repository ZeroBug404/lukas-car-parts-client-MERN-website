import React, { useEffect, useState } from "react";
import DeleteProductConfirm from "./DeleteProductConfirm";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    fetch(`https://protected-plains-56245.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

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
            {products?.map((product, index) => (
              <tr key={product._id} className="text-slate-800">
                <th>{index + 1}</th>

                <td>{product.name}</td>
                <td>{product.availableQuantity}</td>
                <td>
                  <label
                    onClick={() => setDeleteConfirm(product)}
                    for="delete-manage"
                    className="btn btn-error mr-2 btn-sm"
                  >
                    delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deleteConfirm && (
          <DeleteProductConfirm
            // products={products}
            deleteConfirm={deleteConfirm}
            setDeleteConfirm={setDeleteConfirm}
          ></DeleteProductConfirm>
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
