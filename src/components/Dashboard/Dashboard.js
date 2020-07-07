import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../Projects/ProjectList";
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboardContainer">
        <div className="left projectsList">
          <ProjectList />
        </div>
        <div className="right notifications">
          <Notifications />
        </div>
      </div>
    );
  }
}

export default Dashboard;
