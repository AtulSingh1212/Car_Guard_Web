import React, { useState } from 'react'
import DashboardPage from './Outlet/DashboardPage';
import RoadsidePage from './Outlet/RodesidePage';
import VehiclesPage from './Outlet/VehiclesPage';
import NotificationsPage from './Outlet/NotificationsPage';
import ProfilePage from './Outlet/ProfilePage';
import ContactPage from './Outlet/ContactPage';
import ContractsPage from './Outlet/ContractsPage';
// import ClaimsPage from './Outlet/ClaimPage';
import PaymentsPage from './Outlet/PaymentsPage';
import Sidebar from './common/Sidebar';
import Topbar from './common/Topbar';
import ClaimsPage from './Outlet/ClaimPage';
import { Outlet } from 'react-router-dom';
// import DashboardPage from './DashboardPage';



export default function MainDashboard({children}) {
    const [active, setActive] = useState("dashboard");
    
    function renderPage() {
      switch (active) {
        case "dashboard": return <DashboardPage go={setActive} />;
        case "contracts": return <ContractsPage />;
        case "claims": return <ClaimsPage />;
        case "roadside": return <RoadsidePage />;
        case "vehicles": return <VehiclesPage />;
        case "payments": return <PaymentsPage />;
        case "notifications": return <NotificationsPage />;
        case "profile": return <ProfilePage />;
        case "contact": return <ContactPage />;
        default: return <DashboardPage go={setActive} />;
       
      }
    }
  
    return (
      <div className="flex bg-[#0d0e17] min-h-screen font-sans">
        <Sidebar active={active} setActive={setActive} />
        <div className="flex-1 min-w-0">
          <Topbar active={active} setActive={setActive} />
          <div className="px-8 py-8">{<Outlet/>}</div>
        </div>
      </div>
    );
}