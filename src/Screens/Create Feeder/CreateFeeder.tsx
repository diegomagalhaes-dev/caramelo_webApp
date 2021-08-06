import React, { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";

import { PageCreateFeeder } from "./StyCreateFeeder";

import { FiPlus } from "react-icons/fi";

import mapMarkerImg from "../../Images/markMap.svg";
import Sidebar from "../../Components/Sidebar Component/Sidebar";
import useGeolocalization from "../../Utils/useLocalization";

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

const FeederMap = () => {
  const location = useGeolocalization();
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  function MarkerMap() {
    useMapEvents({
      click(event) {
        const { lat, lng } = event.latlng;
        setPosition({
          latitude: lat,
          longitude: lng,
        });
      },
    });

    return position.latitude !== 0 ? (
      <Marker
        position={[position.latitude, position.longitude]}
        interactive={false}
        icon={happyMapIcon}
      />
    ) : null;
  }

  return (
    <PageCreateFeeder>
      <Sidebar />
      <main>
        <form className="create-feeder-form">
          <fieldset>
            <legend>Informações do comedouro</legend>
            <div className="create-feeder-map">
              {location.loaded && (
                <MapContainer
                  center={[location.coordinates.lat, location.coordinates.lng]}
                  style={{ width: "100%", height: 280 }}
                  zoom={15}
                  className="map"
                >
                  <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                  />
                  <MarkerMap />
                </MapContainer>
              )}
              <p>
                No mapa temos sua localização atual! <br /> (caso queira outra,
                basta reposicionar o marcador)
              </p>
            </div>
            <div className="input-block">
              <div className="uploaded-image"></div>
              <label htmlFor="images">Imagem</label>
              <button className="new-image">
                <FiPlus size={24} color="#F8961E" />
              </button>
            </div>
          </fieldset>
          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </PageCreateFeeder>
  );
};

export default FeederMap;
