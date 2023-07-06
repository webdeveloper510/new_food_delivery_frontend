import React from 'react';
import Table from 'react-bootstrap/Table';
import { merchantData } from './MerchantData/merchantData';
import { CSVLink } from 'react-csv';

function MerchanTable() {
  const merchantIndividual=()=>{
    toast.success("File downloaded")
  }
 
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
                <th scope="col">ORDER REQUEST</th>
                <th scope="col">ORDER ACCEPTED</th>
                <th scope="col">ORDER COMPLETED</th>
                <th scope="col">ORDER CANCELLED</th>
                <th scope="col">ORDERS OUT OF STOCK</th>
                <th scope="col">TOTAL COLLECTION</th>
                <th scope="col">PACKAGING CHARGES</th>
                <th scope="col">TAXES</th>
                <th scope="col">SHOP REVENUE</th>
                <th scope="col">COMMISSION</th>
                <th scope="col">ACCEPTED RATE(%)</th>
                <th scope="col">REJECTED RATE(%)</th>
                <th scope="col">RIDER AVG. RATE</th>
                <th scope="col">USER AVG.RATE</th>
                <th scope="col">WASTED</th>
                <th scope="col">WASTED(%)</th>
                <th scope="col">ACTION</th>


                </tr>
            </thead>
            <tbody>
                {merchantData.map((e,i)=>{
                    return(
                      <>
                      <tr>
                      <td>{e.sno}</td>
                      <td>{e.uniqueId}</td>
                      <td>{e.name}</td>
                      <td >{e.orderRequest}</td>
                      <td>{e.orderAccept}</td>
                      <td>{e.orderCompleted}</td>
                      <td>{e.orderCancelled}</td>
                      <td>{e.orderOutOfStock}</td>
                      <td>{e.totalCollection}</td>
                      <td>{e.packagingCharges}</td>
                      <td>{e.taxes}</td>
                      <td>{e.shopRevenue}</td>
                      <td>{e.commision}</td>
                      <td>{e.acceptedRates}</td>
                      <td>{e.rejectedRate}</td>
                      <td>{e.riderAverageRating}</td>
                      <td>{e.userAverageRating}</td>
                      <td>{e.wasted}</td>
                      <td>{e.wastedPercent}</td>
                      <td>
                        <div>
                        <CSVLink data={[e]} filename="individualcustomner.csv" >
                          <button style={{border:'0', background:'white',color:'blue'}} onClick={merchantIndividual}>
                         {e.action}
                         </button>
                        </CSVLink>
                       </div>
                    </td>
                      

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

export default MerchanTable;

