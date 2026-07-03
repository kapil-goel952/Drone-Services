import React from 'react'
import HeroSection from '../Components/Common/HeroSection'
import Form from '../Components/Contact/form'

const Contact = ({hero}) => {

  return (
    <div>
      <HeroSection hero={hero} />
      <Form/>
    </div>
  )
}

export default Contact
