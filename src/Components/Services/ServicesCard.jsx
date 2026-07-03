import { CheckCircle } from "lucide-react";

export default function ServiceCard({
  image,  number,  title,  description,  points,}) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full ">
      {/* Image */}

      <div className="overflow-hidden">
        <img 
          src={image}
          alt={title}
          className=" w-full h-48 sm:h-56 lg:h-52 object-cover transition-transform duration-500 hover:scale-110 "/>
      </div>

      {/* Content */}

      <div
        className="flex flex-col flex-1 p-5 sm:p-6 " >
        <h3
          className="text-xl sm:text-2xl font-bold text-gray-900 ">
          {number} {title}
        </h3>

        <p
          className=" text-gray-600 text-sm sm:text-base mt-3 leading-7 ">
          {description}
        </p>

        <div className="space-y-2 mt-5">
          {points.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2"
            >
              <CheckCircle
                size={18}
                className="text-green-600 shrink-0"
              />

              <span className="text-sm sm:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Push button to bottom */}

        <button
          className="mt-auto pt-6 text-green-700 font-semibold hover:translate-x-2 transition-all duration-300 text-left " > 
          Know More →
        </button>
      </div>
    </div>
  );
}