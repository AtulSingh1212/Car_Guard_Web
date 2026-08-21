import React from 'react'
import WarrantyPage from '../../components/warrantyPlans/WarrantyPage'
import PricingCards from '../../components/warrantyPlans/PricingCards'
import ComparePlansTable from '../../components/warrantyPlans/ComparePlansTable'
import AddOnCoverage from '../../components/warrantyPlans/AddOnCoverage'
import Footer from '../../components/layout/Footer'

const WarrantypageSection = () => {
  return (
    <div>
        <WarrantyPage />
        <PricingCards />
        <ComparePlansTable />
        <AddOnCoverage />
    </div>
  )
}

export default WarrantypageSection