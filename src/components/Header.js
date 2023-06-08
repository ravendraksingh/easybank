import React from "react";
import "./header.css";
import RequestInviteButton from "./RequestInviteButton";

const Header = () => {
  return (
    <div className="header navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src={process.env.PUBLIC_URL + "/images/logo.svg"}
          alt="easybank"
          height={"24px"}
        />
      </a>
      <div className="navitems d-none d-sm-inline-flex">
        <a className="nav-item" href="#">
          Home
        </a>
        <a className="nav-item" href="#">
          About
        </a>
        <a className="nav-item" href="#">
          Contact
        </a>
        <a className="nav-item" href="#">
          Blog
        </a>
        <a className="nav-item" href="#">
          Careers
        </a>
      </div>
      <div className="d-none d-sm-block">
        <RequestInviteButton small={true} />
      </div>
      <div className="d-block d-sm-none mx-2">
        <img src={process.env.PUBLIC_URL + "/images/icon-hamburger.svg"} />
      </div>
    </div>
  );
};

export default Header;
