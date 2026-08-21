import React, { useState } from 'react'
import DashboardPage from './DashboardPage';
import ContractsPage from './ContractsPage';
import ClaimsPage from './ClaimPage';
import RoadsidePage from './RodesidePage';
import VehiclesPage from './VehiclesPage';
import PaymentsPage from './PaymentsPage';
import NotificationsPage from './NotificationsPage';
import ProfilePage from './ProfilePage';
import ContactPage from './ContactPage';
import Sidebar from './Sidebar';
import Topbar from './Topbar';



export default function MainDashboard() {
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
          <Topbar />
          <div className="px-8 py-8">{renderPage()}</div>
        </div>
      </div>
    );
  }