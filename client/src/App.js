import React from 'react'
import Homepage from './Homepage/Homepage'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Login/Login'
import Register from './Register/Register'
const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Homepage />
        <Routes>
          <Route path='/login' element={<Login/>}   />
          <Route path='/register' element={<Register/>}   />
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
