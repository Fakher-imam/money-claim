import React from 'react'
import '../Section5/Section5.css'
import Sectionbutton from '../Sectionbutton/Sectionbutton'

const Section5 = () => {
  return (
   <>
   <div className="container sec5-bg">
      <div className="row">
        <div className="col">
            <h1 className='sec5-heading'>
            Maximise Your <span style={{color:'#C80000'}}>Claim & Avoid</span> Future Exclusions Before the FCA’s Investigation Ends
            </h1>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  sec5-col1">
         <p className='sec5-p' >Why Early Legal Action is Important and Who Might Be Affected:</p>
         <p >Even with the FCA’s pause, act now to maximise your claim and prevent future exclusions. If you had a PCP or HP contract before January 28, 2021, check if you’re affected, as many firms are involved.</p>

         <div className="row">
      <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sec5-icon-direction">
            <div>
                <img src="/sec2-icon3.svg" className='img-fluid' alt="" />
            </div>
            <div>
                <p className='sec5-icon-p'>
                This review could lead to billions in repayments.
                </p>
            </div>
        </div>
        <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sec5-icon-direction">
            <div>
                <img src="/sec2-icon4.svg" className='img-fluid' alt="" />
            </div>
            <div>
                <p className='sec5-icon-p'>
                Millions could benefit from this investigation.
                </p>
            </div>
        </div>
      </div>
      <div className='mt-3'>
        <Sectionbutton buttonText={"Check Now"} style={{border:'none'}}/>
      </div>
        </div>
        <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sec5-pic-center">
            <img src="/sec5-bg.png" className='img-fluid' alt="" /> 
        </div>
      </div>
      

     
   </div>
   
   
   
   </>
  )
}

export default Section5
