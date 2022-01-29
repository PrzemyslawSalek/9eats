import React, { Component } from "react";

import AvatarPhoto from "../../../images/avatar.jpeg";

import "./ProfileInfo.css";

class ProfileInfo extends Component {
  render() {
    return (
      <div className="profile-info">
        <img
          className="profile-info__image img-fluid rounded-circle mr-2"
          alt="avatar"
          src={AvatarPhoto}
        />
        <div className="profile-info__name">Przemysław Sałek</div>
      </div>
    );
  }
}

export default ProfileInfo;
