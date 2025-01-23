import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer py-5">
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col col-xl-3 col-lg-6 footer-center  col-md-6 col-sm-12 col-12  mb-4 mb-md-0">
              <img src="footerlogo.png" className="img-fluid" alt="Footer Logo" />
            </div>
            <div className="col col-xl-3 col-lg-6 footer-center col-md-6 col-sm-12 col-12  mb-4 mb-md-0">
              <ul className="ul-footer list-unstyled">
                <li><a href="#">FCA - Report & Findings</a></li>
                <li className="mt-3"><a href="#">Start Claim</a></li>
                <li className="mt-3"><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="col col-xl-3 col-lg-6 footer-center col-md-6 col-sm-12 col-12  mb-4 mb-md-0">
              <ul className="ul-footer list-unstyled">
                <li><a href="#">Privacy Policy</a></li>
                <li className="mt-3"><a href="#">Terms & Conditions</a></li>
                <li className="mt-3"><a href="#">Cookie Policy</a></li>
              </ul>
            </div>
            <div className="col col-xl-3 col-lg-6 footer-center col-md-6 col-sm-12 col-12 ">
              <ul className="ul-footer list-unstyled">
                <li><a href="#">Facebook</a></li>
                <li className="mt-3"><a href="#">Instagram</a></li>
                <li className="mt-3"><a href="#">X</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <p className="text-center text-white small">
                MCE operates as a claims facilitation service and is not a legal advisory firm.<br />
                We do not provide legal advice. Our expertise lies in connecting clients with the<br />
                appropriate legal entities suited to their specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid   py-3">
        <div className="container">
          <p className="text-center m-0 footer-bottom" style={{ fontWeight: '600' }}>
            Copyright © 2024 THE MONEY CLAIMING EXPERTS | Privacy Policy | Powered by Pro Digital Solution
          </p>
        </div>
      </div>
    </>
  )
}

export default Footer;
