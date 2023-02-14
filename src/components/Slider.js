import React from 'react'
import sliderimage1 from '../../src/img/slider-image-1.jpg'
import sliderimage2 from '../../src/img/slider-image-2.jpg'
import sliderimage3 from '../../src/img/slider-image-3.jpg'
import sliderimage4 from '../../src/img/slider-image-4.jpg'


export default function Slider() {
  return (
    <div>
       
 
 <div className="container-">
  <div id="demo" className="carousel slide   mb-1" data-bs-ride="carousel">

     
      <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3"className="active"></button>
      </div>

     
      <div className="carousel-inner">
          <div className="carousel-item active">
              <img src={sliderimage1} alt="" className="d-block w-100 " />
          </div>
          <div className="carousel-item">
              <img src={sliderimage2} alt="" className="d-block w-100" />
          </div>
          <div className="carousel-item">
              <img src={sliderimage3} alt="" className="d-block w-100" />
          </div>
          <div className="carousel-item">
              <img src={sliderimage4} alt="" className="d-block w-100" />
          </div>
      </div>


      <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
      </button>
  </div>
</div>

    </div>
  )
}
