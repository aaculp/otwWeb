import React, { Component } from "react";
import Form from "./Form";

export default class TrendingDetails extends Component {
  componentDidMount() {
      console.log({...this.props})
  }

  render() {
    let trending = this.props.trendingVenues.map(tVenue => (
        <div className="venues">
        <span className="venue-name">{tVenue.name}</span>
        <div className="venue-info">
          <p className="venue-info">Address: {tVenue.location.address}, {tVenue.location.city}, {tVenue.location.state}</p>
          <p className="venue-checkin">Venue Summary: {tVenue.hereNow.summary}</p>
          <p className="venue-checkin">Users Checked-in: {tVenue.hereNow.count}</p>
        </div>
      </div>
    ));

    return (
      <div className="feedContainer">
        <div className="searchContainer">
          <h2>{this.props.name}</h2>
          <Form
            handleInputChange={this.props.handleInputChange}
            onTrendingSubmit={this.props.onTrendingSubmit}
            buttonInput={this.props.buttonInput}
            name={this.props.name}
          />
        </div>

        <div className="venueContainer">{trending}</div>
      </div>
    );
  }
}
