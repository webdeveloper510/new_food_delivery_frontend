import React from 'react'

function OrderHelpButton() {
  return (
            <>
                
        <button type="button"  style={{background:'#81C341',color:'white'}} className="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <i className="bi bi-patch-question-fill"></i> Help
        </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Help Center</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h6>Item out of stock</h6>
                    <p>Service provider will notified</p>
                <hr/>
                </div>
                <div className="modal-body">
                    <h6>Contact Service Provider</h6>
                    <p>Our team will contact you as soon as possible</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn " style={{background:"#81C341",color:"white"}}  data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
            </>
  )
}

export default OrderHelpButton