"use client";

export default function Toast({ message }) {
  return (
    <div
      id="toast"
      style={{
        opacity: message ? 1 : 0,
        transform: message ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(14px)",
      }}
    >
      {message}
    </div>
  );
}

