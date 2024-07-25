import { ArrowLeftToLine } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      <div className="flex items-center mb-6">
        <ArrowLeftToLine className="h-6 w-6 text-blue-500" />
        <Link
          to="/user-dashboard"
          className="text-blue-500 ml-2 hover:underline"
        >
          Back to Dashboard
        </Link>
      </div>
      <div className="bg-white p-10 rounded-lg shadow-2xl text-center">
        <svg
          className="h-16 w-16 text-green-500 mx-auto mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2l4 -4"
          />
        </svg>
        <h1 className="text-3xl font-extrabold text-green-600 mb-2">
          Payment Confirmed
        </h1>
        <p className="text-gray-700">
          Your transaction has been completed successfully.
        </p>
        <p className="text-gray-700 mt-2">Thank you for your payment!</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
