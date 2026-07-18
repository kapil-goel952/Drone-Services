import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const OurOffice = () => {
  return (
    <section
      className="
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-md
      "
    >
      {/* Header */}
      <div className="px-5 pt-5 sm:px-6 sm:pt-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Our Office
        </h2>

        <div className="mt-3 h-1 w-12 rounded-full bg-green-700"></div>
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          {/* Image */}

          <div className="w-full sm:w-44 lg:w-48 xl:w-52 shrink-0">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/office.jpg"
                alt="Office"
                className="
                  aspect-video
                  w-full
                  object-cover
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              />
            </div>
          </div>

          {/* Address */}

          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-green-100
                "
              >
                <MapPin className="h-5 w-5 text-green-700" />
              </div>

              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Rawal Drones
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Kurukshetra,
                  <br />
                  Haryana,
                  <br />
                  India - 136118
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-5 border-t border-gray-200"></div>

        {/* Contact */}

        <div className="space-y-4">
          {/* Phone */}

          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-green-100
              "
            >
              <Phone className="h-5 w-5 text-green-700" />
            </div>

            <span className="text-sm sm:text-base text-gray-600">
              +91 98765 43210
            </span>
          </div>

          {/* Email */}

          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-green-100
              "
            >
              <Mail className="h-5 w-5 text-green-700" />
            </div>

            <span className="break-all text-sm sm:text-base text-gray-600">
              contact@rawaldrones.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;