import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>DNG Homestay</h4>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow US</h4>
            <div className="social-links">
              <a
                href="https://www.facebook.com/profile.php?id=100090399621119"
                target="blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div className="nav justify-content-center border-bottom pb-3 mb-3"></div>
          <div>
            <p className="text-center copyright">
              © DNG Homestay. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
