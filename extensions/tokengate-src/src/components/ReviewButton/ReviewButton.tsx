import React from "react";

export const ReviewButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="shopify-payment-button__button shopify-payment-button__button--unbranded"
    style={{ width: "auto" }}
  >
    Review
  </button>
);
