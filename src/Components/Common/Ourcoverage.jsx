import React from "react";
import haryana from '../../images/Haryana.png'
const districts = [
  "Kurukshetra",
  "Karnal",
  "Panipat",
  "Kaithal",
  "Jind",
  "Sonipat",
  "Rohtak",
];

const OurCoverage = () => {
  return (
    <section className="w-full py-20 bg-white">

      <div className="max-w-362.5 mx-auto px-6">

        <div className="flex flex-col lg:flex-row gap-10 items-center">

          {/* LEFT */}

          <div className="w-full lg:w-1/3">

            <p className="uppercase tracking-widest text-sm text-green-700 font-semibold">
              Our Coverage
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-3 leading-tight">
              Serving Across Haryana
            </h2>

            <p className="text-gray-500 mt-5 leading-7">
              We are expanding across more districts to bring
              advanced drone technology to every farmer.
            </p>

            <button className="mt-8 border border-green-700 text-green-700 px-7 py-3 rounded-xl font-semibold hover:bg-green-700 hover:text-white transition">
              View All Areas
            </button>

          </div>

          {/* RIGHT */}

          <div className="relative w-full lg:w-2/3">

            {/* MAP */}

            <img
              src={haryana}
              alt="Coverage Map"
              className="w-full rounded-3xl object-cover"
            />

            {/* DISTRICT CARD */}

            <div className="absolute top-8 right-8 bg-white rounded-2xl shadow-xl p-6 w-64">

              <ul className="space-y-3">

                {districts.map((district, index) => (

                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >

                    <div className="w-3 h-3 rounded-full bg-green-600"></div>

                    <span>{district}</span>

                  </li>

                ))}

                <li className="text-green-700 font-semibold pt-2">
                  ...and more areas coming soon!
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurCoverage;