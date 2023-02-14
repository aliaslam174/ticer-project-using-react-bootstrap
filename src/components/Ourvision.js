import React from 'react'
import ourvision from'../../src/logo/our-vision.png';
import ourmission from'../../src/logo/our-mission.png';
export default function Ourvision() {
  return (
<div className="p-5 mt-1 bg-light text-black">
    <div  className="row">

        <div  className="col-md-4">
            <h6 className='aboutalign'>TAREEN EDUCATION FOUNDATION (TEF)</h6>
            <h2 className='aboutalign'>is a nonprofit</h2>
            <p className='aboutalign1'>organisation with a mandate to improve quality of education in Pakistan; primarily operating in the rural areas of Southern Punjab. Tareen Education Foundation (TEF) is a nonprofit organization established under The Societies Registration Act of 1860 with a mandate to improve quality of education in Pakistan.</p>
           
        </div>
    <div  className="col-md-4">
        <h4>OUR VISION</h4>
        <p className='aboutalign1'>
            <div>
            <img className='VISION' src={ourvision}/>
            </div>
            Our objective is to create centres of learning, which provide students an enabling environment to develop their faculties of critical analysis and independent thinking, to polish their communication and articulation skills, to increase their understanding of social issues, and to make them active.
            </p>
        
    </div>
    <div  className="col-md-4">
    <h4>OUR MISSION</h4>
    <p className='aboutalign1'><img className='VISION' src={ourmission}/>TEF is a non-profit organization with a mandate to provide quality education, especially to the marginalized communities, such as the rural poor and women.</p>
        </div>

    </div>

</div>
  )
}
