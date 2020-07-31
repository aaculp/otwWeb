import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className='ovalNavBackground'>
        <ul className="navLink">
          <li><Link className="leftNavLink" to="/food" activeStyle={{borderLeft: "yellow 5px solid"}}>Food</Link></li>
          <li><Link className="leftNavLink" to="/restaurants">Restaurants</Link></li>
          <li><Link className="leftNavLink" to="/bars">Bars</Link></li>
          <li><Link className="leftNavLink" to="/parking">Parking</Link></li>
        </ul>
      </div>
    );
  }
}
