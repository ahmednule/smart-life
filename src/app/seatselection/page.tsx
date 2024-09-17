"use client";

const SeatSelectionPage = () => {
  // Sample data for seats
  const seats = Array(40).fill(false); // 40 seats, all available by default

  const handleSeatClick = (index) => {
    // Handle seat selection logic here
    console.log(`Seat ${index + 1} clicked`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Seat Selection</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Seat Selection Section */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Choose Your Seat</h2>
            <div className="grid grid-cols-5 gap-4">
              {seats.map((seat, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 border rounded-lg flex items-center justify-center cursor-pointer 
                    ${seat ? "bg-green-500" : "bg-gray-200"}`}
                  onClick={() => handleSeatClick(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <p className="text-gray-500 mt-4 text-sm">
              Click on a seat to select. Green indicates an available seat.
            </p>
          </div>

          {/* Booking Form Section */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Book Your Trip</h2>
            <form>
              {/* Pickup Point */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Pickup Point
                </label>
                <select
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  required
                >
                  <option value="">Select Pickup Point</option>
                  <option value="station1">Station 1</option>
                  <option value="station2">Station 2</option>
                  <option value="station3">Station 3</option>
                </select>
              </div>

              {/* Drop-off Point */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Drop-off Point
                </label>
                <select
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                  required
                >
                  <option value="">Select Drop-off Point</option>
                  <option value="destination1">Destination 1</option>
                  <option value="destination2">Destination 2</option>
                  <option value="destination3">Destination 3</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelectionPage;
