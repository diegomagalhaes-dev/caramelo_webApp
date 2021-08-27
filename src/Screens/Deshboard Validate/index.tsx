import React, { useState, useEffect, useCallback } from "react";

import MarkMap from "../../Images/markMap.svg";

import { AiOutlinePoweroff } from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoMdPaw } from "react-icons/io";

import { Link } from "react-router-dom";
import DogPaws from "../../Images/details1.svg";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import Leaflet from "leaflet";
import ArrowLeft from "../../Images/arrow-left.svg";

import "leaflet/dist/leaflet.css";
import useGeolocalization from "../../Utils/useLocalization";
import { Container, Feeders, Feeder, Content } from "./StyCollectPoints";

import { useAuth } from "../../context/AuthContext";
import { api } from "../../services/api";
import { array } from "yup/lib/locale";

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
  const { signOut } = useAuth();

  useEffect(() => {
    api.get("/dashboard/pendentes").then((response) => {
      setData(response.data);
    });
  }, []);

  const handleValidateFeeder = useCallback(
    async (id) => {
      const response = await api.patch(`/dashboard/pendentes/${id}`);
      console.log(response);
      const pendsFeeders = data.filter(
        (feeder) => feeder.id !== response.data.id
      );
      setData(() => pendsFeeders);
    },
    [data]
  );

  const handleDeleteFeeder = useCallback(
    async (id) => {
      await api.delete(`/dashboard/${id}`);
      const pendsFeeders = data.filter((feeder) => feeder.id !== id);
      console.log(pendsFeeders);
      setData(() => pendsFeeders);
    },
    [data]
  );
  function handleLogout() {
    signOut();
  }
  return (
    <>
      <Container>
        <aside>
          <img src={MarkMap} style={{ width: "40px" }} alt="marker-aside" />
          <AiOutlinePoweroff
            onClick={handleLogout}
            color="#ffffff"
            size={23}
            className="logout"
          />
        </aside>
        {data.length === 0 ? (
          <h1 className="noFeeders">Nenhum comedouro pendente =)</h1>
        ) : (
          location.loaded && (
            <Content>
              <header>
                <h1>Comedouros pendentes</h1>
                <h2 className="countFeeders">{data.length}</h2>
              </header>
              <Feeders>
                {data.map((feeder) => {
                  return (
                    <Feeder>
                      <MapContainer
                        center={[feeder.latitude, feeder.longitude]}
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
                        <button onClick={() => handleValidateFeeder(feeder.id)}>
                          <BiLike size={24} color="#ffff" /> Aprovar
                        </button>
                        <button onClick={() => handleDeleteFeeder(feeder.id)}>
                          <BiDislike size={24} color="#ffff" /> Rejeitar
                        </button>
                      </div>
                    </Feeder>
                  );
                })}
              </Feeders>
            </Content>
          )
        )}
      </Container>
    </>
  );
};

export default Dashboard;
