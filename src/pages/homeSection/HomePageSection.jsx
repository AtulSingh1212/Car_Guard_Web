import React from 'react'
import HomePage from '../../components/home/HomePage'
import JourneySection from '../../components/home/JourneySection'
import Footer from '../../components/layout/Footer'
import WarrantyPanels from '../../components/home/WarrantyPanels'
import FeatureHighlights from '../../components/home/featureHighlights'
import WhyChooseUs from '../../components/home/WhyChooseUs'
import Testimonials from '../../components/home/Testimonials'

const HomePageSection = () => {
  return (
    <div>
        <HomePage />
        <WarrantyPanels />
        <FeatureHighlights />
        <WhyChooseUs />
        <Testimonials />
        
    </div>
  )
}

export default HomePageSection