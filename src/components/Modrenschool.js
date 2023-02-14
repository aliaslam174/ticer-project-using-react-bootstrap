import React from 'react'
import ourvision from'../../src/logo/our-vision.png';

export default function Modrenschool(props) {
  return (
<div className="p-5 mt-1 bg-light text-black">
<div className=" p-3 my-3 ">
  <p>CENTERS OF EXCELLENCE</p>
  <h1>MODERN SCHOOLS</h1>
</div>
    <div  className="row ">

        <div  className="col-md-4 card mb-4">
           <img classname='card-img-top imgp img-thumbnail'src={props.img[0]}></img>
           <h5 className='card-text'>FAIZ AHMAD FAIZ (FAF) HIGH SCHOOL</h5>
           <p className='card-text'>It was established in 2012 on an area of 23800 sft in 17 MPR, Lodhran.</p>
           
        </div>
        <div  className="col-md-4 card mb-4">
           <img classname='card-img-top'src={props.img[1]}></img>
           <h5 className='card-text'>AMINA GIRLS HIGHER SECONDARY SCHOOL (AGHSS)</h5>
           <p className='card-text'>It was established in 2013 on an area of 44000 sft in 21 MPR, Lodhran.</p>
           
        </div>
        <div  className="col-md-4 card mb-4" >
           <img classname='card-img-top'src={props.img[2]}></img>
           <h5 className='card-text'>WAHI SALAMAT RAI SCHOOL (WSR)</h5>
           <p className='card-text'>It was established in 2014 on an area of 7500 sft in Wahi Salamar Rai, Lodhran.</p>
           
        </div>
        <div  className="col-md-4 card mb-4">
           <img classname='card-img-top'src={props.img[3]}></img>
           <h5 className='card-text'>TEF KHANWAH GHALWAN SCHOOL (KGS)</h5>
             <p className='card-text'>It was established in 2018 on an area of 18000 sft in Khanwah Ghalwan, Lodhran.</p>
        </div>
        
        <div  className="col-md-4 card mb-4">
           <img classname='card-img-top'src={props.img[4]}></img>
           <h5 className='card-text'>LODHRAN PUBLIC SCHOOL (LPS)</h5>
           <p className='card-text'>TEF has renovated in 2019-2020. It has revamped an area of 18000 sft in LPS.</p>
           
        </div>
        
        
    
    </div>

  

</div>
  )

}


