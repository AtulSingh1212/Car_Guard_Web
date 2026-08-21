import React from 'react'
import PublicRoutes from './pages/publicRoutes/PublicRoutes'
import PrivateRoutes from './Dashboard/PrivateRoutes'



const App = () => {
  return (
    <div>
      {/* <PageLayout/> */}
      <PrivateRoutes/>
      <PublicRoutes/>
      
    </div>
  )
}

export default App