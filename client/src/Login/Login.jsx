import React from 'react'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
       <div className="col-4">
       <form >
          <div className='form-group'>
            <label className='mt-4' style={{fontSize:20}} >Email:</label> <input type="text" className='form-control'/>
          </div>
          <div className='form-group'>
            <label className='mt-4 ' style={{fontSize:20}} >Password:</label> <input type="text" className='form-control'/>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-2 mt-1"><button className='btn btn-primary'>login</button></div>
          </div>
          <div className='mt-2'><p>new user <Link to={"/register"}>register</Link></p></div>
        </form>
       </div>
      </div>
    </div>
    </div>
  )
}

export default Login
