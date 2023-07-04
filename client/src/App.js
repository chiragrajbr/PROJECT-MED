import React from 'react'

import {Routes,Route} from "react-router-dom"
import Login from './Login/Login'
import Register from './Register/Register'
import Navbarpage from './Navbarpage/Navrbarpage'
import Homepage from './Homepage/Homepage'
import Privaterouter from './privaterouter/Privaterouter'
import Accountpage from './Accountpage/Accountpage'
import Addresspage from './Addresspage/Address'
import Product from './Product/Product'
const App = () => {
  return (
    <div>
      <Navbarpage />
     <Routes>
        
         <Route element={<Privaterouter />}>
            <Route path='/account' element={<Accountpage/>} />
            <Route path='/address' element={<Addresspage/>}/>
            <Route path='/product' element={<Product/>}/>
         </Route>

          <Route path='/' element={<Homepage/>}   />
          <Route path='/login' element={<Login/>}   />
          <Route path='/register' element={<Register/>}/>
          
         
      </Routes> 
    </div>
  )
}

export default App
