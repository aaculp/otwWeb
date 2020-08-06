import React, { Component } from "react";

import Form from "./Form";
import VenueDetails from "./VenueDetails";

export default class Feed extends Component {
  state = {
    loadedVenues: []
  };

  componentDidMount(props) {
    this.renderVenuesOnLoad();
    console.log(this.props)

  }

  renderVenuesOnLoad = () => {
    let url = `https://api.foursquare.com/v2/venues/search?client_id=ST23AEQHHZXZSAVCBLBO4KZQZVA0KXNULNFPAVHFKMJLZ0OY&client_secret=NN3W2M14CHEJ2BCF21ORXCWWA5VYMXAWQYXTWG5414LU2RX0&v=20180323&ll=${this.props.latitude},${this.props.longitude}&query=${this.props.name}&limit=50`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log("data for loadedvenues", data);
        this.setState({
          loadedVenues: data.response.venues
        });
      })
      .catch(err => {
        alert(
          "Sorry we can find what you're looking for, try a different venue!"
        );
      });
  };

  // componentDidUpdate(props) {
  //   let links = document.querySelectorAll(`.leftNavLink`);
  //   console.log(links)
  // }

  render() {
    let allVenues = this.props.venues.map(venue => (
      <VenueDetails
        key={venue.id}
        venue={venue}
        onClick={id => this.handleChange(id)}
      />
    ));

    // let venuesOnLoad = this.state.loadedVenues.map(loaded => (
    //   <div className="venues" key={loaded.id}>
    //     <span className="venue-name">{loaded.name}</span>
    //     <div className="venue-info">
    //       <p className="venue-info">Address: {loaded.location.address}, {loaded.location.city},{loaded.location.state}</p>
    //       <p className="venue-checkin">Venue Summary: {loaded.hereNow.summary}</p>
    //       <p className="venue-checkin">Users Checked-in: {loaded.hereNow.count}</p>
    //     </div>
    //   </div>
    // ));

    return (
      <div className="feedContainer">
        <div className="searchContainer">
          <h2>{this.props.name.toUpperCase()}</h2>
          <Form
            handleInputChange={this.props.handleInputChange}
            onFormSubmit={this.props.onFormSubmit}
            buttonInput={this.props.buttonInput}
            name={this.props.name}
          />
        </div>

        {/* {this.state.loadedVenues !== null ? (
          <div className="venueContainer">{venuesOnLoad}</div>
        ) : (
          <div className="venueContainer">{allVenues}</div>
        )} */}
        <div className="venueContainer">{allVenues}</div>
      </div>
    );
  }
}
