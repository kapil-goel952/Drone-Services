import React from "react";
import Hero from "../../images/hero.jpg";

const HeroSection = ({hero}) => {
console.log({hero});

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Image */}
      <div className="absolute top-0 right-0 h-full w-[60%] xl:w-[65%]">
        <img  src={hero.background} alt="Drone Spraying" className=" h-full w-full object-cover object-center opacity-95 mask-[linear-gradient(to_left,black_70%,transparent)]"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-350 mx-auto w-full px-6 lg:px-12">
        <div className="max-w-2xl">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            {hero.heading}
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {hero.tagline}
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {hero.description}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button  className=" bg-green-800 text-white px-8 py-4 rounded-full font-medium hover:bg-green-900 transition">
              {hero.btn1}
            </button>

            <button
              className="border border-green-800 text-green-800 px-8 py-4 rounded-full font-medium hover:bg-green-50 transition ">{hero.btn2}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;