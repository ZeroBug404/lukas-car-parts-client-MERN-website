/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import DeleteOrderConfirm from './DeleteOrderConfirm';

const AllUsers = () => {
    const [user] = useAuthState(auth);
    const [users, setUsers] = useState([]);

    // console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5000/users`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setUsers(data);
        })
    },[users])

    const makeAdmin = (email) => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to make ann admin')
            }
            return res.json()})
        .then(data => {
            console.log(data);

            if(data.modifiedCount > 0){
                toast.success('Successfully made an admin');
            }
        })
    }
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
                  {
                      user.role !== 'admin' && <><label onClick={() => makeAdmin(user.email)} class="btn btn-success mr-2 btn-sm">
                      make admin
                      </label>
                        <button class="btn btn-error btn-sm">delete</button></>
                  }
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