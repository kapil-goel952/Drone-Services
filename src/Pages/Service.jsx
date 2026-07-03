import React from 'react'
import HeroSection from '../Components/Common/HeroSection'
import OurServices from '../Components/Services/OurServices'
import ReadyToUpgrade from '../Components/UpgradeFarming'
import HowItWorks from '../Components/Common/HowItWorks'


const Services = ({ hero }) => {
  const steps = [
    {
      id: 1,
      number: "01",
      icon: "/images/consultation.png",
      title: "Consultation",
      description:
        "We understand your crop, field size and requirements.",
    },

    {
      id: 2,
      number: "02",
      icon: "/images/planning.png",
      title: "Planning",
      description:
        "We plan the best route and spray strategy.",
    },

    {
      id: 3,
      number: "03",
      icon: "/images/drone.png",
      title: "Operation",
      description:
        "Precise drone operation with safety & quality.",
    },

    {
      id: 4,
      number: "04",
      icon: "/images/report.png",
      title: "Report & Support",
      description:
        "We provide reports and ongoing support.",
    },
  ];
  return (
    <div>
      <HeroSection hero={hero} />
      <OurServices />
      <HowItWorks users={steps} />
      <ReadyToUpgrade />

    </div>
  )
}

export default Services
