import React from 'react'
import PublicRoutes from './pages/publicRoutes/PublicRoutes'
import PrivateRoutes from './Dashboard/PrivateRoutes'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import RoutesDeshboard from './components/dashboard/DeshboardRoutes/RoutesDeshboard'
import { BrowserRouter } from 'react-router-dom'



const App = () => {
  return (
    <Provider store={store}>
      
      {/* <PageLayout/> */}
      <PrivateRoutes/>
      <PublicRoutes/>
      
      
  </Provider>)
}

export default App