import React from "react";
import "./footer.css";
import RequestInviteButton from "./RequestInviteButton";

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex flex-column justify-content-between">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/logo.svg"}
            className="logo"
            style={{ color: "white" }}
          />
        </div>
      </div>
      <div className="textbox">
        <p>About Us</p>
        <p>Contact</p>
        <p>Blog</p>
      </div>
      <div className="textbox">
        <p>Careers</p>
        <p>Support</p>
        <p>Privacy Policy</p>
      </div>
      <div className="lastbox">
        <RequestInviteButton />
        <p style={{ color: " hsl(233, 8%, 62%)", marginTop: "8px" }}>
          &#169;Easybank. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
