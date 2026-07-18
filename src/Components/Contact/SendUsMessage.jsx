import React, { useState } from "react";
import { SendHorizontal, Lock } from "lucide-react";

const SendUsMessage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    fieldSize: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      className="
      w-full
      rounded-[20px]
      border
      border-gray-200
      bg-white
      shadow-[0_8px_30px_rgba(0,0,0,.06)]
      p-6
      lg:p-8
    "
    >
      {/* Heading */}

      <h2 className="text-[34px] font-bold text-gray-900">
        Send Us a Message
      </h2>

      <div className="mt-3 h-0.75 w-12 rounded-full bg-green-700"></div>

      <p className="mt-4 text-[15px] leading-7 text-gray-500">
        Fill out the form below and our team will get back to you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >

        {/* Row 1 */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name *"
            className="
            h-13
            rounded-xl
            border
            border-gray-300
            px-5
            text-[14px]
            outline-none
            transition
            placeholder:text-gray-400
            focus:border-green-700
            focus:ring-4
            focus:ring-green-100
          "
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            className="
            h-13
            rounded-xl
            border
            border-gray-300
            px-5
            text-[14px]
            outline-none
            transition
            placeholder:text-gray-400
            focus:border-green-700
            focus:ring-4
            focus:ring-green-100
          "
          />

        </div>

        {/* Row 2 */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="
            h-13
            rounded-xl
            border
            border-gray-300
            px-5
            text-[14px]
            outline-none
            transition
            placeholder:text-gray-400
            focus:border-green-700
            focus:ring-4
            focus:ring-green-100
          "
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Your Location / Village / City *"
            className="
            h-13
            rounded-xl
            border
            border-gray-300
            px-5
            text-[14px]
            outline-none
            transition
            placeholder:text-gray-400
            focus:border-green-700
            focus:ring-4
            focus:ring-green-100
          "
          />

        </div>

        {/* Row 3 */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>

            <label className="mb-2 block text-[14px] font-medium text-gray-700">
              Select Service
            </label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="
              h-13
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-5
              text-[14px]
              outline-none
              transition
              focus:border-green-700
              focus:ring-4
              focus:ring-green-100
            "
            >
              <option value="">Choose a service</option>
              <option>Crop Spraying</option>
              <option>Fertilizer Spraying</option>
              <option>Seed Spreading</option>
              <option>Mapping & Surveying</option>
              <option>Crop Health Analytics</option>
            </select>

          </div>

          <div>

            <label className="mb-2 block text-[14px] font-medium text-gray-700">
              Field Size (Acres)
            </label>

            <input
              type="text"
              name="fieldSize"
              value={formData.fieldSize}
              onChange={handleChange}
              placeholder="e.g. 5 Acres"
              className="
              h-13
              w-full
              rounded-xl
              border
              border-gray-300
              px-5
              text-[14px]
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-green-700
              focus:ring-4
              focus:ring-green-100
            "
            />

          </div>

        </div>
                {/* Message */}

        <div>
          <label className="mb-2 block text-[14px] font-medium text-gray-700">
            Message / Requirements
          </label>

          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your field, crop and requirements..."
            className="
              min-h-42.5
              w-full
              resize-none
              rounded-xl
              border
              border-gray-300
              p-5
              text-[14px]
              outline-none
              transition
              placeholder:text-gray-400
              focus:border-green-700
              focus:ring-4
              focus:ring-green-100
            "
          />
        </div>

        {/* Checkbox */}

        <label className="flex items-center gap-3 cursor-pointer">

          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="
              h-4
              w-4
              rounded
              accent-green-700
            "
          />

          <span className="text-[13px] text-gray-600">
            I agree to be contacted by Rawal Drones team.
          </span>

        </label>

        {/* Submit Button */}

        <button
          type="submit"
          className="
            group
            flex
            h-13.5
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-[#2E6B1F]
            text-[15px]
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-[#245517]
            hover:shadow-lg
            active:scale-[0.99]
          "
        >
          Submit Inquiry

          <SendHorizontal
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        {/* Privacy */}

        <div className="flex items-center justify-center gap-2 pt-2">

          <Lock
            size={14}
            className="text-gray-500"
          />

          <p className="text-[12px] text-gray-500">
            Your information is safe with us. We respect your privacy.
          </p>

        </div>

      </form>

    </section>
  );
};

export default SendUsMessage;