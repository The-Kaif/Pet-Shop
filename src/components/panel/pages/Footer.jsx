import React from "react";
import logo from "../../../assets/footer-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer-distributed">
      {/* Left section of the footer */}
      <div className="footer-left">
        <img src={logo} alt="logo" />
        <p className="footer-links">
          {/* Links to various pages */}
          <Link to={"/panel/home"} className="link-1">
            Home
          </Link>
          <Link to={"/panel/pets"}>Pets</Link>
          <Link to={"/panel/services"}>Services</Link>
        </p>
        <p className="footer-company-name">Pets-World © 2023</p>
      </div>

      {/* Center section of the footer */}
      <div className="footer-center">
        <div>
          <p>
            <span>
              {/* Location icon */}
              <FontAwesomeIcon color="white" icon={faLocationDot} /> 444 S.
              Cedros Ave
            </span>{" "}
            Solana Beach, California
          </p>
        </div>
        <div>
          {/* Phone icon */}
          <FontAwesomeIcon color="white" icon={faPhone} /> <p>+1.555.555.5555</p>
        </div>
        <div>
          {/* Envelope icon */}
          <FontAwesomeIcon color="white" icon={faEnvelope} />{" "}
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      {/* Right section of the footer */}
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Dedicated to enhancing pet well-being and fostering lasting bonds. We
          provide top-notch veterinary services and pet essentials. Your pet's
          health and happiness are our priorities.
        </p>
        <div className="footer-icons">
          {/* Social media icons with links */}
          <a href="/panel/home">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="/panel/home">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="/panel/home">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="/panel/home">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
