import React from 'react'
import '../Section3/Section3.css'
import Sectionbutton from '../Sectionbutton/Sectionbutton'


const Section3 = () => {
  return (
    <>
    
    <div className="container sec3-bg">
        <div className="row">
            <div className="col sec3-pic-center col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                <img src="/sec3-bg.png" className='img-fluid' alt="" />
            </div>
            <div className="col      col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pt-3">
                 <h1 className='sec3-heading'>
                    
Act Now to Uncover Hidden Fees in <span style={{color:'#C80000'}}>Your Car</span> Finance Deal
                 </h1>

                 <p className='p-sec3'>
                 If you overpaid without knowing, it could be due to hidden commissions in your car finance deal because:
                 </p>
                 <div className="row">
                 <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12   icon-direction">
            <div>
                <img src="/sec3-icon.svg" alt="" />
            </div>
            <div>
                <p className='sec3-icon-p'>
                40% of Car Finance Deals Have Hidden Commissions..
                </p>
            </div>
        </div>
        <div className="col col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12   icon-direction">
            <div>
                <img src="/sec3-icon.svg" alt="" />
            </div>
            <div>
                <p className='sec3-icon-p'>
                Lenders and Dealers May Have Increased Your Interest Rates.
                </p>
            </div>
        </div>
                 </div>
                 <div className="row mt-4">
                    <div className="col">
                        <p className='sec3-p'>
                        Check for hidden commissions and refunds now!
                        </p>
                    </div>
                 </div>
                 <div className='mt-3 sec3-btn'>
                   <Sectionbutton buttonText= "Check Now" style={{border:'none'}}/>
                 </div>
            </div>
        </div>

    </div>
    
    
    
    </>
  )
}

export default Section3
