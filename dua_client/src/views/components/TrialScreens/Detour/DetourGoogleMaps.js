const start = { lat: 29.650403572190747, lng: -82.32777847159345 };
const walgreens = { lat: 29.6523949205675, lng: -82.31037812040371 };
const se2ndAve = { lat: 29.65026820968115, lng: -82.32071654536153 };
const se9thSt = { lat: 29.650261462931873, lng: -82.31337358849125 };
const se12thSt = { lat: 29.650267583965768, lng: -82.31010087551493 };
const waffleHouse = { lat: 29.651624298156644, lng: -82.3141755799864 };
const home = { lat: 29.65058506018099, lng: -82.32743350189087 };

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const handleApiLoaded = (map) => {
  const directionsService = new window.google.maps.DirectionsService();

  const request = {
    origin: start,
    destination:
      destination === "walgreens"
        ? walgreens
        : destination === "waffleHouse"
        ? waffleHouse
        : home,
    travelMode: window.google.maps.TravelMode.DRIVING,
    waypoints: setWaypoints(initialState),
    optimizeWaypoints: true,
  };

  directionsService.route(request, (result, status) => {
    if (status === window.google.maps.DirectionsStatus.OK) {
      const directions = result;
      const renderer = new window.google.maps.DirectionsRenderer();
      renderer.setDirections(directions);
      renderer.setMap(map);
    } else {
      console.error(`Error fetching directions: ${status}`);
    }
  });
};

const setWaypoints = (initialState) => {
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
};
