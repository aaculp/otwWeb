import React, { Component } from "react";
import { Link } from "react-router-dom";

let anchorRef = React.createRef()

export default class Nav extends Component {
  componentDidMount() {
    console.log(this.props.inputRef)
  }
  render() {
    return (
      <div className='ovalNavBackground'>
        <ul className="navLink">
          <li><Link className="leftNavLink" to="/food" ref={this.props.inputRef}>Food</Link></li>
          <li><Link className="leftNavLink" to="/restaurants" innerRef={anchorRef}>Restaurants</Link></li>
          <li><Link className="leftNavLink" to="/bars">Bars</Link></li>
          <li><Link className="leftNavLink" to="/parking">Parking</Link></li>
        </ul>
      </div>
    );
  }
}
