import React from "react";

const services = [
  {
    image: "",
    icon: "",
    title: "Crop Spraying",
    desc: "Precise spraying of pesticides and nutrients for healthier crops.",
  },
  {
    image: "",
    icon: "",
    title: "Fertilizer Spraying",
    desc: "Efficient distribution of liquid fertilizers for better yield.",
  },
  {
    image: "",
    icon: "",
    title: "Seed Spreading",
    desc: "Accurate seed broadcasting for higher germination.",
  },
  {
    image: "",
    icon: "",
    title: "Mapping & Surveying",
    desc: "High-resolution mapping and land analysis.",
  },
  {
    image: "",
    icon: "",
    title: "Crop Health Analytics",
    desc: "Data-driven insights for smarter farming decisions.",
  },
];

const OurServices = () => {
  return (
    <section  className="max-w-7xl  mx-auto py-20 px-6">

      {/* Heading */}

      <div  className="flex items-end justify-between mb-10">

        <div >

          <p className="uppercase tracking-widest text-xs text-gray-500 mb-2">
            Our Services
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Complete Drone Solutions
            <br />
            for Modern Agriculture
          </h2>

        </div>

        <button className="flex items-center gap-2 text-green-700 font-semibold hover:gap-3 duration-300">
          View All Services →
        </button>

      </div>

      {/* Cards */}

      <div id="Services" className="flex gap-6 ">

        {services.map((service, index) => (

          <div
            key={index}
            className="
            min-w-62.5
            bg-white
            rounded-3xl
            shadow-md
            hover:shadow-xl
            hover:-translate-y-2
            duration-300
            overflow-hidden
            border
            border-gray-100
            "
          >

            {/* Image */}

            <div className="relative">

              <img
                src={service.image}
                alt={service.title}
                className="h-52 w-full object-cover"
              />

              {/* Floating Icon */}

              <div
                className="
                absolute
                left-1/2
                -bottom-8
                -translate-x-1/2
                w-16
                h-16
                rounded-full
                bg-green-700
                flex
                items-center
                justify-center
                shadow-xl
                border-4
                border-white
                "
              >

                <img
                  src={service.icon}
                  alt=""
                  className="w-8 h-8 object-contain"
                />

              </div>

            </div>

            {/* Content */}

            <div className="pt-12 pb-8 px-6 text-center">

              <h3 className="font-bold text-xl mb-3">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm leading-7">
                {service.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default OurServices;