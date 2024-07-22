import React from "react";

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 50,
  color = "black",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        style={{
          margin: "auto",
          display: "block",
          shapeRendering: "auto",
        }}
      >
        <circle
          cx="25"
          cy="25"
          fill="none"
          stroke={color}
          strokeWidth="4"
          r="20"
          strokeDasharray="65.97344572538566 23.561151909461888"
          transform="rotate(275.845 25 25)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 25 25;360 25 25"
            keyTimes="0;1"
          />
        </circle>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
