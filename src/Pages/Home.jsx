import React from 'react'
import HeroSection from '../Components/Common/HeroSection'
import OurServices from '../Components/Home/ServicesCard'
import HowItWorks from '../Components/Common/HowItWorks'
import OurCoverage from '../Components/Common/Ourcoverage'
import ReadyToUpgrade from '../Components/UpgradeFarming'


const Home = ({hero}) => {
  const steps = [
    {
      number: "01",
      icon: "/images/inspection.png",
      title: "Field Inspection",
      description:
        "We understand your field and crop requirements.",
    },
    {
      number: "02",
      icon: "/images/planning.png",
      title: "Route Planning",
      description:
        "AI-powered planning for efficient spraying.",
    },
    {
      number: "03",
      icon: "/images/drone.png",
      title: "Drone Spraying",
      description:
        "Precision spraying with advanced drone technology.",
    },
    {
      number: "04",
      icon: "/images/report.png",
      title: "Report & Support",
      description:
        "Detailed report and post-service support.",
    },
  ];
  return (
    <div>
         <HeroSection hero={hero}/>
        <OurServices/>
        <HowItWorks users={steps}/> 
        <OurCoverage/>
        <ReadyToUpgrade/>
    </div>
  )
}

export default Home
