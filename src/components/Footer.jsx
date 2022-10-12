import React from "react";
import Logo from "../assets/logo.png";
import moment from "moment";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        All Rights reserved, &copy; {moment(Date.now()).format("YYYY")}. Developed by <b>SOB-Technologies</b>.
      </span>
    </footer>
  );
};

export default Footer;
