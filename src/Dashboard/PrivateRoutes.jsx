import React from 'react'
import CarGuardDashboard from '../components/dashboard/Carguarddashboard'
import { Route, Routes } from 'react-router-dom'
import MainDashboard from '../components/dashboard/MainDashboard'

const PrivateRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/dashboard' element={<CarGuardDashboard/>} />
            {/* <Route path='/dashboard' element={<MainDashboard/>} /> */}
        </Routes>
    </div>
  )
}

export default PrivateRoutes