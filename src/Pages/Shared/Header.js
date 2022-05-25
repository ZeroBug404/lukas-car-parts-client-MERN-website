import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from '../../images/logo.webp'
import Loading from "./Loading";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  
  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <div class="navbar bg-base-100 text-black lg:px-20 py-6">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabindex="0">
            <a>Parent</a>
              
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="">
          <Link to={'/'}><img className="w-28" src={logo} alt="" /></Link>
        </div>
      </div>
      <div class="navbar-end hidden lg:flex px-">
        <ul class="menu menu-horizontal p-0">
          <li>
            <a>Item 1</a>
          </li>
          <li tabindex="0">
            <a>Parent</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
          {user ? <>
          <li tabindex="0">
            <a href="">{user.displayName}</a>
          </li>
          <button onClick={handleSignOut} className="btn btn-outline btn-warning rounded-md">Sign Out</button>
          </>
          : 
          <li className="btn btn-outline btn-warning rounded-md">
          <Link to={'/login'}>Login</Link>
        </li>}
        </ul>
      </div>
    </div>
  );
};

export default Header;
