import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Students from "./Students";
import AddStudent from "./AddStudent";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Students} />
          <Route exact path="/addStudent" component={AddStudent} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
