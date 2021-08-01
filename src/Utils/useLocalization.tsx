import React, { useState, useEffect } from "react";

interface keyable {
  [key: string]: any;
}

const useGeolocalization = () => {
  const [location, setLocation] = useState<keyable>({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });

  const onSuccess = (location: {
    coords: { latitude: any; longitude: any };
  }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Não foi possível acessar sua localização!",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeolocalization;
