import { MapPin } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="bg-blue-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-indigo-600 text-center mb-6">
          How it works
        </h2>
        <p className="text-center text-gray-500 mb-12">
          A high-performing web-based car rental system for any rent-a-car
          company and website
        </p>
        <div className="flex flex-col lg:flex-row justify-around items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-light-blue-500 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9l-5 5-5-5"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              Choose Location
            </h3>
            <p className="text-gray-500">
              Select the pickup location or delivery address
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-light-blue-500 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              Pick-up Date
            </h3>
            <p className="text-gray-500">Choose a convenient pickup date</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-light-blue-500 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M9 16h6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              Book your car
            </h3>
            <p className="text-gray-500">
              Choose the car you like, the rental period, and book
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
