import React from 'react'


export default function Topbar() {
  return (
    <div>
  <div class="card bg-light text-dark topbar container-fluid ">
   <div className=' row'>
   <div className='col-md-8'></div>
   <div className='col-md-3 mt-1' >
    
   <a href="https://www.youtube.com/" target="_blank" className='icons'> <i className="fa fa-facebook" ></i></a>
   &nbsp;&nbsp;&nbsp;
   <a href="#" className='icons'> <i className="fa fa-twitter"></i></a>
   &nbsp;&nbsp;&nbsp;
   <a href="#" className='icons'> <i className="fa fa-github"></i></a>
   &nbsp;&nbsp;&nbsp;
   <a href="#" className='icons'> <i className="fa fa-instagram"></i></a>
   &nbsp;&nbsp;&nbsp;
   <a href="#" className='icons'> <i className="fa fa-pinterest"></i></a>
   &nbsp;&nbsp;&nbsp;
   <a href="#" className='icons'> </a>
    <a><button class="btn btn-success btn-sm">Donate</button></a>
   </div>
   <div className='col-md-4'></div>
   </div>
   
  </div>
    </div>
  )
}
