import React from "react";

function VenueDetails(props) {
  //   function favoriteVenue(id) {
  //     props.onClick(id);
  //     console.log(`this is id`, id);
  //   }

  return (
    <div className="venues">
      <span className="venue-name">{props.venue.name}</span>
      <div className="venue-info">
        <p className="venue-info">Address: {props.venue.location.address}, {props.venue.location.city}, {props.venue.location.state}</p>
        <p className="venue-checkin">Venue Summary: {props.venue.hereNow.summary}</p>
        <p className="venue-checkin">Users Checked-in: {props.venue.hereNow.count}</p>
      </div>
    </div>
  );
}

export default VenueDetails;
// src={`${this.state.prefix}${this.state.size}${this.state.suffix}`}

//Removed from above:
// state = {
// venueId: this.props.venuePath.id,
// size: '36x36',
// }

// componentDidMount() {
//   let url = `https://api.foursquare.com/v2/venues/${this.state.venueId}/photos?client_id=ST23AEQHHZXZSAVCBLBO4KZQZVA0KXNULNFPAVHFKMJLZ0OY&client_secret=NN3W2M14CHEJ2BCF21ORXCWWA5VYMXAWQYXTWG5414LU2RX0&v=20180323`
//   fetch(url)
//   .then(res => res.json())
//   .then(res => {
//     this.setState({
//       prefix: res.response.photos.items[0].prefix,
//       suffix: res.response.photos.items[0].suffix
//     })
//     console.log(res)
//     console.log(this.state.prefix)
//     console.log(this.state.size)
//     console.log(this.state.suffix)
//     console.log(`${this.state.prefix}${this.state.size}${this.state.suffix}`)
//   })
// }
