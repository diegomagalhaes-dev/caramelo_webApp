import React, { useState, useEffect } from "react";

import MarkMap from "../../Images/markMap.svg";

import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import DogPaws from "../../Images/details1.svg";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import Leaflet from "leaflet";
import ArrowLeft from "../../Images/arrow-left.svg";

import "leaflet/dist/leaflet.css";
import useGeolocalization from "../../Utils/useLocalization";
import { Container, Feeders, Feeder } from "./StyCollectPoints";

import { useAuth } from "../../context/AuthContext";
import { api } from "../../services/api";

const mapIcon = Leaflet.icon({
  iconUrl: MarkMap,

  iconSize: [60, 64],
  iconAnchor: [24, 54],
  popupAnchor: [180, 10],
});

interface DataReceived {
  id: number;
  latitude: number;
  longitude: number;
  image: {
    url: string;
  };
}

const Dashboard = () => {
  const location = useGeolocalization();
  const [data, setData] = useState<DataReceived[]>([]);
  const { signOut, user } = useAuth();

  useEffect(() => {
    api.get("/dashboard").then((response) => {
      setData(response.data);
    });
  }, []);

  function handleLogout() {
    signOut();
  }
  return (
    <>
      {location.loaded && (
        <Container>
          <aside>
            <a onClick={handleLogout}>
              <FiLogOut color="#f8961e" size={23} />
            </a>
          </aside>
          <h1>Comedouros cadastrados</h1>
          <Feeders>
            {data.map((feeder) => {
              return (
                <Feeder>
                  <MapContainer
                    center={[
                      location.coordinates.lat,
                      location.coordinates.lng,
                    ]}
                    zoom={15}
                    style={{ width: "100%", height: "100%" }}
                    className="map"
                  >
                    <TileLayer
                      url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                    />
                    <Marker
                      position={[feeder.latitude, feeder.longitude]}
                      icon={mapIcon}
                      key={feeder.id}
                    ></Marker>
                    ;
                  </MapContainer>
                  <div className="choose">
                    <button>like </button>
                    <button>unlike</button>
                  </div>
                </Feeder>
              );
            })}
          </Feeders>
        </Container>
      )}
    </>
  );
};

export default Dashboard;
