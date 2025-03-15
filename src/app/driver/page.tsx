"use client";

import { useEffect, useState } from "react";

// Mocked API data for booked passengers
const mockBookedPassengers = [
  {
    id: 1,
    user: "John Doe",
    pickupPoint: "Station A",
    dropOffPoint: "Station B",
    status: "Paid",
    rideStatus: "Confirmed",
    seatNumber: "A1",
  },
  {
    id: 2,
    user: "Jane",
    pickupPoint: "Station C",
    dropOffPoint: "Station D",
    status: "Unpaid",
    rideStatus: "Pending",
    seatNumber: "B2",
  },
  {
    id: 3,
    user: "Sam Wilson",
    pickupPoint: "Station E",
    dropOffPoint: "Station F",
    status: "Paid",
    rideStatus: "Cancelled",
    seatNumber: "C3",
  },
];

const mockLocation = {
  busLocation: "40.712776, -74.005974", // Mock GPS coordinates (e.g., New York City)
  routeProgress: "50%", // Progress along the route
};

const DriverPage = () => {
  const [bookedPassengers, setBookedPassengers] = useState([]);
  const [busLocation, setBusLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulate fetching booked passengers
  useEffect(() => {
    const fetchBookedPassengers = async () => {
      try {
        // Replace with actual API call to fetch booked passengers
        // const response = await fetch('/api/booked-passengers');
        // const data = await response.json();
        setBookedPassengers(mockBookedPassengers);
      } catch (error) {
        setError("Failed to fetch booked passengers.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookedPassengers();
  }, []);

  // Simulate fetching bus location (from a GPS API like Google Maps)
  useEffect(() => {
    const fetchBusLocation = async () => {
      try {
        // Replace with actual API call to fetch bus location
        // const response = await fetch('/api/bus-location');
        // const data = await response.json();
        setBusLocation(mockLocation);
      } catch (error) {
        setError("Failed to fetch bus location.");
      }
    };

    fetchBusLocation();
  }, []);

  // Handle actions like "Start Ride" or "Mark as Paid"
  const handleAction = (action, passengerId) => {
    console.log(`${action} for passenger ID ${passengerId}`);
    // Here, you would normally update passenger status via API
  };

  return (
    <div className="p-6" style={{ paddingTop: "100px" }}>
      <h1 className="text-3xl font-bold mb-4">Driver Dashboard</h1>

      {/* Section: Bus Location */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Bus Location</h2>
        {busLocation ? (
          <div>
            <p>Current Location: {busLocation.busLocation}</p>
            <p>Route Progress: {busLocation.routeProgress}</p>
          </div>
        ) : (
          <p>Loading bus location...</p>
        )}
      </div>

      {/* Section: Booked Passengers */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Booked Passengers</h2>
        {isLoading ? (
          <p>Loading booked passengers...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : bookedPassengers.length > 0 ? (
          <table className="min-w-full border-collapse border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Passenger</th>
                <th className="border px-4 py-2">Pickup</th>
                <th className="border px-4 py-2">Drop-off</th>
                <th className="border px-4 py-2">Seat Number</th>
                <th className="border px-4 py-2">Payment Status</th>
                <th className="border px-4 py-2">Ride Status</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookedPassengers.map((passenger) => (
                <tr key={passenger.id}>
                  <td className="border px-4 py-2">{passenger.user}</td>
                  <td className="border px-4 py-2">{passenger.pickupPoint}</td>
                  <td className="border px-4 py-2">{passenger.dropOffPoint}</td>
                  <td className="border px-4 py-2">{passenger.seatNumber}</td>
                  <td className="border px-4 py-2">{passenger.status}</td>
                  <td className="border px-4 py-2">{passenger.rideStatus}</td>
                  <td className="border px-4 py-2">
                    {/* Example Actions */}
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                      onClick={() => handleAction("Start Ride", passenger.id)}
                    >
                      Start Ride
                    </button>
                    {passenger.status === "Unpaid" && (
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                        onClick={() => handleAction("Mark as Paid", passenger.id)}
                      >
                        Mark as Paid
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No passengers booked yet.</p>
        )}
      </div>

      {/* Section: Driver Actions */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Driver Actions</h2>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => console.log("Report Incident")}
        >
          Report Incident
        </button>
      </div>
    </div>
  );
};

export default DriverPage;
