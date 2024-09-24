"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CustomerPage = () => {
  const router = useRouter();
  const [pickupPoint, setPickupPoint] = useState("");
  const [dropOffPoint, setDropOffPoint] = useState("");
  const [availableBuses, setAvailableBuses] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);
  const [error, setError] = useState(null);

  // Simulated API call for available buses based on selected points
  const fetchAvailableBuses = async () => {
    setError(null);
    if (!pickupPoint || !dropOffPoint) {
      setError("Please select both pickup and drop-off points.");
      return;
    }

    // Replace with actual API call to get available buses
    const buses = [
      { id: 1, name: "Bus A", fare: 10, schedule: "10:00 AM" },
      { id: 2, name: "Bus B", fare: 15, schedule: "12:00 PM" },
    ];
    setAvailableBuses(buses);
  };

  const handleBooking = (busId) => {
    setSelectedBus(busId);
    router.push({
      pathname: "/seat-selection",
      query: { pickup: pickupPoint, dropoff: dropOffPoint, busId },
    });
  };

  return (
    <div className="container mx-auto p-4" style={{ paddingTop: "100px" }}>
      <h1 className="text-2xl font-bold">Book Your Bus</h1>

      <div className="mb-4">
        <label className="block mb-2">Pickup Point</label>
        <input
          type="text"
          value={pickupPoint}
          onChange={(e) => setPickupPoint(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter pickup point"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Drop-off Point</label>
        <input
          type="text"
          value={dropOffPoint}
          onChange={(e) => setDropOffPoint(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter drop-off point"
        />
      </div>

      <button
        onClick={fetchAvailableBuses}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Search Buses
      </button>

      {error && <p className="text-red-500">{error}</p>}

      <div className="mt-6">
        {availableBuses.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold">Available Buses</h2>
            <ul>
              {availableBuses.map((bus) => (
                <li key={bus.id} className="flex justify-between items-center p-2 border-b">
                  <span>{bus.name}</span>
                  <span>${bus.fare}</span>
                  <span>{bus.schedule}</span>
                  <button
                    onClick={() => handleBooking(bus.id)}
                    className="bg-green-500 text-white p-1 rounded"
                  >
                    Book Now
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Additional Features */}
      {/* You can implement the following features as separate components or sections */}

      {/* Profile Management */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Profile Management</h2>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
            className="border p-2 w-full"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
            className="border p-2 w-full"
            placeholder="Enter your email"
          />
        </div>
      </div>
      {/* Booking History */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Booking History</h2>
        {/* Display past trips and receipts */}
      </div>

      {/* Feedback and Ratings */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Feedback and Ratings</h2>
        {/* Add a form for user feedback */}
      </div>

      {/* Support Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Support Center</h2>
        {/* Add contact/support information */}
      </div>
    </div>
  );
};

export default CustomerPage;
