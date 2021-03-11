import React from 'react';

const Circle: React.FC = () => {
  return (
    <svg width="40" height="40">
      <circle className="circle" r="16" cx="20" cy="20" style={{
        fill: '#FFFFFF',
        strokeWidth: 4,
        stroke: '#04CF00',
        strokeDasharray: '60 158'
      }} />
    </svg>
  );
};

export default Circle;
