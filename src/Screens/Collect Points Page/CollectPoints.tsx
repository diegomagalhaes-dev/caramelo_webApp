import React, { useState, useEffect } from "react";
import MarkMap from "../../Images/markMap.svg";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import DogPaws from "../../Images/details1.svg";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import Leaflet from "leaflet";

import { StyCollectPoints } from "./StyCollectPoints";

import "leaflet/dist/leaflet.css";
import useGeolocalization from "../../Utils/useLocalization";

const mapIcon = Leaflet.icon({
  iconUrl: MarkMap,

  iconSize: [60, 64],
  iconAnchor: [24, 54],
  popupAnchor: [120, 10],
});

const CollectPoints = () => {
  const location = useGeolocalization();

  return (
    <>
      {location.loaded && (
        <StyCollectPoints>
          <aside>
            <header>
              <Link to="/">
                <FiArrowLeft size={24} color="#fff" />
                <span>Voltar para a home</span>
              </Link>
            </header>
            <section className="collect-point-content">
              <img src={MarkMap} alt="Ponto com comedouro" />
              <h2>Encontre os comedouros mais próximos a você.</h2>
              <p>Ative sua localização!</p>
              <img src={DogPaws} alt="Patinhas de cachorro" />
            </section>
          </aside>
          <MapContainer
            center={[location.coordinates.lat, location.coordinates.lng]}
            zoom={15}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />
            <Marker
              position={[location.coordinates.lat, location.coordinates.lng]}
              icon={mapIcon}
            >
              <Popup
                closeButton={false}
                minWidth={200}
                maxWidth={200}
                className="map-popup"
              >
                Comedouro um
                <Link to="/">
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          </MapContainer>
          <Link to="/" className="create-New-Point">
            <FiPlus color="#fff" size={32} />
          </Link>
        </StyCollectPoints>
      )}
    </>
  );
};

export default CollectPoints;
