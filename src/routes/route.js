import React from "react";
import { Navigate } from "react-router-dom";

const Authmiddleware = (props) => {
  let loginToken = localStorage.getItem("loginToken"); 
 console.log(loginToken, "=========>Token")
  
  // if (!localStorage.getItem("Token")) {
  //   return (
  //     <Navigate to={{ pathname: "/dashboard", state: { from: props.location } }} />
  //   );
  // }
   if (!localStorage.getItem("loginToken")) {
    return (
      <Navigate to={{ pathname: "admin/login", state: { from: props.location } }} />
    );
  }
  return (<React.Fragment>
    {props.children}
  </React.Fragment>);
};

export default Authmiddleware;
