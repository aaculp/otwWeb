import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className='ovalNavBackground'>
        <ul className="navLink">
          <li><Link className="navLink" to="/">Home</Link></li>
          <li><Link className="navLink" to="/food">Food</Link></li>
          <li><Link className="navLink" to="/restaurants">Restaurants</Link></li>
          <li><Link className="navLink" to="/bars">Bars</Link></li>
          <li><Link className="navLink" to="/parking">Parking</Link></li>
        </ul>
      </div>
    );
  }
}
