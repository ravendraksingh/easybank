import React from "react";
import "./requestinvitebtn.css";

const RequestInviteButton = ({ small }) => {
  let btnclass = "btn btn-primary custom-button";
  btnclass = small ? btnclass + " btn-sm" : btnclass;

  return <button className={btnclass}>Request Invite</button>;
};

export default RequestInviteButton;
