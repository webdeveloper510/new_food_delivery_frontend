import React, { useState } from 'react'

// import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css';
import OrderHeader from './OrderHeader';
//  import "./style/OrderPage.scss";
import OrderTopHeader from './OrderTopHeader';
import OrderActive from './OrderActive';
function OrderContent() {

  return (
    <>
    <OrderTopHeader/>
     <OrderHeader/>
     <OrderActive/>
    </>
  )
}

export default OrderContent;