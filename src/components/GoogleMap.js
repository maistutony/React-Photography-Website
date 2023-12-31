import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
function GoogleMap() {
   const defaultProps = {
     center: {
       lat: 10.99835602,
       lng: 77.01502627,
     },
     zoom: 11,
   };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={-1.255014} lng={36.801741} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;
