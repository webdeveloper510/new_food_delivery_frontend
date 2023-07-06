import React from 'react'

function CustomerForm() {
  return (
    <div className='container bg-light  py-4 px-3  rounded' style={{ margin: '0 auto  0 auto ', width: "97%" }}>
      <form>
        <div className='row '>
        <div className='col-3 '>
            <label>Order Id</label>
            <select className="form-select form-select-md" aria-label=".form-select-md example">
              <option selected>Choose Shop</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

          </div>
          <div className='col-3 '>
            <label>Order Id</label>
            <input className='form-control' placeholder='eg 99' type='date' />

          </div>
          
     
         
      
        <div className='col-2 pt-4 '>
          <button className='btn px-5 py-2  text-light' style={{ background: '#81C341' }}>Save</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default CustomerForm;