import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-logo">
            <div className="single-box">
              <img src="asset/logo-ilab.png" alt="" />
              <p>Copyright &copy; 2022 infinite Learning</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-box">
              <h2>Services</h2>
              <ul>
                <li>
                  <a href="#">Email Marketing</a>
                </li>
                <li>
                  <a href="#">Campaigns</a>
                </li>
                <li>
                  <a href="#">Branding</a>
                </li>
                <li>
                  <a href="#">Office</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-box">
              <h2>About</h2>
              <ul>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Benefits</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-box">
              <h2>Follow Us</h2>
              <ul>
                <li>
                  <img
                    src="asset/logo-facebook.png"
                    alt=""
                    style={{ width: "10px" }}
                  />
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <img src="asset/logo-twitter.png" alt="" />
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <img src="asset/logo-instagram.png" alt="" />
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
