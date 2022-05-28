import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile bg-slate-100">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col px-8">
        <h2 className="text-4xl font-bold text-primary my-2">
          Welcome to the Dashboard
        </h2>

        <Outlet />
      </div>
      <div className="drawer-side bg-slate-100">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-slate-800 font-medium">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to={"myprofile"}>My Profile</Link>
          </li>
          {admin ? (
            <>
              <li>
                <Link to={"allusers"}>All Users</Link>
              </li>
              <li>
                <Link to={"manageorders"}>Manage All Orders</Link>
              </li>
              <li>
                <Link to={"addproducts"}>Add A Product</Link>
              </li>
              <li>
                <Link to={"manageproducts"}>Manage Product</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"myorders"}>My Orders</Link>
              </li>
              <li>
                <Link to={"addreview"}>Add a Review</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
