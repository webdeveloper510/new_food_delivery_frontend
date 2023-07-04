import React from 'react'
import OrderHeader from '../OrderHeader';
import OrderTopHeader from '../OrderTopHeader';
import OrderReady from '../OrderReady';
function ReadyOrder() {

  return (
    <>
     <OrderTopHeader/>
     <OrderHeader/>
     <OrderReady/>
    </>
  )
}

export default ReadyOrder;