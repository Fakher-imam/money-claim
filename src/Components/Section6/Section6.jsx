import React from "react";
import "../Section6/Section6.css";
import Sectionbutton from "../Sectionbutton/Sectionbutton";

const Section6 = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="sec6-heading">
              Discretionary Commission-Free{" "}
              <span style={{ color: "#C80000" }}>Firms</span>
            </h1>
            <p className="text-center">
              Firms that have always maintained transparency by avoiding
              discretionary commission arrangements.
            </p>
          </div>
        </div>

        <div className="row " style={{marginTop:'2rem'}}>
          <div className="col col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 relative-group" >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/sec6-icon1.svg" alt="" />
            </div>
            <div className="groups group-mb" >
              <h1>Group A</h1>
              <p>
                Admiral Advantage Finance Autolend Auto Money Billing Finance
                Burnley Savings & Loans Car Loan Centre Carmoola
              </p>
            </div>
          </div>
          <div className="col col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 relative-group">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/sec6-icon2.svg" alt="" />
            </div>
            <div className="groups">
              <h1>Group B</h1>
              <p>
                First Response Finance Guardian Finance Lendable Lombard Mallard
                Finance MoneyBarn Motiv Oodle
              </p>
            </div>
          </div>
          <div className="col col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 relative-group">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/sec6-icon3.svg" alt="" />
            </div>
            <div className="groups">
              <h1>Group C</h1>
              <p>
                Oplo Premium Plan RateSetter Retail Money Market Specialist
                Motor Finance Tandem Vehicle Credit 1st Stop Finance
              </p>
            </div>
          </div>
        </div>

        <div className="row">
            <div className="col">
                <h1 className="sec6-heading">
               <span style={{color:'#C80000'}}> Check</span> If Your Provider Isn’t Listed
                </h1>
                <p className="text-center mt-3">
                If you’ve been exploited by car finance companies, contact TheMoneyClaimingExperts.com <br /> now for expert help with your commission claim.
                </p>
                <div className="text-center mt-4">
                    <Sectionbutton buttonText={"Check Now"} style={{ border:'none' }} />
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
