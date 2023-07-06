import React from 'react'
import MerchantForm from './MerchantForm';
import MerchanTable from './MerchantTable';
import { CSVLink } from 'react-csv';
import { merchantData } from './MerchantData/merchantData';
import { toast } from 'react-toastify';
function Merchant() {
  const merchantDownload=()=>{
    toast.success("File downloaded")
  }
  return (
    <div className='container ' style={{background:"rgb(222, 228, 237)"}}>
        <div className='py-3' >
            <h3 className='text-dark ps-3 d-inline-block' style={{paddingTop:"100px"}}>Merchants</h3>
          
            <CSVLink data={merchantData} filename="merchatData.csv">
            <button onClick={merchantDownload} className='btn btn-secondary float-end me-2' style={{marginTop:"90px",background:'#81C341' ,border:'0'}}><i class="bi bi-file-arrow-down-fill"></i> Download CSV </button>
            </CSVLink>
            <div>
         </div>
         <div className='clearfix'></div>
        </div>
      <div className='row' >
             <MerchantForm/>
             <MerchanTable/>
      </div>
    </div>
  )
}

export default Merchant;