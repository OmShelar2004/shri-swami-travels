"use client";

import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Image wrapper that enforces a 4:3 aspect ratio and object‑cover.
 * All destination/vehicle cards should use this component to keep
 * a consistent layout.
 */
export function ResponsiveImage({ src, alt, className = "" }: Props) {
  return (
    <div className={`relative overflow-hidden ${className} aspect-w-4 aspect-h-3`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-300 ease-in-out hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}

