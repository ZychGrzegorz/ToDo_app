import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Dashboard from "../Dashboard";
import ProjectDetails from "../Projects/ProjectDetails";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import CreateProject from "../Projects/CreateProject";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
