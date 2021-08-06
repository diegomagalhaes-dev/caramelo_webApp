import React, { useState, useEffect } from "react";
import MarkMap from "../../Images/markMap.svg";
import bone from "../../Images/bone.svg";

import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import DogPaws from "../../Images/details1.svg";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import Leaflet from "leaflet";
import ArrowLeft from "../../Images/arrow-left.svg";

import { StyCollectPoints } from "./StyCollectPoints";

import "leaflet/dist/leaflet.css";
import useGeolocalization from "../../Utils/useLocalization";
import { api } from "../../services/api";

const mapIcon = Leaflet.icon({
  iconUrl: MarkMap,

  iconSize: [60, 64],
  iconAnchor: [24, 54],
  popupAnchor: [180, 10],
});

interface FeedersMap {
  id: number;
  latitude: number;
  longitude: number;
  image: {
    url: string;
  };
}

const CollectPoints = () => {
  const location = useGeolocalization();
  const [feeders, setFeeders] = useState<FeedersMap[]>([]);

  useEffect(() => {
    api.get("/comedouros").then((response) => {
      setFeeders(response.data);
    });
  }, []);

  return (
    <>
      {location.loaded && (
        <StyCollectPoints>
          <aside>
            <header>
              <Link to="/">
                <img src={ArrowLeft} alt="Voltar" />
              </Link>
            </header>
            <section className="collect-point-content">
              <img src={bone} alt="Ponto com comedouro" />
              <h2>Comedouros mais próximos a você.</h2>
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
            {feeders.map((feeder) => {
              return (
                <Marker
                  position={[feeder.latitude, feeder.longitude]}
                  icon={mapIcon}
                  key={feeder.id}
                >
                  <Popup minWidth={260} className="map-popup">
                    <img src={feeder.image.url} alt="Comedouro" />
                    <a
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href={`https://www.google.com/maps/dir/?api=1&destination=${feeder.latitude},${feeder.longitude}`}
                    >
                      <p>Ver rota no Google Maps</p>
                    </a>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
          <Link to="/feeder/create" className="create-New-Point">
            <FiPlus color="#fff" size={32} />
          </Link>
        </StyCollectPoints>
      )}
    </>
  );
};

export default CollectPoints;
