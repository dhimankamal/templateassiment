import React from 'react'
import footerlogo from '../img/logo2.png';
;


const Footer = props => {
  return (
    <>
     <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img className="mb-4" src={footerlogo} alt="logo" />
              <p>
                Edumodo focuses on creating magnificent education websites with
                ease. Take the lead in the race with Learned.
              </p>
              <hr />
              <div className="soicalicon">
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-linkedin" /></a>
                <a href="#"><i className="fab fa-facebook-square" /></a>
                <a href="#"><i className="fab fa-skype" /></a>
                <a href="#"><i className="fab fa-pinterest-square" /></a>
                <a href="#"><i className="fab fa-apple" /></a>
              </div>
            </div>
            <div className="col-md-3">
              <p className="footer-heading">FEATURED PROGRAMS</p>
              <ul>
                <li>
                  <a href="#">Fixed responsive issue <span>- Just Now</span></a>
                </li>
                <li>
                  <a href="#">New portfolio grid layout <span>- Today</span></a>
                </li>
                <li>
                  <a href="#">Tested &amp; approved WP 3.6 <span>- 5 Hours Ago</span></a>
                </li>
                <li>
                  <a href="#">Fixed google map issue <span>- Yesterday</span></a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <p className="footer-heading">Learning</p>
              <ul>
                <li><a href="#">Our Plans</a></li>
                <li><a href="#">Free Trial</a></li>
                <li><a href="#">Academic Solutions</a></li>
                <li><a href="#">Business Solutions</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <p className="footer-heading">Support Forum</p>
              <p>
                Write your email into below field and join our quick support
                forum.
              </p>
              <form action className="serach-input">
                <input type="text" placeholder="Email address" />
                <button>Get Help</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
