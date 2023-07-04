import React from 'react'
import {Link,useNavigate} from "react-router-dom"


const Accountpage = () => {
  const navigate=useNavigate()
  return (
    <div>
      <center>
        
        <h4>  <li><Link to={"/address"}>Address</Link> </li> <br /></h4>
        <h4>  <li><Link to={"/address"}>wishlist</Link> </li> <br /> </h4>
        <button className='btn btn-danger ' onClick={()=>{localStorage.removeItem("token")
          alert ("logout successfull")
          navigate("/login")
        }}>logout</button> 
        
        
      </center>
    </div>
  )
}

export default Accountpage
