import React from 'react';

const ProgressCircle = ({ progress }) => {
  const radius = 18;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
      style={{ display: 'block', margin: 'auto' }}
    >
      <circle
        stroke="#001f3f"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.35s' }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fontSize="12"
        fill="#001f3f"
      >
        {progress}%
      </text>
    </svg>
  );
};

export default ProgressCircle;
