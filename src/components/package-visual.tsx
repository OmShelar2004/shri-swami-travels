import Image from "next/image";
import { MountainIcon, TempleIcon, CompassIcon, UsersIcon } from "@/components/icons";

interface PackageVisualProps {
  image?: string;
  imageAlt?: string;
  label: string;
  category?: string;
  className?: string;
}

export function PackageVisual({ image, imageAlt, label, category, className = "h-44" }: PackageVisualProps) {
  if (image) {
    return (
      <div className={`relative overflow-hidden bg-blue-950 ${className}`}>
        <Image
          src={image}
          alt={imageAlt ?? label}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-full bg-blue-950/80 px-2.5 py-1 text-[11px] font-bold tracking-wider text-amber-300 uppercase backdrop-blur-sm border border-amber-400/30">
          {label}
        </span>
      </div>
    );
  }

  const renderCategoryIcon = () => {
    switch (category) {
      case "Pilgrimage":
        return <TempleIcon className="h-8 w-8 text-amber-300/80" />;
      case "Hill Stations":
        return <MountainIcon className="h-8 w-8 text-amber-300/80" />;
      case "Daily Tours":
        return <CompassIcon className="h-8 w-8 text-amber-300/80" />;
      default:
        return <UsersIcon className="h-8 w-8 text-amber-300/80" />;
    }
  };

  return (
    <div
      aria-hidden="true"
      className={`relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-950 via-[#102a58] to-blue-900 p-5 ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold tracking-wider text-amber-300 uppercase backdrop-blur-sm border border-amber-400/20">
          {label}
        </span>
        {renderCategoryIcon()}
      </div>
      <div className="border-t border-white/10 pt-2">
        <span className="text-[11px] font-semibold tracking-wider text-white/70 uppercase">
          Shri Swami Travels
        </span>
      </div>
    </div>
  );
}
