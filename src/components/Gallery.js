import React from 'react'
import ourvision from'../../src/logo/our-vision.png';
import pic1 from'../../src/img/pic1.jpg';
import pic2 from'../../src/img/pic2.jpg';
import pic3 from'../../src/img/pic3.jpg';
import pic4 from'../../src/img/pic4.jpg';
import pic5 from'../../src/img/pic5.jpg';
import pic6 from'../../src/img/pic6.jpg';
import pic7 from'../../src/img/pic7.jpg';
import pic8 from'../../src/img/pic8.jpg';
import pic9 from'../../src/img/pic9.jpg';
import pic10 from'../../src/img/pic10.jpg';
import pic11 from'../../src/img/pic11.jpg';
import pic12 from'../../src/img/pic12.jpg';
import pic13 from'../../src/img/pic13.jpg';


export default function GALLERY() {
  return (
<div className="p-5 mt-1 bg-light text-black">
<div className=" p-3 my-3 ">
  <p>TEF INITIATIVES</p>
  <h1>OUR PROGRAMMES</h1>
</div>
    <div  className="row ">

        <div  className="col-md-3 card mb-3">
           <img classname='card-img-top imgp img-thumbnail'src={pic1}></img>
           <p className='card-text'>Promoting Information Technology</p>
           
        </div>
        <div  className="col-md-3 card mb-3">
           <img classname='card-img-top'src={pic2}></img>
           <p className='card-text'>Promoting Science Education</p>
           
        </div>
        <div  className="col-md-3 card mb-3" >
           <img classname='card-img-top'src={pic3}></img>
           <p className='card-text'>Promoting Creativity through Art</p>
           
        </div>
        <div  className="col-md-3 card mb-3">
           <img classname='card-img-top'src={pic4}></img>
           <p className='card-text'>Reviving Libraries in Schools</p>
           
        </div>
        <div  className="col-md-3 card mb-3">
           <img classname='card-img-top'src={pic5}></img>
           <p className='card-text'>School Health Programme</p>
           
        </div>
        <div  className="col-md-3 card mb-3">
           <img classname='card-img-top'src={pic6}></img>
           <p className='card-text'>Promoting Organized Sports in Schools</p>
           
        </div>
        <div  className="col-md-3 card mb-3">
           <img classname='card-img-top'src={pic7}></img>
           <p className='card-text'>English Language Programme</p>
           
        </div>
        <div  className="col-md-3 card mb-3">
           <img classname='card-img-top'src={pic8}></img>
           <p className='card-text'>Provision of Missing Facilities</p>
           
        </div>
        <div  className="col-md-3 card mb-3">
           <img classname='card-img-top'src={pic9}></img>
           <p className='card-text'>Professional Development Workshops</p>
           
        </div>
        <div  className="col-md-3 card mb-3">
           <img classname='card-img-top'src={pic10}></img>
           <p className='card-text'>Deployment of Teachers in Schools</p>
           
        </div>
        <div  className="col-md-3 card mb-3">
           <img classname='card-img-top'src={pic11}></img>
           <p className='card-text'>Communication and Outreach</p>
           
        </div>
        <div  className="col-md-3 card mb-3">
           <img classname='card-img-top'src={pic12}></img>
           <p className='card-text'>Horticulture and Plantation</p>
           
        </div>
        <div  className="col-md-3 card mb-3">
           <img classname='card-img-top'src={pic13}></img>
           <p className='card-text'>Career Counseling Programme
</p>
           
        </div>
    
    </div>

  

</div>
  )
}

