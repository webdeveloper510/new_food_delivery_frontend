import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./style/OrderPage.scss";

function OrderHeader() {
  const [color, setColor]=useState(0)
 const changeColor=(id)=>{
  console.log("click",id);
  setColor(id)
 }
 useEffect(()=>{

 },[color])
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-light pb-0  " style={{ background: '#81C341' }}>
        <div className="container-fluid">
          <button className="navbar-toggler bg-light mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-between w-100">
              <li className="nav-item"    onClick={() => changeColor(1) } >
                <Link
                  className="nav-link header px-4"
                  style={{ color: "white", backgroundColor: color === 1 ? "#a9bb97":null }}
                  to="/activeOrder"
                >
                  Active Order
                </Link>
              </li>

              <li className="nav-item"  onClick={() => changeColor(2) }>
                <Link
                  className="nav-link header px-4"
                  style={{ color: "white", backgroundColor: color === 2 ? "#a9bb97":null }}
                  to="/readyOrder"
                 
                >
                  Ready Order
                </Link>
              </li>
              <li className="nav-item"  onClick={() => changeColor(3) }>
                <Link
                  className="nav-link header px-4"
                  style={{ color: "white", background: color === 3 ? "#a9bb97":null }}
                  to="/pastOrder"
                 
                >
                  Past Order
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
  )
}

export default OrderHeader
