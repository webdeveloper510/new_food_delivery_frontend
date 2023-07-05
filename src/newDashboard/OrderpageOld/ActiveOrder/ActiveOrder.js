
import React from 'react'
// import Toggle from 'react-bootstrap-toggle';
// import 'react-bootstrap-toggle/dist/bootstrap2-toggle.css';
import OrderHeader from '../OrderHeader';
import OrderTopHeader from '../OrderTopHeader';
import OrderActive from '../OrderActive';
function ActiveOrder() {



  return (
    <>
       <OrderTopHeader/>
      <OrderHeader/>
      <OrderActive/>
    </>
  )
}

export default ActiveOrder;