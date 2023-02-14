import React from 'react'
import logo1 from'../../src/logo/ticer logo.png';
export default function Footer() {
  return (
    <div>
      <footer >
  <div class="container-fluid footer1">
    <div class="row">
      <div class="col-xl-3 col-lg-4 col-md-6 mt-5">
        <div>
          <h3><img src={logo1} className="footerlogo"></img></h3>
          <p class="mb-30 footer-desc footerpera">- is an organization with a mandate to improve quality of education in rural areas of Southern Punjab.</p>
        </div>
        
      </div>
      <hr class="w-100 clearfix d-md-none"></hr>
      <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6 mt-5" >
        <div className="footerlinks">
          <h5>   QUICK LINKS</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#" class="text-decoration-none link">About Us</a>
              <hr className="dropdown-divider"/>
            </li>
            <li>
              <a href="#" class="text-decoration-none link">Our Initiatives</a>
              <hr className="dropdown-divider"/>
            </li>
            <li>
              <a href="#" class="text-decoration-none link">Social Gallery</a>
              <hr className="dropdown-divider"/>
            </li>
            <li>
              <a href="#" class="text-decoration-none link">Downloads</a>
              <hr className="dropdown-divider"/>
            </li>
            <li>
              <a href="#" class="text-decoration-none link">Contact Us</a>
              <hr className="dropdown-divider"/>
            </li>
          </ul>
        </div>
       
      </div>
      {/* <hr class="w-100 clearfix d-md-none"></hr> */}
      <div class="col-xl-3 col-lg-3 col-md-6 mt-5 footerlinks">
        <div>
          <h5 > SECONDARY LINKS</h5>
          <ul class="list-unstyled ">
            <li>
              <a href="#" class="text-decoration-none link">Site Map</a>
              <hr className="dropdown-divider"/>
            </li>
            <li>
              <a href="#" class="text-decoration-none link">Careers</a>
              <hr className="dropdown-divider"/>
            </li>
            <li>
              <a href="#" class="text-decoration-none link">Login</a>
              <hr className="dropdown-divider"/>
            </li>
          </ul>
        </div>
       
      </div>
      {/* <hr class="w-100 clearfix d-md-none"></hr> */}
      
      <div class="col-xl-3 col-lg-3 col-md-6 mt-5">
        <div>
          <h4>Newsletter</h4>
          <div>
            <label for="Newsletter" class="form-label">Subscribe To Our Newsletter</label>
            <input type="text" class="form-control" Placeholder="Enter Your Email"/>
            <button class="btn btn-success mt-3">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
<div className=" bgfooterbar text-white  container-fluid ">
   <div className='row'>
   <div className='col-md-6 mt-3' >
   <span>© 2018 Tareen Education Foundation, P.O Box 54660, Lahore-Pakistan.</span>
   </div>
   <div className='col-md-6 mt-3 '><p>Developer Muhammad Ali & Aamir </p></div>
   
   </div>
   
  </div>
    </div>
  )
}
