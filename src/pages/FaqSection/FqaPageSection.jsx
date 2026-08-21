import React from 'react'
import FqaResource from '../../components/fqa-resource/FqaResource'
import FaqSection from '../../components/fqa-resource/FaqSection'
import ResourcesSection from '../../components/fqa-resource/ResourcesSection'
import QuestionsCTA from '../../components/fqa-resource/QuestionsCTA'
import Footer from '../../components/layout/Footer'

const FqaPageSection = () => {
  return (
    <div>

        <FqaResource />
        <FaqSection />
        <ResourcesSection />
        <QuestionsCTA />
    </div>
  )
}

export default FqaPageSection