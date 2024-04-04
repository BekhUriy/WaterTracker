import * as React from "react"
export const PlusIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      stroke="#407BFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 1v12m6-6H1"
    />
  </svg>
)

export const PlusIconSmall = (props) => (
  <svg
    width={10}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 1v8m4-4H1"
      stroke="#407BFF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

