import React, { Component, PureComponent } from "react";
import ReactMapGL, { GeolocateControl, Marker } from "react-map-gl";
import PinDrop from "../assets/pindrop.png";

let MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWFyb25jdWxwIiwiYSI6ImNqbmRheXl1MzBjZ2Eza280eGJkNjU2ZGwifQ.roPV61S5Vnt7Eu2oKRp7ZQ";

const geolocateStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  margin: 10,
  zIndex: 11
};

// PureComponent ensures that the markers are only rerendered when data changes
class Markers extends PureComponent {
  state = {
    venueDrops: []
  };
  componentDidUpdate(prevProps) {
    let venuePing = this.props.venuePing;
    if (venuePing !== prevProps.venues) {
      this.setState({
        venueDrops: this.props.venuePing
      });
    }
  }

  render() {
    const { venueDrops } = this.state;
    return venueDrops.map(ping => (
      <Marker
        key={ping.id}
        longitude={ping.location.lng}
        latitude={ping.location.lat}
      >
        <img src={PinDrop} style={{ width: "50px" }} />
      </Marker>
    ));
  }
}

class Mapbox extends Component {
  state = {
    viewport: {
      width: "50%",
      height: "100%",
      latitude: 40.74,
      longitude: -73.991,
      zoom: 13
    },
    venues: []
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
      err => console.log("Error", err)
    );
    window.navigator.geolocation.watchPosition(
      position =>
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
      err => console.log("Error", err)
    );
  }

  // controls zoom level on location press
  _onViewportChange = viewport => {
    viewport.zoom = 12;
    this.setState({ viewport });
  };

  // updates the list of venues for map pins
  componentDidUpdate(prevProps) {
    let propsVenues = this.props.venues;
    if (propsVenues !== prevProps.venues) {
      this.setState({ venues: this.props.venues, width: window.innerWidth / 2 });
    }
  }

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        // mapStyle="mapbox://styles/mapbox/streets-v10"
        onViewportChange={viewport => this.setState({ viewport })}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{
            enableHighAccuracy: true,
            timeout: 200,
            maximumAge: 1000
          }}
          onViewportChange={this._onViewportChange}
          trackUserLocation={true}
        />
        <Markers venuePing={this.state.venues} />
      </ReactMapGL>
    );
  }
}
export default Mapbox;
