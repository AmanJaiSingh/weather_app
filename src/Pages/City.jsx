import React, { useEffect, useState } from "react";
import { GeoLoacation, Cordi } from "./GeoLoacation";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

function Map(props) {
  const location = GeoLoacation();

  return (
    <div>
      {location.loaded ? (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{
            lat: location.coordinates.lat,
            lng: location.coordinates.lng,
          }}
        >
          <Marker
            position={{
              lat: location.coordinates.lat,
              lng: location.coordinates.lng,
            }}
          />
        </GoogleMap>
      ) : (
        "Location data not available"
      )}
    </div>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function City() {
  return (
    <div className="h-96 w-96 m-10 rounded-xl">
      {/* {location.loaded
        ? JSON.stringify(location.coordinates)
        : "Location data not available"} */}
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
