import React from 'react'
import ContactPage from '../../components/contect-us/ContactPage'
import Footer from '../../components/layout/Footer'
import ServiceNetworkSection from '../../components/contect-us/ Servicenetworksection '
import SupportAndTrustSection from '../../components/contect-us/Supportandtrustsection '
import RoadsideAssistanceCTA from '../../components/contect-us/RoadsideAssistanceCTA'

const ContactPageSection = () => {
  return (
    <div>
        <ContactPage />
        <ServiceNetworkSection />
        <SupportAndTrustSection />
        <RoadsideAssistanceCTA/>
    </div>
  )
}

export default ContactPageSection