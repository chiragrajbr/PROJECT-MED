import React from 'react'

import {Routes,Route} from "react-router-dom"
import Login from './Login/Login'
import Register from './Register/Register'
import Navbarpage from './Navbarpage/Navrbarpage'
import Homepage from './Homepage/Homepage'
import Accountpage from './Accountpage/Accountpage'
import Privaterouter from './privaterouter/Privaterouter'
const App = () => {
  return (
    <div>
      <Navbarpage />
     <Routes>
         <Route element={<Privaterouter />}>
            <Route path='/account' element={<Accountpage/>} />
         </Route>

          <Route path='/' element={<Homepage/>}   />
          <Route path='/login' element={<Login/>}   />
          <Route path='/register' element={<Register/>}/>
         
      </Routes> 
    </div>
  )
}

export default App
