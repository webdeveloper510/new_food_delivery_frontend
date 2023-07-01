import React from "react";
import { Navigate } from "react-router-dom";


//Newdashboard

//Dashboard
import Bill from "newDashboard/BillOrder/Bill";
import OrderHistory from "newDashboard/orderHistory/OrderHistory";
import NotFound404 from "newDashboard/notFound404/NotFound404";
import Home from "newDashboard/home/Home";
import FoodOrder from "newDashboard/foodOrder/FoodOrder";
import FavoriteMenu from "newDashboard/favoriteMenu/FavoriteMenu";

//Resturant
import MenuRestaurent from "newDashboard/Restaurents/Menu/MenuRestaurent";

// Profile
import UserProfile from "../pages/Authentication/user-profile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// Dashboard
import Dashboard from "../pages/Dashboard/index";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },


  //New Dashboard 
  //Dashboard
  { path: "/bill-order", component: <Bill /> },
  { path: "/order-history", component: <OrderHistory /> },
  { path: "/*", component: <NotFound404 /> },
  { path: "/home", component: <Home /> },
  { path: "/foodOrder", component: <FoodOrder /> },
  { path: "/favoriteMenu", component: <FavoriteMenu /> },

  //Restaurent
  { path: "/menu-data", component: <MenuRestaurent /> },

  // //profile
  { path: "/profile", component: <UserProfile /> },


  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },

];

export { authProtectedRoutes, publicRoutes };
