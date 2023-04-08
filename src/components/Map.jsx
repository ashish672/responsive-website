import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Map = () => {
  const defaultProps = {
    center: {
      lat: 28.4595,
      lng: 77.0266,
    },
    zoom: 11,
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${import.meta.env.VITE_API_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={29.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
