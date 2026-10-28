import React from 'react';
import LiveMapComponent from './components/LiveMapComponent';
import PassengerSearchComponent from './components/PassengerSearchComponent';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-900 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider">TransitIQ</h1>
          <nav className="space-x-4 font-medium">
            <a href="#passenger" className="hover:text-blue-300 transition-colors">Passenger Portal</a>
            <a href="#admin" className="hover:text-blue-300 transition-colors">Admin Dashboard</a>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto p-4 flex flex-col gap-6">
        <section id="passenger">
          <PassengerSearchComponent />
        </section>
        <section id="tracking" className="bg-white rounded-lg shadow p-2 border border-gray-200 h-[600px]">
          <LiveMapComponent />
        </section>
      </main>
      
      <footer className="bg-gray-800 text-gray-400 text-center p-4 text-sm mt-auto">
        &copy; 2026 TransitIQ - Coimbatore SmartBus Initiative
      </footer>
    </div>
  );
}
export default App;