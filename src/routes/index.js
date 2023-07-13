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
import UseCustomerLists from "../newDashboard/UserCustomer/UseCustomerLists";

//Resturant
import MenuRestaurent from "newDashboard/Restaurents/Menu/MenuRestaurent";
import CategoryItems from "newDashboard/Restaurents/Category/CategoryItems";
import CategoryLists from "newDashboard/Restaurents/Category/CategoryLists";

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

//Management
import RequestedMenuItems from "newDashboard/Management/RequestedMenuItems/RequestedMenuItems";
import Roles from "newDashboard/Management/Roles/Roles";
import Staff from "newDashboard/Management/Staff/Staff";

//PromotioneZone
import PromotioneZone from "newDashboard/PromotioneZone/PromotioneZone";

//Orders

import OrderPayment from "newDashboard/Orderpage/OrderListing/OrderPayment";
import OrderListing from "newDashboard/Orderpage/OrderListing/OrderListing";
import Setting from "newDashboard/Settings/Setting";
import Merchants from "../newDashboard/Merchants/Merchants";
import Customer from "newDashboard/customer/Customer";
import OrderContent from "newDashboard/Orderpage/OrderContent";



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
  { path: "/useCustomerLists", component: <UseCustomerLists /> },
  
  { path: "/orderContent", component: <OrderContent /> },
  
  
  //Restaurent
  { path: "/menu-data", component: <MenuRestaurent /> },
  {path: "/categoryItems", component: <CategoryItems />},
  {path: "/categoryLists", component: <CategoryLists />},


  // //profile
  { path: "/profile", component: <UserProfile /> },

  //Managemet
  { path: "/requestedMenuItems", component: <RequestedMenuItems />},
  {path: "/roles", component: <Roles />},
  {path: "/Staff", component: <Staff />},

  //PromotioneZone
  { path: "/promotioneZone", component: <PromotioneZone />},
 
  //Orders
  
  { path: "/orderPayment", component: <OrderPayment />},
  { path: "/orderListing", component: <OrderListing />},
  { path: "/setting", component: <Setting/>},
  { path: "/merchant", component: <Merchants/>},
  { path: "/customer", component: <Customer/>},
 
 

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
];

const publicRoutes = [
  { path: "admin/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },

];

export { authProtectedRoutes, publicRoutes };
