import React, { useState } from 'react'
import OrderHeader from '../OrderHeader';
import OrderTopHeader from '../OrderTopHeader';
import OrderPast from '../OrderPast';
function PastOrder() {

  return (
    <>
    <OrderTopHeader/>
     <OrderHeader/>
     <OrderPast/>
    </>
  )
}

export default PastOrder;