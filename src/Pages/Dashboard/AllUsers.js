import React, { useEffect, useState } from 'react';
import DeleteOrderConfirm from './DeleteOrderConfirm';

const AllUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
        .then(res => res.json())
        .then(data => {
            setUsers(data);
        })
    },[])
    return (
        <div>
            <h2 className='text-3xl text-slate-600 font-semibold'>All User</h2>

            <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* {
              users?.map(order => <DeleteOrderConfirm
                key={order._id} 
                order={order}
                ></DeleteOrderConfirm>)
          } */}
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id} className="text-slate-800">
                <th>{index + 1}</th>

                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <label for="delete-modal" class="btn btn-success mr-2 btn-sm">
                    make admin
                  </label>
                  <button class="btn btn-error btn-sm">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllUsers;