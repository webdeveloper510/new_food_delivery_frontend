import React from 'react'

function OrderListingForm() {
  return (
    <div className='container bg-light  py-4 px-3  rounded' style={{ margin: '0 auto  0 auto ', width: "97%" }}>
      <form>
        <div className='row'>
          <div className='col'>
            <label>Order Id</label>
            <input className='form-control' placeholder='eg 99' type='number' />

          </div>
          <div className='col'>
            <label>Order Id</label>
            <select className="form-select form-select-md" aria-label=".form-select-md example">
              <option selected>Choose Zone</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

          </div>
          <div className='col'>
            <label>Order Id</label>
            <select className="form-select form-select-md" aria-label=".form-select-md example">
              <option selected>Choose Delivery Region</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className='col'>
            <label>Order Id</label>
            <input className='form-control' placeholder='eg amrit' type='number' />
          </div>
          <div className='col'>
            <label>Order Id</label>
            <input className='form-control' placeholder='eg 9876567854' type='number' />
          </div>
          <div className='col'>
            <label>Order Id</label>
            <select className="form-select form-select-md" aria-label=".form-select-md example">
              <option selected>Cancelled shop </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className='pt-3'>
          <button className='btn px-5 py-2 text-light' style={{ background: '#81C341' }}>Apply</button>
        </div>
      </form>
    </div>
  )
}

export default OrderListingForm