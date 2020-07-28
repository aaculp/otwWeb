import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Home from "./components/Home";
// import Food from "./components/Food";
// import Restaurants from "./components/Restaurants";
// import Bar from "./components/Bar";
// import Parking from "./components/Parking";
import MapBox from "./components/MapBox";
import Feed from "./components/Feed";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.

// const routes = [
//   {
//     path: "/",
//     exact: true,
//     sidebar: () => <div>Home</div>,
//     main: props => <Home />
//   },
//   {
//     path: "/food",
//     sidebar: () => <div>Food</div>,
//     main: props => <Food />
//   },
//   {
//     path: "/restaurants",
//     sidebar: () => <div>Restaurants</div>,
//     main: props => <Restaurants />
//   },
//   {
//     path: "/bars",
//     sidebar: () => <div>Bar</div>,
//     main: props => <Bar />
//   },
//   {
//     path: "/parking",
//     sidebar: () => <div>Parking</div>,
//     main: props => <Parking />
//   }
// ];

export default class App extends Component {
  state = {
    lat: null,
    long: null,
    venues: [],
    venueId: null,
    buttonInput: null,
    routes: [
      {
        path: "/",
        exact: true,
        sidebar: () => <div>Home</div>,
        main: props => (
          <Feed
            name="Trending"
            venues={this.state.venues}
            venueId={this.state.venueId}
            buttonInput={this.state.buttonInput}
            handleInputChange={this.handleInputChange}
            onFormSubmit={this.onFormSubmit}
            onPageLoad={this.onPageLoad}
          />
        )
      },
      {
        path: "/food",
        sidebar: () => <div>Food</div>,
        main: props => (
          <Feed
            name="Food"
            venues={this.state.venues}
            venueId={this.state.venueId}
            buttonInput={this.state.buttonInput}
            handleInputChange={this.handleInputChange}
            onFormSubmit={this.onFormSubmit}
          />
        )
      },
      {
        path: "/restaurants",
        sidebar: () => <div>Restaurants</div>,
        main: props => (
          <Feed
            name="Restaurants"
            venues={this.state.venues}
            venueId={this.state.venueId}
            buttonInput={this.state.buttonInput}
            handleInputChange={this.handleInputChange}
            onFormSubmit={this.onFormSubmit}
          />
        )
      },
      {
        path: "/bars",
        sidebar: () => <div>Bar</div>,
        main: props => (
          <Feed
            name="Bar"
            venues={this.state.venues}
            venueId={this.state.venueId}
            buttonInput={this.state.buttonInput}
            handleInputChange={this.handleInputChange}
            onFormSubmit={this.onFormSubmit}
          />
        )
      },
      {
        path: "/parking",
        sidebar: () => <div>Parking</div>,
        main: props => (
          <Feed
            name="Parking"
            venues={this.state.venues}
            venueId={this.state.venueId}
            buttonInput={this.state.buttonInput}
            handleInputChange={this.handleInputChange}
            onFormSubmit={this.onFormSubmit}
          />
        )
      }
    ]
  };

  handleInputChange = e => {
    this.setState({
      buttonInput: e.target.value
    });
  };

  onPageLoad = e => {
    this.watchPositionID = navigator.geolocation.watchPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude
      });
      let url = `https://api.foursquare.com/v2/venues/trending?client_id=ST23AEQHHZXZSAVCBLBO4KZQZVA0KXNULNFPAVHFKMJLZ0OY&client_secret=NN3W2M14CHEJ2BCF21ORXCWWA5VYMXAWQYXTWG5414LU2RX0&v=20180323&ll=${this.state.lat},${this.state.long}&radius=100&limit=10`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log("data for trending",data);
          // this.setState({
          //   venues: data.response.venues,
          // });
        });
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    let url = `https://api.foursquare.com/v2/venues/search?client_id=ST23AEQHHZXZSAVCBLBO4KZQZVA0KXNULNFPAVHFKMJLZ0OY&client_secret=NN3W2M14CHEJ2BCF21ORXCWWA5VYMXAWQYXTWG5414LU2RX0&v=20180323&ll=${this.state.lat},${this.state.long}&query=${this.state.buttonInput}&limit=50`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({
          venues: data.response.venues,
          venueId: data.response.venues[0].id
        });
      });
  };

  render() {
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
              {this.state.routes.map((route, index) => (
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

          <MapBox />

          <div className="feedBackground" style={{ flex: 1 }}>
            <Switch>
              {this.state.routes.map((route, index) => (
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
        </div>
      </Router>
    );
  }
}
