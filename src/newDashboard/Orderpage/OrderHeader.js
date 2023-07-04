import React from 'react'
import { Link } from 'react-router-dom'
import "./style/OrderPage.scss"
function OrderHeader() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg text-light pb-0  " style={{background:'#81C341'}}>
    <div className="container-fluid">
      <button className="navbar-toggler bg-light mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav d-flex justify-content-between w-100"> 
          <li className="nav-item ">
            <Link className="nav-link  header px-4" style={{color:"white"}} to="/activeOrder">Active Order</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link  header px-4" style={{color:"white"}} to="/readyOrder">Ready Order</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link  header px-4" style={{color:"white"}} to="/pastOrder">Past Order</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link  header px-4" style={{color:"white"}} to="#">Bussiness</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link header px-4" style={{color:"white"}}  to="#">Menu</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text header px-4"  style={{color:"black"}} to="#">Account</Link>
          </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
    
  )
}

export default OrderHeader
