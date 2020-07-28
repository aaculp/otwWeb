import React, { Component } from "react";

import Form from "./Form";
import VenueDetails from "./VenueDetails";

export default class Feed extends Component {

//   componentDidMount() {
//     this.props.onPageLoad();
//   }

  render() {
    let allVenues = this.props.venues.map(venue => (
      <VenueDetails
        key={venue.id}
        venue={venue}
        onClick={id => this.handleChange(id)}
      />
    ));
    return (
      <div className="feedContainer">
        <div className="searchContainer">
          <h2>{this.props.name}</h2>
          <Form
            handleInputChange={this.props.handleInputChange}
            onFormSubmit={this.props.onFormSubmit}
            buttonInput={this.props.buttonInput}
            name={this.props.name}
          />
        </div>

        <div className="venueContainer">{allVenues}</div>
      </div>
    );
  }
}
