"use client"; 

import { useEffect, useState } from "react";

// Mocked API data
const mockBookings = [
  {
    id: 1,
    user: "John Doe",
    pickupPoint: "Station A",
    dropOffPoint: "Station B",
    status: "Paid",
    rideStatus: "Confirmed",
  },
  {
    id: 2,
    user: "Jane Smith",
    pickupPoint: "Station C",
    dropOffPoint: "Station D",
    status: "Unpaid",
    rideStatus: "Pending",
  },
  {
    id: 3,
    user: "Sam Wilson",
    pickupPoint: "Station E",
    dropOffPoint: "Station F",
    status: "Paid",
    rideStatus: "Cancelled",
  },
];

const mockLocation = {
  busLocation: "40.712776, -74.005974", // Mock GPS coordinates (e.g., New York City)
  routeProgress: "50%", // Progress along the route
};

const DriverPage = () => {
  const [bookings, setBookings] = useState([]);
  const [busLocation, setBusLocation] = useState(null);

  // Simulate fetching bookings
  useEffect(() => {
    // Here, you would normally call an API like:
    // fetch('/api/bookings')
    setBookings(mockBookings);
  }, []);

  // Simulate fetching bus location (from a GPS API like Google Maps)
  useEffect(() => {
    // You could replace this with a real API call:
    // fetch('/api/bus-location')
    setBusLocation(mockLocation);
  }, []);

  // Handle actions like "Start Ride" or "Mark as Paid"
  const handleAction = (action, bookingId) => {
    console.log(`${action} for booking ID ${bookingId}`);
    // Here, you would normally update booking status via API
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

      {/* Section: Bookings */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Booked Passengers</h2>
        {bookings.length > 0 ? (
          <table className="min-w-full border-collapse border">
            <thead>
              <tr>
                <th className="border px-4 py-2">User</th>
                <th className="border px-4 py-2">Pickup</th>
                <th className="border px-4 py-2">Drop-off</th>
                <th className="border px-4 py-2">Payment Status</th>
                <th className="border px-4 py-2">Ride Status</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="border px-4 py-2">{booking.user}</td>
                  <td className="border px-4 py-2">{booking.pickupPoint}</td>
                  <td className="border px-4 py-2">{booking.dropOffPoint}</td>
                  <td className="border px-4 py-2">{booking.status}</td>
                  <td className="border px-4 py-2">{booking.rideStatus}</td>
                  <td className="border px-4 py-2">
                    {/* Example Actions */}
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                      onClick={() => handleAction("Start Ride", booking.id)}
                    >
                      Start Ride
                    </button>
                    {booking.status === "Unpaid" && (
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                        onClick={() => handleAction("Mark as Paid", booking.id)}
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
          <p>No bookings available.</p>
        )}
      </div>

      {/* Section: Driver Actions */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Driver Actions</h2>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => console.log("Report Incident")}>
          Report Incident
        </button>
        {/* Add more driver-specific actions if necessary */}
      </div>
    </div>
  );
};

export default DriverPage;

