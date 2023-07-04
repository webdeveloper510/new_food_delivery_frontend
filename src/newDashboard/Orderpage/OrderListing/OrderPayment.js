import React from 'react';
// import OrderPaymentData from './OrderListingData/OrderPaymentData';
import { OrderPaymentData } from './OrderListingData/OrderPaymentData';
function OrderPayment() {
  return (
    <>
      <div className='container px-3  bg-light rounded' style={{ width:"97%",margin:'100px auto 70px auto' }}>
        <div className='row table-responsive'>
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">PAYMENT TYPE</th>
                <th scope="col">PREPERATION TIME</th>
                <th scope="col">ORDER TYPE</th>
                <th scope="col">AUTO ACCEPT</th>
                <th colSpan={2} scope="col">ORDER TIME</th>
                <th scope="col">DELIVERY TIME</th>
                <th scope="col">CUSTOMER NAME</th>
                <th scope="col">CUSTOMER CONTACT</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {OrderPaymentData.map((e,i)=>{
                return(
                  <>
                   <tr>
                    <td>{e.paymentType}</td>
                    <td>{e.preperationTime}</td>
                    <td>{e.orderType}</td>
                    <td colSpan="2">{e.autoAccept}</td>
                    <td>{e.orderTime}</td>
                    <td>{e.deliveryTime} </td>
                    <td>{e.customerName}</td>
                    <td>{e.customerContact}</td>
                    <td>{e.action}</td>
                   </tr>
                     </>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default OrderPayment;

