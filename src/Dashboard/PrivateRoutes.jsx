import React from 'react'
import CarGuardDashboard from '../components/dashboard/Outlet/Carguarddashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainDashboard from '../components/dashboard/MainDashboard'
import RoutesDeshboard from '../components/dashboard/DeshboardRoutes/RoutesDeshboard'
import NotificationsPage from '../components/dashboard/Outlet/NotificationsPage'
import ProfilePage from '../components/dashboard/Outlet/ProfilePage'
import ContactPage from '../components/dashboard/Outlet/ContactPage'
import Settings from '../components/dashboard/Outlet/Settings'
import VehiclesPage from '../components/dashboard/Outlet/VehiclesPage'
import PaymentsPage from '../components/dashboard/Outlet/PaymentsPage'
import RoadsidePage from '../components/dashboard/Outlet/RodesidePage'
import ClaimsPage from '../components/dashboard/Outlet/ClaimPage'
import ContractsPage from '../components/dashboard/Outlet/ContractsPage'
import DashboardPage from '../components/dashboard/Outlet/DashboardPage'

// import RoutesDeshboard from '../components/dashboard/DeshboardRoutes/RoutesDeshboard'

const PrivateRoutes = () => {
  return (
    <div>
      
        <Routes>
            {/* <Route path='/dashboard' element={<CarGuardDashboard/>} /> */}
            <Route path='/dashboard' element={<MainDashboard/>} >
              <Route index element={<DashboardPage/>} />
              <Route path='notifications' element={<NotificationsPage/>} />
              <Route path='profile' element={<ProfilePage/>} />
              <Route path='settings' element={<Settings/>} />
              <Route path='contact' element={<ContactPage/>} />
              <Route path='vehicles' element={<VehiclesPage/>} />
              <Route path='payments' element={<PaymentsPage/>} />
              <Route path='roadside' element={<RoadsidePage/>} />
              <Route path='claims' element={<ClaimsPage/>} />
              <Route path='contracts' element={<ContractsPage/>} />
            </Route>
        </Routes>

    </div>
  )
}

export default PrivateRoutes