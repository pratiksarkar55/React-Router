import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSummary() {
  const navigate = useNavigate();
  return (
    <>
      <div>Order is confirmed</div>
      {/* .. means nearest parent. -1 means previous route in stack */}
      <button
        onClick={() => {
          //navigate(-1);
          navigate(-1);
        }}
      >
        Go back
      </button>
    </>
  );
}
