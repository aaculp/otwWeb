import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home"
import Food from "./components/Food"
import Restaurants from "./components/Restaurants"
import Bar from "./components/Bar"
import Parking from "./components/Parking"
import ScrollFeed from "./components/ScrollFeed"

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Home</div>,
    main: (props) => <Home />
  },
  {
    path: "/food",
    sidebar: () => <div>Food</div>,
    main: props => <Food />
  },
  {
    path: "/restaurants",
    sidebar: () => <div>Restaurants</div>,
    main: props => <Restaurants />
  },
  {
    path: "/bars",
    sidebar: () => <div>Bar</div>,
    main: props => <Bar />
  },
  {
    path: "/parking",
    sidebar: () => <div>Parking</div>,
    main: props => <Parking />
  }
];

export default function SidebarExample() {
  return (
    <Router>
      <div className="AppContainer">
        <div className="leftBar">
          <ul className="leftBarLinks">
            <li className="navLink">
              <Link to="/food">Food</Link>
            </li>
            <li className="navLink">
              <Link to="/restaurants">Restaurants</Link>
            </li>
            <li className="navLink">
              <Link to="/bars">Bars</Link>
            </li>
            <li className="navLink">
              <Link to="/parking">Parking</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route key={index} path={route.path} exact={route.exact} />
            ))}
          </Switch>
        </div>

        <div className="mapBackground" style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>

        <ScrollFeed />
      </div>
    </Router>
  );
}
