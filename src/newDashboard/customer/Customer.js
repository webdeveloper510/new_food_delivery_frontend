import React from 'react'
import { CSVLink } from 'react-csv';

import CustomerForm from './CustomerForm';
import CustomerTable from './CustomerTable';
import { customersData } from './customerData/customerData';
import { toast } from 'react-toastify';
function Customer() {
  const downloadCustomerDetails=()=>{
    console.log("gg");
    toast.success('File downloaded') 

  }
  return (
    <div className='container ' style={{background:"rgb(222, 228, 237)"}}>
        <div className='py-3' >
            <h3 className='text-dark ps-3 d-inline-block' style={{paddingTop:"100px"}}>Customer</h3>
           
            <CSVLink data={customersData} filename="customersData.csv">
            <button onClick={downloadCustomerDetails} className='btn btn-secondary float-end me-2' style={{marginTop:"90px",background:'#81C341' ,border:'0'}}><i class="bi bi-file-arrow-down-fill"></i> Download CSV </button>
           </CSVLink>
           
         <div className='clearfix'></div>
        </div>
      <div className='row' >
             <CustomerForm/>
             <CustomerTable/>
      </div>
    </div>
  )
}

export default Customer;