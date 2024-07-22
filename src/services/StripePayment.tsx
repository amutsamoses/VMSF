import React from "react";
import { Button } from "@mui/material";

const StripePaymentButton: React.FC = () => {
  const handlePayment = () => {
    // Redirect the user to Stripe's payment page
    // You can use the Stripe Checkout or PaymentIntent APIs for this
    window.location.href = "https://checkout.stripe.com/pay/cs_test_1234567890"; // Replace with your actual Stripe Checkout URL
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handlePayment}
      sx={{
        fontFamily: "Kumbh Sans, sans-serif",
        fontWeight: "bold",
        color: "white",
      }}
    >
      Pay with Stripe
    </Button>
  );
};

export default StripePaymentButton;
