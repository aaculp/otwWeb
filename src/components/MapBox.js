import React, { Component } from "react";
import ReactMapGL from "react-map-gl";

let MAPBOX_TOKEN =
  "pk.eyJ1IjoiYWFyb25jdWxwIiwiYSI6ImNqbmRheXl1MzBjZ2Eza280eGJkNjU2ZGwifQ.roPV61S5Vnt7Eu2oKRp7ZQ";

class Mapbox extends Component {
  state = {
    viewport: {
      width: "50vw",
      height: "100vh",
      latitude: 40.74,
      longitude: -73.991,
      zoom: 14
    }
  };

  render() {
    return (
      <div className="venue-map">
        <ReactMapGL
          {...this.state.viewport}
          mapStyle="mapbox://styles/mapbox/streets-v10"
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      </div>
    );
  }
}
export default Mapbox;
