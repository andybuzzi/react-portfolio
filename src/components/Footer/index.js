import React from "react";
import GitHub from "../../assets/images/icons/github.png";
import LinkedIn from "../../assets/images/icons/linkedin.png";

const Footer = () => {
  return (
    <section className="footer">
      <ul className="row justify-content-center">
        <li>
          <a href="https://github.com/andybuzzi" target="blank">
            <img src={GitHub} className="img-link-social" alt="GitHub Icon" />
          </a>
          <a href="https://www.linkedin.com/in/andybuzzi/" target="blank">
            <img
              src={LinkedIn}
              className="img-link-social"
              alt="LinkedIn Icon"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
