import React, { useState } from 'react'
 import "./style/OrderPage.scss";
function OrderTopHeader() {
    
   
  return (
    <div className='container-fluid w-100' style={{margin:'70px 0 0 0',background:"#81C341"}}>
    <div className='row w-100'>
        <ul className='d-flex justify-content-between pt-4'>
            <li className='text-danger fs-4 fw-bold mx-2'  style={{listStyle:"none"}}>
                <span style={{color:'white' }}>Code</span><span style={{color:"green"}}>Nomad</span>
            </li>
       
            <li className='text-light ' style={{listStyle:"none"}}>  
            <label class="switch">
              <input type="checkbox"/>
              <span class="slider round"></span>
            </label>
              {/* <input type='checkbox'/> */}
              
              </li>
        </ul>
    </div>
  
</div>
  )
}

export default OrderTopHeader