import React, { Component } from "react";
import { Card } from "reactstrap";

import BoxOrdersHistory from "../BoxOrdersHistory";
import ProfileInfo from "./elements/ProfileInfo";

import "./BoxProfile.css";

class BoxProfile extends Component {
  render() {
    return (
      <div className="box-profile">
        <Card className="box-profile__card--profile-info">
          <ProfileInfo />
        </Card>
        <Card className="box-profile__card--orders-history">
          <BoxOrdersHistory />
        </Card>
      </div>
    );
  }
}

export default BoxProfile;
