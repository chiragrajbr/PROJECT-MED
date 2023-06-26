import React from 'react'
import {Link} from "react-router-dom"

const Homepage = () => {
  return (
    <div>
    <nav className='navbar navbar-expand-lg bg-primary'>
    <div className='navbar-brand text-white'>MEDPLUS+</div>
    <div className='ml-auto'>
        <ul className='navbar-nav'>
            <li className='nav-items'> <Link to={"/login "} className=' text-white mr-3'>Login</Link></li>
        </ul>
    </div>
    </nav>
        
    
    </div>
  )
}

export default Homepage
