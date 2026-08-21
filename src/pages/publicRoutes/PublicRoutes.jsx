import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactPage from '../../components/contect-us/ContactPage'
import FqaResource from '../../components/fqa-resource/FqaResource'
import WarrantyPage from '../../components/warrantyPlans/WarrantyPage'
import HomePage from '../../components/home/HomePage'
import AboutPage from '../../components/about/AboutPage'
import HomePageSection from '../homeSection/HomePageSection'
import AboutPageSection from '../aboutSection/AboutPageSection'
import WarrantypageSection from '../warrantySection/WarrantypageSection'
import FaqSection from '../../components/fqa-resource/FaqSection'
import FqaPageSection from '../FaqSection/FqaPageSection'
import ContactPageSection from '../contactSection/ContactPageSection'
import LoginSection from '../authSection/LoginSection'
import Footer from '../../components/layout/Footer'
import Register from '../../components/auth/Ragister'
import RegisterLayout from '../../components/auth/RagisterLayout'
import PrimiumPlansSection from '../warrantySection/PrimiumPlanes/PrimiumPlansSection'
import AddVehicalInfo from '../warrantySection/PrimiumPlanes/AddVehicalInfo'
import ReviewInformation from '../warrantySection/PrimiumPlanes/ReviewInformation'
import PaymentSection from '../payments/PaymentSection'
import Success from '../SuccessSection/Success'

const PublicRoutes = () => {
  // const publicRoutes = [
  //   { path: '/', element: <HomePageSection /> },
  //   { path: '/home', element: <HomePage /> },
  //   { path: '/contact', element: <ContactPage /> },
  //   { path: '/fqa-resource', element: <FqaResource /> },
  //   { path: '/warranty-plan', element: <WarrantyPage /> },
  // ]
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePageSection />} />
            <Route path='/home' element={<HomePageSection />} />
            <Route path='/about-us' element={<AboutPageSection />} />
            <Route path='/contact' element={<ContactPageSection />} />
            <Route path='/fqa-resources' element={<FqaPageSection />} />
            <Route path='/warranty-plans' element={<WarrantypageSection />} />
            <Route path='/warranty-plans/premium' element={<PrimiumPlansSection/>} />
            <Route path='/contact-us' element={<ContactPageSection/>} />
            <Route path='/login' element={<LoginSection/>} />
            <Route path='/register' element={<RegisterLayout/>} />
            <Route path='/warranty-plans/add-vehicle' element={<AddVehicalInfo/>} />
            <Route path='/warranty-plans/review-information' element={<ReviewInformation/>} />
            <Route path='/warranty-plans/payment' element={<PaymentSection/>} />
            <Route path='/success' element={<Success/>} />
        </Routes>
        <Footer/>
    </div>
    
  )
}

export default PublicRoutes