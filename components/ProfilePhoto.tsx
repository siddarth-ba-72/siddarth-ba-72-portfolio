"use client";

// Profile photo with dragging and the right-click menu turned off (kept from the previous design).
export default function ProfilePhoto({ src, className = "" }: { src: string; className?: string }) {
  return (
    <img
      src={src}
      alt="Siddarth Ambannavar"
      width={460}
      height={460}
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
      className={`select-none ${className}`}
    />
  );
}
