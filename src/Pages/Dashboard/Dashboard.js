import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile bg-slate-100">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col px-8">
        <h2 className="text-4xl font-bold text-primary my-2">Welcome to the Dashboard</h2>

        <Outlet />

        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side bg-slate-100">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-slate-800 font-medium">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to={"myprofile"}>My Profile</Link>
          </li>
          <li>
            <Link to={'myorders'}>My Orders</Link>
          </li>
          <li>
            <Link to={'addreview'}>Add a Review</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
