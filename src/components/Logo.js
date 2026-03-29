import React from "react";

export default function Logo({ size = 64 }) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Yellow circle (left) */}
      <circle cx="26" cy="32" r="26" fill="#f8be3d" />
      {/* Green circle (right, overlapping) */}
      <circle cx="54" cy="32" r="26" fill="#4dd395" />
      {/* Left arrow (pointing left, white) */}
      <path d="M28 26l-8 6 8 6" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Right arrow (pointing right, white) */}
      <path d="M52 26l8 6-8 6" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
