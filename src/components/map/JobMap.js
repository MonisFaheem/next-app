"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import LeafletMap (no SSR)
const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
});

export default function JobMap({ latitude, longitude, location }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return placeholder to avoid hydration mismatch
    return (
      <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-lg">
        <span className="text-gray-500 text-sm">Loading map...</span>
      </div>
    );
  }

  return (
    <LeafletMap
      latitude={latitude}
      longitude={longitude}
      location={location}
    />
  );
}
