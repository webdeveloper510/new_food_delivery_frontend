
import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import { OrderPaymentData } from "./OrderListingData/OrderPaymentData";
function OrderPayment() {
  return (
    <>
    <div className="container bg-light  px-2  rounded" style={{ margin: '120px auto  0 auto ', width: "97%"  }}>
      <div className="row " >
      <div className="card order-history">
        <Table striped bordered hover className="required-menu-table">
            <thead className="order-history">
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
                        <td><button className='btn btn-primary'>{e.action}</button></td>
                      </tr>
                    </>
                    )
                  })}
            </tbody>
        </Table>
</div>

</div>
</div>
</>
  );
  }
export default OrderPayment;
