import React from 'react'
import '../section1/Section1.css'
import Sectionbutton from '@/Components/Sectionbutton/Sectionbutton'


const Section1 = () => {
  return (
   <>
   
  <div className="container-fluid sec1-bg">
  <div className="container sec1-container ">
    <div className="row sec1-row ">
        <div className="col">
          <h1 className='sec1-heading'>
          Car Finance <span style={{color:'#C80000'}}>Reclaim</span> Experts

          </h1>

          <p className='sec1-p'>Get money back from your car finance if bought <br /> before January 28, 2021—see if you qualify!</p>

          <div className='red-box'>
             <h1>Check if you’re ELIGIBLE</h1>
             <div className='mt-2'>
             <Sectionbutton buttonText={"Check Now"} style={{ color: 'white !important', backgroundColor: 'black' }} />

             </div>
          </div>
        </div>
        
       
        
    </div>
   </div>
  </div>
   
   
   
   </>
  )
}

export default Section1
