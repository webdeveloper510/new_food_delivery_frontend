
import React from 'react';
import Table from 'react-bootstrap/Table';
import { orderListingData } from './OrderListingData/OrderListingData';
function OrderListingTable() {
  return (
    <>
        <div className="container py-5 bg-light  px-3  rounded"style={{ margin: '20px auto  0 auto ', width: "97%" }} >
      <div className="row " >
      <div className="card order-history">
        <Table striped bordered hover className="required-menu-table ">
            <thead className="order-history">
                <tr>
                <th scope="col">SR. No.</th>
                <th scope="col">ORDER ID</th>
                <th scope="col">TOTAL PRICE</th>
                <th scope="col">SHOP NAME</th>
                <th colSpan={2} scope="col">SHOP TYPE.</th>
                <th scope="col">ORDER STATUS</th>
                <th scope="col">PAYMENT TYPE</th>
                <th scope="col">PREPERATION TIME</th>
                <th scope="col">ORDER TYPE</th>
                <th scope="col">AUTO ACCEPT</th>
                <th scope="col">ORDER TIME</th>
                <th scope="col">DELIVERY TIME</th>
                </tr>
            </thead>
            <tbody>
                {orderListingData.map((e,i)=>{
                    return(
                      <>
                      <tr>
                      <td>{e.sNo}</td>
                      <td>{e.orderId}</td>
                      <td>{e.totalPrice}</td>
                      <td colSpan="2">{e.shopName}</td>
                      <td>{e.ShopType}</td>
                      <td><button type="button" className='btn btn-outline rounded-pill px-3' style={{background:"#81C341", color:"white"}}>{e.orderStatus}</button> </td>
                      <td>{e.paymentType}</td>
                      <td>{e.preperationTIme}</td>
                      <td>{e.orderType}</td>
                      <td>{e.autoAccept}</td>
                      <td>{e.orderTime}</td>
                      <td>{e.deliveryTime}</td>
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

export default OrderListingTable;

