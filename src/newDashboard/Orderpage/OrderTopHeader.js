import React, { useState } from 'react'
 import "./style/OrderPage.scss";
function OrderTopHeader() {
    
   
  return (
    <div className='container-fluid w-100' style={{margin:'70px 0 0 0',background:"#81C341"}}>
    <div className='row '>
        <ul className=''>
            <div className='float-end pt-4 pe-4'>
            <li className='text-light ' style={{listStyle:"none"}}>  
            <label class="switch">
              <input type="checkbox"/>
              <span class="slider round"></span>
            </label>
              {/* <input type='checkbox'/> */}
              
              </li>
              </div>
        </ul>
    </div>
  
</div>
  )
}

export default OrderTopHeader