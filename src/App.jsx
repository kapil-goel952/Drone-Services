import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Service from './Pages/Service'
import Coverage from './Pages/CoverageArea'
import About from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'



function App() {
  const hero = {
    home: {
      id: 1,
      description: "  Rawal Drones brings advanced drone technology to your fields for efficient spraying, saving time, water and costs while improving crop health and productivity.",
      tagline: "Modern Drone Spraying For Smarter Farming",
      btn1: "Book A demo",
      btn2: "WhatsApp Us",
      heading: "Precision Agriculture Technology",
       background: 'https://www.ifpri.org/wp-content/uploads/2025/09/shutterstock_2248325911-scaled.jpg'
    },
    service: {
      id: 2,
      description: " From spraying to mapping, we provide end-to-end drone service to improve productivity and profitability for farmers",
      tagline: "Smart Drone Solution For Every Farm Need",
    btn1: "Call Now",
      btn2: "WhatsApp Us",
      heading: "Our Services",
       background: 'https://www.cropin.com/wp-content/uploads/2021/10/f.webp'
    },
   coverage: {
      id: 3,
      description: "Rawal Drones is expanding across Haryana to bring advanced drone technology to every farmer",
      tagline: "Serving Farmers Across Haryana",
     btn1: "Call Now",
      btn2: "WhatsApp Us",
      heading: "Our Coverage",
       background: 'https://www.azorobotics.com/images/Article_Images/ImageForArticle_699_17197995980611328.jpg'
    },
    about:{
      id: 4,
      description: "with Drone Technology Rawal Drones is on a mission to bring advanced drone technology to agriculture in Haryana and beyond. We help farmers save time, naduce costs and achieve higher yields with precision farming",
      tagline: "Empowering Farmers with Drone Technology",
      btn1: "Call Now",
      btn2: "WhatsApp Us",
      heading: "About RAWAL DRONES",
       background: 'https://i.ytimg.com/vi/P2YPG8PO9JU/maxresdefault.jpg'
    },
    contact:  {
      id: 5,
      description: "Hav any question about drone spraying or want to book a service? reach out to our tem and we'll get back to you shortly.",
      tagline: "We're Here to Help You Grow",
      btn1: "Call Now",
      btn2: "WhatsApp Us",
      heading: "GET IN TOUCH",
      background: "https://www.dronedubai.ae/wp-content/uploads/2024/05/dji-agras-t50-1200x800.webp"
    },
  }
  return (

    <div className=''>
      <div className='flex flex-col min-h-screen'>
        <Navbar />

        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<Home hero={hero.home} />} />
            <Route path='/service' element={<Service hero={hero.service} />} />
            <Route path='/coverage' element={<Coverage hero={hero.coverage}/>} />
            <Route path='/about' element={<About hero={hero.about} />} />
            <Route path='/contact' element={<Contact hero={hero.contact}/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  )
}
// adofhasdoifhasdfoiasdhfoiadsfiouashdgasoidfhvp
// adofhasdoifhasdfoiasdhfoiadsfiouashdgasoidfhvp
// adofhasdoifhasdfoiasdhfoiadsfiouashdgasoidfhvp
// adofhasdoifhasdfoiasdhfoiadsfiouashdgasoidfhvp
// asiodfhsaodifhaisfh9aiusufviasdhfasdhoipfa
export default App
