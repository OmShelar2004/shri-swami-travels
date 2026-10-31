import Image from "next/image";

type PackageVisualProps = {
  image?: string;
  imageAlt?: string;
  label: string;
  className?: string;
};

export function PackageVisual({ image, imageAlt, label, className = "h-40" }: PackageVisualProps) {
  if (image) {
    return <div className={`relative overflow-hidden bg-blue-950 ${className}`}><Image src={image} alt={imageAlt ?? label} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" /></div>;
  }

  return <div aria-hidden="true" className={`flex items-end overflow-hidden bg-[radial-gradient(circle_at_75%_15%,rgba(251,191,36,.85),transparent_12rem),linear-gradient(135deg,#102a58,#205f96)] p-5 ${className}`}><span className="text-sm font-bold tracking-[.16em] text-white/90 uppercase">{label}</span></div>;
}
