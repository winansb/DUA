import React, { Component } from "react";
import {
  GoogleMap,
  DirectionsRenderer,
  LoadScript,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const start = { lat: 29.650403572190747, lng: -82.32777847159345 };
const walgreens = { lat: 29.6523949205675, lng: -82.31037812040371 };
const se2ndAve = { lat: 29.65026820968115, lng: -82.32071654536153 };
const se9thSt = { lat: 29.650261462931873, lng: -82.31337358849125 };
const se12thSt = { lat: 29.650267583965768, lng: -82.31010087551493 };
const waffleHouse = { lat: 29.651624298156644, lng: -82.3141755799864 };
const home = { lat: 29.65058506018099, lng: -82.32743350189087 };

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;

class InteractiveMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directions: null,
    };
  }

  componentDidMount() {
    if (this.props.isScriptLoaded && this.props.isScriptLoadSucceed) {
      this.getDirections();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.isScriptLoaded !== prevProps.isScriptLoaded ||
      this.props.isScriptLoadSucceed !== prevProps.isScriptLoadSucceed
    ) {
      if (this.props.isScriptLoaded && this.props.isScriptLoadSucceed) {
        this.getDirections();
      }
    }

    if (this.props.destination !== prevProps.destination) {
      this.getDirections();
    }
  }

  getDirections() {
    const directionsService = new window.google.maps.DirectionsService();

    const request = {
      origin: start,
      destination:
        this.props.destination === "walgreens"
          ? walgreens
          : this.props.destination === "waffleHouse"
          ? waffleHouse
          : home,
      travelMode: window.google.maps.TravelMode.DRIVING,
      waypoints: this.setWaypoints(this.props.initialState),
      optimizeWaypoints: true,
    };

    directionsService.route(request, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        this.setState({ directions: result });
      } else {
        console.error(`Error fetching directions: ${status}`);
      }
    });
  }

  setWaypoints(initialState) {
    if (initialState) {
      return [
        {
          location: se12thSt,
          stopover: true,
        },
      ];
    } else {
      return [
        {
          location: se2ndAve,
          stopover: true,
        },
        {
          location: se9thSt,
          stopover: true,
        },
      ];
    }
  }

  render() {
    return (
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={15} center={start}>
        {this.state.directions && (
          <DirectionsRenderer directions={this.state.directions} />
        )}
      </GoogleMap>
    );
  }
}

export default InteractiveMap;
