import React from 'react'

function Setting() {
  return (
        <>   
      <div className='container' style={{padding:'90px 0 50px 0'}}>
         <h2 className='ps-5 fw-bolder pb-1 '><strong>Settings</strong></h2>
            <form>
        <div className='row bg-light px-5 py-3'>

        <h4 className='py-2' >Basic Details</h4>
           
            <div className='col'>
                <div className='py-3'>
                    <label>User view radiusfor resturent(KM)</label>
                    <input className='form-control' placeholder='eg. 10' type='number'/>
               </div>
               <div className='py-3'>
                    <label>Rider request acceptence time(secs)</label>
                    <input className='form-control' placeholder='eg. 70' type='number'/>
               </div>
               <div className='py-3'>
                    <label>Trip maximum ordewrs</label>
                    <input className='form-control' placeholder='eg. 90' type='number'/>
                   
               
               </div>
               <div className='py-3'>
                    <label>Veg/Nonveg visibility</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Hide</option>
                        <option value="1">Show</option>
                    </select>
               </div>
               <div className='py-3'>
                    <label>Minimum order - INR</label>
                    <input className='form-control' placeholder='eg. 100' type='number'/>
               </div>
               <div className='py-3'>
                    <label>Maximum cash order Limit - </label>
                    <input className='form-control' placeholder='eg. 800' type='number'/>
               </div>
               <div className='py-3'>
                    <label>Manage Schedule order time (mins)</label>
                    <input className='form-control' placeholder='eg. 75' type='number'/>
               </div>
            </div>
            <div className='col'>
            <div className='py-3'>
                    <label>User view radiusfor resturent(Miles)</label>
                    <input className='form-control' placeholder='eg. 59.2'  type='number'/>
               </div>
               <div className='py-3'>
                    <label>Request timing for rider before preperation time (mins)</label>
                    <input className='form-control' placeholder='eg. 5' type='number'/>
               </div>
               <div className='py-3'>
                    <label>Rider order request time </label>
                    <input className='form-control'  placeholder='eg. 10' type='number'/>
               </div>
               <div className='py-3'>
                    <label>Distance unit for riders</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>KM</option>
                        <option value="1">Miles</option>
                        <option value="2">Meter</option>
                    </select>
               </div>
               <div className='py-3'>
                    <label>Merchant Reminder for pending order(mins)</label>
                    <input className='form-control' placeholder='eg. 10'  type='number'/>
               </div>
               <div className='py-3'>
                    <label>Maximum cash limit for Riders -</label>
                    <input className='form-control' placeholder='eg. 5000'  type='number'/>
               </div>
            

            </div>
                 
        
        <div className='d-flex justify-content-end me-5'>
            <button  className='btn ' style={{background:'#81c341',color:"white"}}>Submit Details</button>
        </div>
        </div>
            </form>
    </div>
    </>

  )
}

export default Setting