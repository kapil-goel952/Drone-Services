import React from "react";

const ReadyToUpgrade = () => {
  return (
    
    <section className="w-full py-20">

      <div className="max-w-362.5 mx-auto px-6">

        <div className="bg-green-900 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left Side */}

          <div className="text-white">

            <h2 className="text-4xl font-bold">
              Ready to Upgrade Your Farming?
            </h2>

            <p className="mt-3 text-green-100 text-lg max-w-2xl">
              Contact Rawal Drones today and experience the power of
              precision agriculture.
            </p>

          </div>

          {/* Right Side */}

          <div className="flex flex-wrap justify-center gap-4">

            {/* Call */}

            <button className="flex items-center gap-3 bg-white text-green-900 px-7 py-4 rounded-xl font-semibold hover:bg-green-100 transition-all duration-300">

              <img
                src="/icons/call.png"
                alt="Call"
                className="w-5 h-5"
              />

              Call Now

            </button>

            {/* WhatsApp */}

            <button className="flex items-center gap-3 bg-white text-green-900 px-7 py-4 rounded-xl font-semibold hover:bg-green-100 transition-all duration-300">

              <img
                src="/icons/whatsapp.png"
                alt="WhatsApp"
                className="w-5 h-5"
              />

              WhatsApp Us

            </button>

            {/* Book Service */}

            <button className="flex items-center gap-3 bg-white text-green-900 px-7 py-4 rounded-xl font-semibold hover:bg-green-100 transition-all duration-300">

              <img
                src="/icons/calendar.png"
                alt="Book"
                className="w-5 h-5"
              />

              Book Service

            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ReadyToUpgrade;