import React from "react";
import MarkMap from "../Images/markMap.svg";
import { FiArrowLeft } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import DogPaws from "../Images/details1.svg";
import "../Styles/Screens_sty/collectPoints.css";
import { MapContainer, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css'

const CollectPoints = () => {
  return (
    <div id="collect-points">
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
        center={[-27.2092052, -49.6401092]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
      <Link to="" className="create-New-Point">
        <FiPlus color="#fff" size={32} />
      </Link>
    </div>
  );
};

export default CollectPoints;
