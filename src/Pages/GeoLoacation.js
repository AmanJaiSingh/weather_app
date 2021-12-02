import { useEffect, useState } from "react";
import React from "react";

export const GeoLoacation = () => {
  const [location, SetLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });
  const onSuccess = (location) => {
    SetLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };
  const onError = (error) => {
    SetLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        massage: "Geolocation not supported",
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  return location;
};
