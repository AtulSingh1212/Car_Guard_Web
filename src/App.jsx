import React from 'react'
import PublicRoutes from './pages/publicRoutes/PublicRoutes'
import PrivateRoutes from './Dashboard/PrivateRoutes'
import { Provider } from 'react-redux'
import { store } from './redux/store'



const App = () => {
  return (
    <div>
      <Provider store={store}>
      {/* <PageLayout/> */}
      <PrivateRoutes/>
      <PublicRoutes/>
      </Provider>
    </div>
  )
}

export default App