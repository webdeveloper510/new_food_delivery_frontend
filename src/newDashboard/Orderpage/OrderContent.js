// // import React, { useEffect, useState } from 'react'
// import OrderActive from './OrderActive';
// import OrderHeader from './OrderHeader';
// // import OrderActive from './OrderActive';
// // import OrderPast from './OrderPast';
// // import OrderReady from './OrderReady';
// // import { OrderNewData } from './orderdata/OrderNewdata';
// function OrderContent() {
// //   debugger
// //   const [id,setId]=useState();
// // useEffect(()=>{

// //   const key=localStorage.getItem("key");
// //   setId(key)
// // })
// // console.log(id);
// // // console.log(key);
// //   return (
// //     <>
// //     <div style={{background:"rgb(222, 228, 237)"}}> 
// //       <OrderHeader/> 
// //       {id==="1" && <OrderActive />}
// //      {id==="2" && <OrderPast/>}
// //       { id=="3" && <OrderReady/>}
// //       </div>
// //     </>
// //   )
// // }

// // export default OrderContent;
// import React, { useState, useEffect } from "react";
// import OrderReady from './OrderReady';
// import OrderPast from './OrderPast';

// const OrderContent = () => {
//   const [activeTab, setActiveTab] = useState("");

//   useEffect(() => {
//     // Check if there is an active tab in localStorage
//     const storedTab = localStorage.getItem("activeTab");
//     if (storedTab) {
//       setActiveTab(storedTab);
//     } else {
//       // Set the initial active tab to "active" if none is found in localStorage
//       setActiveTab("active");
//     }
//   }, []);

//   const handleTabClick = (tabId) => {
//     // Update active tab in state and localStorage
//     setActiveTab(tabId);
//     localStorage.setItem("activeTab", tabId);
//   };

//   return (
//     <div>
//       <OrderHeader/> 

//       <div className="content">
//         {activeTab === "active" && <OrderActive/>}
//         {activeTab === "ready" && <OrderReady/>}
//         {activeTab === "past" && <OrderPast/>}
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import OrderActive from "./OrderActive";
import OrderReady from "./OrderReady";
import OrderPast from "./OrderPast";

const OrderContent = () => {
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    // Check if there is an active tab in localStorage
    const storedTab = localStorage.getItem("activeTab");
    if (storedTab) {
      setActiveTab(storedTab);
    } else {
      // Set the initial active tab to "active" if none is found in localStorage
      setActiveTab("active");
    }
  }, []);

  const handleTabClick = (tabId) => {
    
    setActiveTab(tabId);
    localStorage.setItem("activeTab", tabId);
  };

  return (
    <div style={{margin:'70px 0 0 0' ,background:"rgb(222, 228, 267)"}}>
       <nav className="navbar navbar-expand-lg text-dark p-0  m-0"  >
       <div className="container-fluid p-0 x-0">
       <button className="navbar-toggler bg-light mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">

      <ul  className="navbar-nav d-flex justify-content-between w-100" >
        <li
          className={ activeTab === "active" ? "active nav-item header px-4 py-3 " : "nav-item header px-4 py-3 "}  
          // style={activeTab =="active" && { background:"green",color: "white", cursor: "pointer" }}
          style={activeTab === "active" ? { background: "#bfd6a8", color: "black", cursor: "pointer" }:{color: "black", cursor: "pointer"}}

          onClick={() => handleTabClick("active")}
        >
          Active Orders
        </li>
        <li
          className={ activeTab === "ready" ? "active nav-item header px-4 py-3 " : "nav-item header px-4 py-3 "}  
          style={activeTab == "ready" ? { background:'#bfd6a8', color: "white", cursor: "pointer" }:{color: "black", cursor: "pointer"}}
          onClick={() => handleTabClick("ready")}
        >
          Ready Orders
        </li>
        <li
          className={ activeTab === "past" ? "active nav-item header px-4 py-3 " : "nav-item header px-4 py-3"}  
          style={activeTab == "past" ? { background:'#bfd6a8',color: "white", cursor: "pointer"}:{color: "black", cursor: "pointer"}}
          onClick={() => handleTabClick("past")}
        >
          Past Orders
        </li>
      </ul>
      </div>
      </div>
      </nav>

      <div className="" style={{background:"rgb(222, 228, 237)"}}>
        {activeTab === "active" && <OrderActive/>}
        {activeTab === "ready" && <OrderReady/>}
        {activeTab === "past" && <OrderPast/>}
      </div>
    </div>
  );
};

export default OrderContent;