import React from 'react';

const Star = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 0L12.2454 6.99401H19.5098L13.4926 11.2929L15.738 18.287L10 14.6182L4.26203 18.287L6.50742 11.2929L0.490218 6.99401H7.75461L10 0Z"
        />
      </svg>
    );
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

export default Star;
