import React, { Component } from "react";
import ReactMapGL, { GeolocateControl } from "react-map-gl";

let MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWFyb25jdWxwIiwiYSI6ImNqbmRheXl1MzBjZ2Eza280eGJkNjU2ZGwifQ.roPV61S5Vnt7Eu2oKRp7ZQ";

const geolocateStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  margin: 10
};

class Mapbox extends Component {
  state = {
    viewport: {
      width: "50vw",
      height: "100vh",
      latitude: 40.74,
      longitude: -73.991,
      zoom: 12
    }
  };

  componentDidMount() {
    this.watchPositionID = navigator.geolocation.watchPosition(position =>
      this.setState({
        viewport: {
          ...this.state.viewport,
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        }
      })
    )
  }

  _onViewportChange = viewport => this.setState({ viewport });

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
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
          trackUserLocation={true}
        />
      </ReactMapGL>
    );
  }
}
export default Mapbox;
