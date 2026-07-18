import React from "react";
import { Navigation } from "lucide-react";

const FindUsOnMap = () => {
  return (
    <section
      className="
        bg-white
        rounded-[20px]
        border
        border-gray-200
        shadow-[0_8px_30px_rgba(0,0,0,.06)]
        overflow-hidden
      "
    >
      {/* Header */}

      <div className="px-6 pt-6">
        <h2 className="text-[30px] font-bold text-gray-900">
          Find Us on Map
        </h2>

        <div className="mt-3 h-0.75 w-12 rounded-full bg-green-700"></div>

        <p className="mt-4 text-sm leading-6 text-gray-500">
          Visit our office for consultations, drone demonstrations and
          agricultural solutions.
        </p>
      </div>

      {/* Google Map */}

      <div className="px-6 pt-6">
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <iframe
            title="Rawal Drones Location"
            src="https://www.google.com/maps?q=Kurukshetra,Haryana&output=embed"
            className="h-65 w-full"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Footer */}

      <div className="p-6">
        <a
          href="https://maps.google.com/?q=Kurukshetra,Haryana"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#2E6B1F]
            py-3.5
            text-[15px]
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-[#245517]
          "
        >
          <Navigation size={18} />

          Get Directions
        </a>
      </div>
    </section>
  );
};

export default FindUsOnMap;