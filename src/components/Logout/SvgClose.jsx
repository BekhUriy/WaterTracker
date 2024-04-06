import { useState } from 'react';

export const SvgClose = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <svg
      id="logoutIcon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <path
        d="M6 18L18 6M6 6L18 18"
        stroke={hovered ? '#ef5050' : '#407BFF'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
