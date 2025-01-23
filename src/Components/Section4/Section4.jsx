import React from 'react'
import '../Section4/Section4.css'

const Section4 = () => {
  return (
   <>
   <div className="container sec4-bg">
    <div className="row">
        <div className="col">
            <h1 className='sec4-heading'>
            Hidden <span style={{color:'#C80000'}}>Commissions & Compensation</span>
            </h1>
        </div>
    </div>

    <div className="row mt-4 width-sec4" >
    <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  sec4-icon-direction" >
            <div>
                <img src="/sec4-icon.svg" alt="" />
            </div>
            <div>
                <h4 className='sec4-icon-heading'>
                FCA Bans Discretionary Commissions
                </h4>
                <p className='sec4-icon-p'>
                In January 2021, the FCA banned discretionary commissions to stop inflated interest rates by lenders.
                </p>
            </div>
        </div>
        <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  sec4-icon-direction">
            <div>
                <img src="/sec4-icon.svg" alt="" />
            </div>
            <div>
                <h4 className='sec4-icon-heading'>
                FCA Investigation Begins
                </h4>
                <p className='sec4-icon-p'>
                On January 11, 2024, the FCA began investigating hidden commissions & unfair practices in car finance.
                </p>
            </div>
        </div>
    </div>

   
    <div className="row mt-2 width-sec4 " >
    <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 sec4-icon-direction">
            <div>
                <img src="/sec4-icon.svg" alt="" />
            </div>
            <div>
                <h4 className='sec4-icon-heading'>
                Possible FCA Compensation
                </h4>
                <p className='sec4-icon-p'>
                After their investigation, the FCA may introduce a compensation program to repay excess charges.
                </p>
            </div>
        </div>
        <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  sec4-icon-direction">
            <div>
                <img src="/sec4-icon.svg" alt="" />
            </div>
            <div>
                <h4 className='sec4-icon-heading'>
                Prepare for FCA Refunds
                </h4>
                <p className='sec4-icon-p'>
                Prepare for potential FCA refunds and legal action as they investigate unfair car finance practices.
                </p>
            </div>
        </div>
    </div>





   </div>
   
   
   
   
   </>
  )
}

export default Section4
