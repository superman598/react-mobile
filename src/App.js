import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routeArr from "./config/routes";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>loading....</div>}>
        <Router>
          <div>
            {routeArr.map((item) => {
              return (
                <Route
                  path={item.path}
                  component={item.component}
                  key={item.path}
                  exact={item.exact}
                />
              );
            })}
          </div>
        </Router>
      </Suspense>
    );
  }
}
