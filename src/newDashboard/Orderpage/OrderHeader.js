import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./style/OrderPage.scss";
import OrderContent from './OrderContent';

function OrderHeader({active}) {
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
    // Update active tab in state and localStorage
    setActiveTab(tabId);
    localStorage.setItem("activeTab", tabId);
  };

 
  return (
    <div style={{margin:'70px 0 0 0'}}>
      <nav className="navbar navbar-expand-lg text-dark bg-secondary p-0  m-0    " >
        <div className="container-fluid">
          <button className="navbar-toggler bg-light mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-between w-100">
            <li className={ activeTab === "active" ? "active nav-item header px-4 py-3 " : "nav-item header px-4 py-3 "}  
              style={{ color: "white",cursor: "pointer", backgroundColor: active === 1 ? "#a9bb97":null }}
              onClick={() => handleTabClick("past")}
            
              >
                  Active Order
              </li>

              <li
               className={ activeTab === "active" ? "active nav-item header px-4 py-3 " : "nav-item header px-4 py-3 "}   
              style={{ color: "white",cursor: "pointer", backgroundColor: active === 2 ? "#a9bb97":null }}
              onClick={() => handleTabClick("past")}
              >
                  Ready Order
              </li>
              <li 
              className={ activeTab === "active" ? "active nav-item header px-4 py-3 " : "nav-item header px-4 py-3 "}  
              style={{ color: "white", cursor: "pointer",backgroundColor: active === 3 ? "#a9bb97":null }}
              onClick={() => handleTabClick("past")}
              >
                  Past Order
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  )
}

export default OrderHeader
