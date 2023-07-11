import React from 'react'
// import { OrderBodyData } from '../orderdata/OrderBodyData.js';
import { OrderBodyData } from './orderdata/OrderBodyData';
import OrderHelpButton from './OrderHelpButton';
function OrderBody({active}) {
  return (
    <div className='container mb-2'>
        <div className='row'>
            <h6>Order Details</h6>
           { OrderBodyData.map((e,i)=>{
              return(
                <>
             <div className='col'>
            <div className='py-1'>
               <h6 className='d-inline-block'>1 X {e.Food1} </h6>
               <p className='d-inline-block float-end '>INR {e.price1}</p>
               <div className='clearfix'></div>
            </div>
             <div  className='py-1'>
               <h6 className='d-inline-block'>1 X {e.Food2} </h6>
               <p className='d-inline-block float-end '>INR {e.price2}</p>
               <div className='clearfix'></div>
            </div>
            <div  className='py-1'>
               <h6 className='d-inline-block'>SubTotal </h6>
               <h6 className='d-inline-block float-end '>INR {e.price1+e.price2}</h6>
               <div className='clearfix'></div>
            </div>
            <div  className='py-1'>
               <h6 className='d-inline-block'>GST </h6>
               <p className='d-inline-block float-end '> INR {e.GST}</p>
               <div className='clearfix'></div>
            </div>
            <div  className='py-1'>
               <h6 className='d-inline-block'>CGST </h6>
               <p className='d-inline-block float-end '>INR {e.CGST}</p>
               <div className='clearfix'></div>
            </div>
            <div  className='py-1'>
               <h6 className='d-inline-block'>Packaging Charges </h6>
               <p className='d-inline-block float-end '>INR {e.Packing}</p>
               <div className='clearfix'></div>
            </div>
            <div  className='py-1'>
               <h6 className='d-inline-block'>Total <p>(including all taxes)</p></h6>
               <h5 className='d-inline-block float-end '>INR {e.price1+e.price2+e.GST+e.CGST+e.Packing}</h5>
               <div className='clearfix'></div>
            </div>
               <div  className='py-1'>
                <div className='float-end'>
                    {/* <button className='btn'><i class="bi bi-patch-question-fill"></i> Help</button> */}
                    <OrderHelpButton/>
                    <button className='btn text-light mx-2' style={{background:"#81C341"}}><i class="bi bi-check-circle-fill"></i>  {active}</button>
                </div>
                <div className='clearfix'></div>
               </div>
             </div>
            
             </>
              )
               })}
              
        </div>
    </div>
  )
}

export default OrderBody;   