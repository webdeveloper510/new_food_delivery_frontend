import React from 'react'
import OrderListingForm from './OrderListingForm'
import OrderListingTable from './OrderListingTable'

function OrderListing() {
  return (
    <div className='container ' style={{background:"rgb(222, 228, 237)"}}>
            <h3 className='text-dark ps-3' style={{paddingTop:"100px"}}>Orders</h3>
      <div className='row'>
             <OrderListingForm/>
             <OrderListingTable/>
      </div>
    </div>
  )
}

export default OrderListing