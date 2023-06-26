import React from 'react'
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <div>
       <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4"><form >
        <div className='form-group'>
            <label className='mt-4' style={{fontSize:20}} >Name:</label> <input type="text" className='form-control'/>
          </div>
          <div className='form-group'>
            <label className='mt-4' style={{fontSize:20}} >Email:</label> <input type="text" className='form-control'/>
          </div>
          <div className='form-group'>
            <label className='mt-4 ' style={{fontSize:20}} >Password:</label> <input type="text" className='form-control'/>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-2 mt-1"><button className='btn btn-primary'>register</button></div>
          </div>
          <div className='mt-2'><p>existing user <Link to={"/login"}>login</Link></p></div>

        </form></div>
      </div>
    </div>
    </div>
  )
}

export default Register
