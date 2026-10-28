import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LiveMapComponent = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/buses/locations');
        setBuses(response.data);
      } catch (error) {
        console.error("Error fetching V2C telemetry data:", error);
      }
    };
    fetchLocations();
    const interval = setInterval(fetchLocations, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full flex flex-col p-4 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">TransitIQ - Coimbatore Live Tracking</h2>
      <div className="flex-grow rounded-lg shadow-lg overflow-hidden border border-gray-300 h-full">
        <MapContainer center={[11.0168, 76.9558]} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap contributors' />
          {buses.map((bus) => (
            <Marker key={bus.busNumber} position={[bus.latitude, bus.longitude]}>
              <Popup>
                <div className="font-sans">
                  <strong className="text-lg text-blue-600">{bus.busNumber}</strong> <br />
                  <span className={bus.status === 'Active' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                    Status: {bus.status}
                  </span> <br />
                  Capacity: {bus.capacity} seats <br />
                  <em>Predictive Maintenance Monitored</em>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};
export default LiveMapComponent;