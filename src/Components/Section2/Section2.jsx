import React from 'react'
import '../Section2/Section2.css'
import Sectionbutton from '../Sectionbutton/Sectionbutton'

const Section2 = () => {
  return (
   <>
   
   
   <div className="container sec2-bg">
   <div className='rd-box'>
             <h1>Check if you’re ELIGIBLE</h1>
             <div className='mt-2'>
             <Sectionbutton buttonText={"Check Now"} style={{ color: 'white !important', backgroundColor: 'black' }} />

             </div>
          </div>
    <div className="row">
        <div className="col">
            <h1 className='sec2-heading'>
            Verify If You’re <span style={{color:'#C80000'}}>Owed Money</span>
            </h1>
        </div>
    </div>
    <div className="row mt-4">
        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 icon-direction">
            <div>
                <img src="/sec2-icon1.svg" className='img-fluid' alt="" />
            </div>
            <div>
                <p className='sec2-icon-p'>
                You might qualify for a significant refund.
                </p>
            </div>
        </div>
        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 icon-direction">
            <div>
                <img src="/sec2-icon2.svg" className='img-fluid' alt="" />
            </div>
            <div>
                <p className='sec2-icon-p'>
                FCA is probing hidden car loan commissions.
                </p>
            </div>
        </div>
        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 icon-direction">
            <div>
                <img src="/sec2-icon3.svg" className='img-fluid' alt="" />
            </div>
            <div>
                <p className='sec2-icon-p'>
                This review could lead to billions in repayments.
                </p>
            </div>
        </div>
        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 icon-direction">
            <div>
                <img src="/sec2-icon4.svg" className='img-fluid' alt="" />
            </div>
            <div>
                <p className='sec2-icon-p'>
                Millions could benefit from this investigation.
                </p>
            </div>
        </div>
    </div>
   </div>
   
   
   </>
  )
}

export default Section2
