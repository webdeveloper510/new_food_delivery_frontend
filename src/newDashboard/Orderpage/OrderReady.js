
import React from 'react'
// import { OrderNewdata } from './orderdata/OrderNewdata.js';
import { OrderNewData } from './orderdata/OrderNewdata'
import Accordion from 'react-bootstrap/Accordion'
import "./style/OrderPage.scss"
import OrderBody from './OrderBody'
// import OrderPreparing from './OrderPreparing';

function OrderReady() {
  const orderReady=OrderNewData.filter((e,i)=>e.id===3);
  
  console.log(orderReady);

  return (
    
    <div className='container' style={{paddingBottom:'70px'}}>
      
      <div className='row py-2  text-dark ' style={{background:'#2a3042'}}  >
        <div className='col-6 text-center text-light'>New</div>
        <div className='col-6 text-center text-light'>Preparing</div>
      </div>
      <div className='row d-flex justify-content-between w-100 row-cols-lg-2 row-cols-md-2 row-cols-1'>
        <div className='col py-3'>
          {orderReady.map((e, i) => {
            return (
              <>
                <div className='container mx-2' key={i}>
                  <div className='row my-1'>
                    <Accordion  className='my-1 rounded accordians bg-light '>
                      <Accordion.Item eventKey="0" className='py-3'>
                        <Accordion.Header className='rounded ' style={{background:'white!important'}}>
                             <div className='d-flex justify-content-between w-75 py-1 px-2'>
                                <h6> Order {e.orderId} </h6>
                                <p>{e.items} items</p>
                                <p>{e.time}</p>
                                <p>INR {e.price}</p>
                             </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <OrderBody active="Mark as ready"/>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <div className='col py-3'>
        {orderReady.map((e, i) => {
            return (
              <>
                <div className='container mx-2 w-90' key={i}>
                  <div className='row  my-1'>
                    <Accordion  className='my-1 py-2 rounded accordians bg-light'>
                      <Accordion.Item eventKey="0" >
                        <Accordion.Header className='pb-3' >
                             <div className='d-flex position-relative justify-content-between w-75 py-1 px-2'>
                                <h6> Order {e.orderId} </h6>
                                <p>{e.items} items</p>
                                <p>{e.time}</p>
                                <p>INR {e.price}</p>
                             <p className='orderPage' style={{position:'absolute' ,top:'31px',margin:'20px 0'}}>{e.time} Minutes</p>
                             <h6 className='waitingTime' style={{position:'absolute' ,top:'31px' ,right:"-85px" ,margin:'20px 0' }}>Waiting for driver to be assign</h6>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <OrderBody active="Mark as ready"/>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default OrderReady;
