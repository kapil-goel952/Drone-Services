import React from 'react'
import HeroSection from '../Components/Common/HeroSection'
import WhereServe from '../Components/Coverage/WhereweOperate'
import DistrictsWeServe from '../Components/Coverage/DistrictsWeServe'
import AreaNotListed from '../Components/Coverage/IsYourArea'


const CoverageArea = ({hero}) => {
  

  return (
    <div>
      <HeroSection hero={hero}/>
      <WhereServe/>
      <DistrictsWeServe/>
      <AreaNotListed/>
    </div>
  )
}

export default CoverageArea
