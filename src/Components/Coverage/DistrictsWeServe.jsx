import React from "react";

const districts = [
  {
    name: "Karnal",
    status: "Serving",
    description: "Quick availability & full support",
    button: "Book Now",
    image: "",
    active: true,
  },
  {
    name: "Panipat",
    status: "Serving",
    description: "Quick availability & full support",
    button: "Book Now",
    image: "",
    active: true,
  },
  {
    name: "Sonipat",
    status: "Serving",
    description: "Quick availability & full support",
    button: "Book Now",
    image: "",
    active: true,
  },
  {
    name: "Rohtak",
    status: "Serving",
    description: "Quick availability & full support",
    button: "Book Now",
    image: "",
    active: true,
  },
  {
    name: "Jind",
    status: "Expanding Soon",
    description: "Service coming soon to your area",
    button: "Notify Me",
    image: "",
    active: false,
  },
  {
    name: "Hisar",
    status: "Expanding Soon",
    description: "Service coming soon to your area",
    button: "Notify Me",
    image: "",
    active: false,
  },
];

const DistrictsWeServe = () => {
  return (
    <section className="py-20">

      <div className="max-w-362.5 mx-auto">

        {/* Heading */}

        <div className="text-center mb-10">

          <p className="uppercase text-green-700 tracking-widest text-sm font-semibold">
            Districts We Serve
          </p>

        </div>

        {/* Cards */}

        <div className="grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 gap-6">

          {districts.map((district, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl duration-300"
            >

              {/* Image */}

              <div className="relative">

                <img
                  src={district.image}
                  alt=""
                  className="h-48 w-full object-cover"
                />

                {/* Status Icon */}

                <div
                  className={`absolute bottom-3 left-3 w-12 h-12 rounded-full flex justify-center items-center text-white text-xl bg-green-700`}
                >
                  ✓
                </div>

              </div>

              {/* Content */}

              <div className="p-5">

                <h3 className="text-2xl font-bold">
                  {district.name}
                </h3>

                <p
                  className={`font-medium mt-1 text-green-700`}
                >
                  {district.status}
                </p>

                <p className="text-gray-500 text-sm mt-4 leading-6">
                  {district.description}
                </p>

                <button
                  className={`mt-6 font-semibold flex items-center gap-2 transition text-green-700 hover:text-green-900`}
                >
                  {district.button}

                  <span>→</span>

                </button>

              </div>

            </div>

          ))}

        </div>

        {/* View All */}

        <div className="text-center mt-10">

          <button className="font-semibold text-green-700 hover:text-green-900 flex items-center gap-2 mx-auto">
            View All Districts
            <span>⌄</span>
          </button>

        </div>

      </div>

    </section>
  );
};

export default DistrictsWeServe;