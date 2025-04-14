import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Corrige ícones do Leaflet no React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const Reports = () => {
  const [position, setPosition] = useState(null);
  const [mapCenter, setMapCenter] = useState(null);

  // Captura clique no mapa e atualiza posição
  function LocationMarker() {
    useMapEvents({
      click(e) {
        const coords = [e.latlng.lat, e.latlng.lng];
        setPosition(coords);
      },
    });

    return position ? <Marker position={position} /> : null;
  }

  // Obtém a localização do usuário ao carregar
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const { latitude, longitude } = pos.coords;
          const coords = [latitude, longitude];
          setMapCenter(coords);
          setPosition(coords);
        },
        () => {
          alert("Não foi possível obter sua localização.");
          setMapCenter([-23.5505, -46.6333]); // fallback: São Paulo
        }
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position) {
      alert("Selecione uma localização no mapa.");
      return;
    }

    alert(`Latitude: ${position[0]}\nLongitude: ${position[1]}`);
  };

  return (
    <div>
      <h2>Clique no mapa para selecionar um local</h2>

      {/* Só renderiza o mapa se tiver localização definida */}
      {mapCenter && (
        <div style={{ height: "400px", width: "100%", marginBottom: "1em" }}>
          <MapContainer center={mapCenter} zoom={15} style={{ borderRadius: "30px", height: "100%", width: "100%" }}>
            <TileLayer
              attribution='&copy; OpenStreetMap'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
          </MapContainer>
        </div>
      )}

      <p>
        Latitude: <strong>{position ? position[0] : "-"}</strong>, Longitude: <strong>{position ? position[1] : "-"}</strong>
      </p>

      <form onSubmit={handleSubmit}>
        <button type="submit">Exibir Coordenadas</button>
      </form>
    </div>
  );
};

export default Reports;
