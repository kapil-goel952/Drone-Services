import React from "react";

import HeroSection from "../Components/Common/HeroSection";
import SendUsMessage from "../Components/Contact/SendUsMessage";
import OurOffice from "../Components/Contact/OurOffice";
import FindUsOnMap from "../Components/Contact/FindUsOnMap";

const Contact = ({ hero }) => {
  return (
    <>
      <HeroSection hero={hero} />

      <section className="bg-[#F7F7F4] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Contact Section */}

          <div className="grid grid-cols-1 xl:grid-cols-[1.15fr_.85fr] gap-7">

            {/* Left */}

            <div>
              <SendUsMessage />
            </div>

            {/* Right */}

            <div className="flex flex-col gap-7">

              <OurOffice />

              <FindUsOnMap />

            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default Contact;