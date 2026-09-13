import React from "react";

/**
 * Apple and Google wordmark-free logos.
 *
 * The Figma file exports these two as SVG assets, but this environment's
 * egress policy blocks figma.com, so they could not be downloaded. Lucide has
 * no matching brand glyphs (its `Apple` is a fruit), so the official marks are
 * inlined here. Every other icon in the app comes from lucide-react, which is
 * the same library the design's icons were drawn from.
 */

export function AppleLogo({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.365 1.43c0 1.14-.42 2.2-1.24 3.02-.99.99-2.1 1.56-3.3 1.47a3.3 3.3 0 0 1-.03-.4c0-1.09.5-2.26 1.3-3.05.4-.41.92-.75 1.55-1.02.63-.26 1.22-.41 1.7-.43.01.14.02.27.02.41ZM20.9 17.1c-.36.83-.53 1.2-1 1.94-.65 1.03-1.57 2.31-2.71 2.32-1.01.01-1.27-.66-2.65-.65-1.38.01-1.66.67-2.67.66-1.14-.01-2.01-1.17-2.66-2.2-1.83-2.88-2.02-6.25-.89-8.05.8-1.27 2.06-2.02 3.25-2.02 1.21 0 1.97.67 2.97.67.97 0 1.56-.67 2.96-.67 1.06 0 2.18.58 2.98 1.58-2.62 1.44-2.2 5.18.42 6.42Z" />
    </svg>
  );
}

export function GoogleLogo({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46a5.52 5.52 0 0 1-2.4 3.62v3.01h3.88c2.27-2.09 3.58-5.17 3.58-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.94-2.91l-3.88-3.01c-1.08.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.95H1.28v3.11A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.29 14.28a7.2 7.2 0 0 1 0-4.56V6.61H1.28a12 12 0 0 0 0 10.78l4.01-3.11Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.76 0 3.34.61 4.59 1.8l3.44-3.44C17.95 1.19 15.23 0 12 0A12 12 0 0 0 1.28 6.61l4.01 3.11C6.23 6.88 8.88 4.77 12 4.77Z"
      />
    </svg>
  );
}
