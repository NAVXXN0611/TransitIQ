import React, { useState } from 'react';
import axios from 'axios';

const PassengerSearchComponent = () => {
  const [startStop, setStartStop] = useState('');
  const [endStop, setEndStop] = useState('');
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true); setError(null); setSearched(true);
    try {
      const response = await axios.get('http://localhost:8080/api/search/journeys', {
        params: { startStop, endStop }
      });
      setTrips(response.data);
    } catch (err) {
      console.error("Error fetching journeys:", err);
      setError("Failed to fetch routes. Please ensure the backend server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Plan Your Journey</h2>
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-gray-700 font-medium mb-2">Starting Stop</label>
          <input type="text" placeholder="e.g., Gandhipuram Bus Stand" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" value={startStop} onChange={(e) => setStartStop(e.target.value)} required />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 font-medium mb-2">Destination</label>
          <input type="text" placeholder="e.g., Karunya Nagar" className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" value={endStop} onChange={(e) => setEndStop(e.target.value)} required />
        </div>
        <div className="flex items-end">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors w-full md:w-auto" disabled={loading}>
            {loading ? 'Searching...' : 'Find Buses'}
          </button>
        </div>
      </form>
      {error && <div className="text-red-600 bg-red-50 p-3 rounded-md mb-4">{error}</div>}
      {searched && !loading && trips.length === 0 && !error && (
        <div className="text-gray-600 bg-gray-50 p-4 rounded-md text-center">No direct buses found for this route. Please check your stop names.</div>
      )}
      {trips.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Available Scheduled Trips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trips.map((trip) => (
              <div key={trip.tripId} className="border border-blue-200 bg-blue-50 p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-lg text-blue-900">{trip.departureTime}</span>
                  <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">{trip.bus.busNumber}</span>
                </div>
                <div className="text-sm text-gray-700 mb-1"><strong>Route:</strong> {trip.route.routeName}</div>
                <div className="text-sm text-gray-700"><strong>Bus Status:</strong> {trip.bus.status}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default PassengerSearchComponent;