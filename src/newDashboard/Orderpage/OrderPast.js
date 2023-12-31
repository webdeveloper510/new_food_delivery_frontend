import React from 'react'
import { OrderNewData } from './orderdata/OrderNewdata'
import Accordion from 'react-bootstrap/Accordion'
import "./style/OrderPage.scss"
import OrderBody from './OrderBody'
function OrderPast() {
  const orderPast=OrderNewData.filter((e,i)=>e.id==2);
    
  return (
     
    <div className='container' style={{paddingBottom:'70px'}}>
      <div className='row py-2   text-dark  ' style={{background:'#2a3042'}} >
        <div className='col-6 text-center'  style={{color:'green '}}>Complete Order</div>
        <div className='col-6 text-center' style={{color:'#ea3c53 '}} > Ready Order</div>
      </div>
      <div className='row d-flex justify-content-between w-100 row-cols-lg-2 row-cols-md-2 row-cols-1 '>
        <div className='col py-3'>
          {orderPast.map((e, i) => {
            return (
              <>
                <div className='container mx-2' key={i}>
                  <div className='row my-1'>
                    <Accordion  className='py-1 rounded accordians my-1 bg-light'>
                      <Accordion.Item eventKey="0" className=''>
                        <Accordion.Header className='rounded ' style={{background:'white!important'}}>
                        <div className='d-flex justify-content-between w-100 py-1'>
                                <div className='d-inline-block'>
                                  <p><strong>{e.name}</strong></p>
                                  <h6> Order {e.orderId}</h6>
                                </div>
                                <div  className='d-inline-block ps-3'>
                                <button className='btn btn-outline-success mx-1 px-1  mt-0 py-1'> Completed</button>

                                </div>
                                <div  className='d-inline-block pe-4'>
                                  <p className='text-end'>{e.date}</p>
                                  <h6> {e.items} items  . INR {e.price}</h6>
                                </div>
                             </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <OrderBody active="Done"/>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <div className='col py-3 '>
        {orderPast.map((e, i) => {
            return (
              <>
                <div className='container mx-2' key={i}>
                  <div className='row my-1'>
                    <Accordion  className='py-1 rounded accordians my-1 bg-light'>
                      <Accordion.Item eventKey="0" className=''>
                        <Accordion.Header className='rounded ' style={{background:'white!important'}}>
                             <div className='d-flex justify-content-between w-100 py-1'>
                                <div className='d-inline-block'>
                                  <p><strong>{e.name}</strong></p>
                                  <h6> Order {e.orderId}</h6>
                                </div>
                                <div  className='d-inline-block ps-3'>
                                <button className='btn btn-outline-danger mx-1 px-1  mt-0 py-1'> cancelled</button>

                                </div>
                                <div  className='d-inline-block pe-4'>
                                  <p className='text-end'>{e.date}</p>
                                  <h6> {e.items} items  . INR {e.price}</h6>
                                </div>
                             </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <OrderBody active="Done"/>
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

export default OrderPast