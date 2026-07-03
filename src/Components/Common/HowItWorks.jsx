import React from "react";



const HowItWorks = ({ users }) => {
  return (
    <section className="w-full py-20">

      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-widest text-green-700 text-sm font-semibold">
          How It Works
        </p>

        <h2 className="text-4xl font-bold mt-2 text-gray-900">
          Simple Process, Powerful Results
        </h2>

        <div className="mt-16 flex flex-wrap justify-between items-start gap-10">

          {users.map((elem, index) => (

            <div
              key={index}
              className="relative flex flex-col items-center text-center w-62.5 mx-auto"
            >

              <div className="w-10 h-10 rounded-full bg-green-800 text-white font-bold flex items-center justify-center text-sm mb-6">
                {elem.number}
              </div>

              {index !== users.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-[72%] w-42.5 border-t border-dashed border-gray-300"></div>
              )}

              <div className="w-20 h-20 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center">
                <img
                  src={elem.icon}
                  alt={elem.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {elem.title}
              </h3>

              <p className="mt-3 text-gray-500 text-sm leading-6">
                {elem.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};
export default HowItWorks;