import React from "react";
import background from "../../images/Background.png";

const CoverageMap = () => {
  const features = [
    {
      title: "Wide Coverage",
      desc: "Serving 12+ districts and growing.",
      icon: "",
    },
    {
      title: "Quick Response",
      desc: "Fast deployment and on-time service.",
      icon: "",
    },
    {
      title: "Local Support",
      desc: "Our team is always near you in Haryana.",
      icon: "",
    },
    {
      title: "Expanding Every Day",
      desc: "Bringing drone technology to more farmers.",
      icon: "",
    },
  ];

  return (
    <section className="py-20">

      <div className="text-center mb-12">
        <p className="uppercase text-green-700 font-semibold tracking-widest text-sm">
          Our Coverage Map
        </p>

        <h2 className="text-5xl font-bold mt-2">
          Where We Operate
        </h2>
      </div>

      {/* MAP CONTAINER */}

      <div
        className="relative max-w-362.5 mx-auto h-175 rounded-3xl border border-gray-200 shadow-lg overflow-hidden bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >

        {/* LEFT LEGEND */}

        <div className="absolute bottom-12 left-10 bg-white rounded-2xl shadow-xl p-8 w-64">

          <h3 className="font-bold text-2xl mb-5">
            Legend
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-green-700"></span>
              <span>Currently Serving</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-green-300"></span>
              <span>Expanding Soon</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-gray-300"></span>
              <span>Coming Soon</span>
            </div>

          </div>

        </div>

        {/* RIGHT FEATURES */}

        <div className="absolute top-1/2 right-10 -translate-y-1/2 bg-white rounded-3xl shadow-xl w-105 p-10">

          {features.map((item, index) => (

            <div
              key={index}
              className={`flex gap-5 ${
                index !== features.length - 1 ? "mb-8" : ""
              }`}
            >

              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">

                <img
                  src={item.icon}
                  alt=""
                  className="w-8 h-8"
                />

              </div>

              <div>

                <h3 className="font-bold text-2xl">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-2 leading-7">
                  {item.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CoverageMap;