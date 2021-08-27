import React, { useState, FormEvent } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";
import Dropzone from "../../Components/Dropzone/Dropzone";

import { PageCreateFeeder, Popup } from "./StyCreateFeeder";

import mapMarkerImg from "../../Images/markMap.svg";
import dog from "../../Images/confirmCreateFeeder.svg";
import Sidebar from "../../Components/Sidebar Component/Sidebar";
import useGeolocalization from "../../Utils/useLocalization";
import { useEffect } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

const FeederMap = () => {
  const history = useHistory();

  const [selectedFile, setSelectedFile] = useState<File>();
  const [showPopup, setShowPopup] = useState(false);

  const location = useGeolocalization();
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    if (location.loaded) {
      setPosition({
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      });
    }
  }, [location]);

  function MarkerMap() {
    const map = useMapEvents({
      click(event) {
        const { lat, lng } = event.latlng;
        setPosition({
          latitude: lat,
          longitude: lng,
        });
        map.flyTo(event.latlng, map.getZoom());
      },
    });

    return (
      <Marker
        position={[position.latitude, position.longitude]}
        interactive={false}
        icon={happyMapIcon}
      />
    );
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));
    if (selectedFile) {
      data.append("image", selectedFile);
    }

    await api.post("comedouros", data);

    setShowPopup(true);
  }

  return (
    <>
      {showPopup ? (
        <Popup>
          <article>
            <h1>Feito!</h1>
            <p>
              O cadastro foi enviado para o administrador, <br />
              agora basta aguardar a aprovação =)
            </p>
            <button onClick={() => history.push("/app")}>Ir para o mapa</button>
          </article>
          <img src={dog} alt="cão" />
        </Popup>
      ) : (
        <PageCreateFeeder>
          <Sidebar />

          <main>
            <form onSubmit={handleSubmit} className="create-feeder-form">
              <fieldset>
                <div className="create-feeder-map">
                  {location.loaded && (
                    <MapContainer
                      center={[
                        location.coordinates.lat,
                        location.coordinates.lng,
                      ]}
                      style={{ width: "100%", height: 280 }}
                      zoom={15}
                      className="map"
                    >
                      <MarkerMap />
                      <TileLayer
                        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                      />
                    </MapContainer>
                  )}
                  <p>
                    No mapa temos sua localização atual! <br /> (caso queira
                    outra, basta reposicionar o marcador)
                  </p>
                </div>

                <div className="input-block">
                  <div className="uploaded-image"></div>
                  <label htmlFor="images">Imagem</label>
                  <Dropzone onFileUploaded={setSelectedFile} />
                </div>
              </fieldset>
              <button className="confirm-button" type="submit">
                Confirmar
              </button>
            </form>
          </main>
        </PageCreateFeeder>
      )}
    </>
  );
};

export default FeederMap;
