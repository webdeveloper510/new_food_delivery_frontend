import React from 'react';
import Table from 'react-bootstrap/Table';
import {  customersData } from './customerData/customerData.js';
function CustomerTable() {
  debugger
  console.log(customersData);
  return (
    <>
        <div className="container py-5 bg-light  px-3  rounded"style={{ margin: '20px auto  0 auto ', width: "97%" }} >
      <div className="row " >
      <div className="card order-history table-responsive">
        <Table striped bordered hover className="required-menu-table " >
            <thead className="order-history">
                <tr>
                <th scope="col">SR. No.</th>
                <th scope="col">UNIQUE ID</th>
                <th scope="col">NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">CONTACT NUMBER</th>
                <th scope="col">AVG, RATING</th>
                <th scope="col">TOTAL ORDER</th>
                <th scope="col">COMPLETED</th>
                <th scope="col">CANCELLED</th>
                <th scope="col">TOTAL AMOUNT</th>
                </tr>
            </thead>
            <tbody>
                {customersData.map((e,i)=>{
                  console.log(e.email);
                    return(
                      <>
                      <tr>
                      <td>{e.sno}</td>
                      <td>{e.uniqueId}</td>
                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.contact}</td>
                      <td>{e.aerageRating}</td>
                      <td>{e.totalOrder}</td>
                      <td>{e.completed}</td>
                      <td>{e.cancelled}</td>
                      <td>{e.totalAmount}</td>
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

export default CustomerTable;

