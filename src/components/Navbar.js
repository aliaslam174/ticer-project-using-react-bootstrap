import React from 'react'
import logo1 from'../../src/logo/ticer logo.png';
import PropTypes from 'prop-types';
export default function Navbar(prop) {
  return (
    <>
   
      <nav className="navbar navbar-expand-lg bg-dark sticky-top text-white">
  <div className="container-fluid ">
    <a className="navbar-brand " href="#"><img src={logo1} className='logo1'/></a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
      <li className="nav-item dropdown">
          <a className="nav-link   text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       {prop.tittel}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">ABOUT US{prop.tittel}</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">OUR VISION</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">OUR VALUES</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">OUR MANAGEMENT</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link   text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         OUR INITIATIVES
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">OUR INITIATIVES</a></li>
           
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link   text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OUR SCHOOLS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">COURSE SCHOOL</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">FEATURE SCHOOL</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link  d text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            FOLLOW
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">SOCIAL GALLERY</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">PUBLICATIONS</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">HARRAPATA MAGAZIN</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link   text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            DOWNLOADS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">DOWNLOADS</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">BOOKS</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">E-CERTIFICATE</a></li>
          </ul>
        </li>
        <li className="nav-item g">
          <a className="nav-link  text-white g" href="#" tabindex="-1" aria-disabled="true">CONTACT US</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn  btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  
    </>
  )
}
Navbar.propTypes = {
  tittel: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  tittel: 'Set Proops'
};