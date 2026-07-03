import React from "react";

const AreaNotListed = () => {
  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md border border-gray-200">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center p-6 lg:p-8">

          {/* Left */}
          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
              <img
                src=""
                alt="Calendar"
                className="w-8 h-8 object-contain"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Is Your Area Not Listed?
              </h3>

              <p className="text-gray-500 mt-2 text-sm leading-6">
                We are expanding fast! Let us know your location and we'll
                reach you soon.
              </p>
            </div>

          </div>

          {/* Center */}
          <div className="flex flex-col sm:flex-row gap-3">

            <input
              type="text"
              placeholder="Enter Your Village / City"
              className="flex-1 h-12 border border-gray-300 rounded-lg px-4 outline-none focus:ring-2 focus:ring-green-600"
            />

            <button className="h-12 px-8 bg-green-700 hover:bg-green-800 text-white rounded-lg font-semibold transition">
              Notify Me
            </button>

          </div>

          {/* Right */}
          <div className="flex items-center justify-center lg:justify-end gap-5">

            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Prefer to talk?
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Call or WhatsApp us for quick details.
              </p>
            </div>

            <div className="flex gap-3">

              <button className="w-14 h-14 rounded-full bg-green-50 hover:bg-green-100 flex items-center justify-center transition">
                <img
                  src=""
                  alt="Call"
                  className="w-7 h-7"
                />
              </button>

              <button className="w-14 h-14 rounded-full bg-green-50 hover:bg-green-100 flex items-center justify-center transition">
                <img
                  src=""
                  alt="Whatsapp"
                  className="w-7 h-7"
                />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AreaNotListed;