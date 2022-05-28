import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AddProducts from "./Pages/Dashboard/AddProducts";
import AddReview from "./Pages/Dashboard/AddReview";
import AllUsers from "./Pages/Dashboard/AllUsers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import RequireAuth from "./Pages/Login/RequireAuth";
import Order from "./Pages/Order/Order";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";
import NotFound from "./Pages/Shared/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="allusers" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path="addproducts" element={<RequireAdmin><AddProducts ></AddProducts ></RequireAdmin>}></Route>
          <Route path="manageproducts" element={<RequireAdmin><ManageProducts ></ManageProducts ></RequireAdmin>}></Route>
          <Route path="manageorders" element={<RequireAdmin><ManageOrders ></ManageOrders ></RequireAdmin>}></Route>
        </Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route
          path="order/:id"
          element={
            <RequireAuth>
              <Order></Order>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
