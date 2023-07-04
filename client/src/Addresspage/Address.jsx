import React, { useEffect } from 'react'
import axiosInstance from "../Axiosinstance/axiosInstance"
const Addresspage = () => {
  const [detail,setDetails]=React.useState([])
  const [address,setAddress]=React.useState("")
  const [phonenumber,setPhoneNumber]=React.useState("")
  const [city,setCity]=React.useState("")
  const [state,setState]=React.useState("")
  const [pincode,setPincode]=React.useState("")
  const [landmark,setLandmark]=React.useState("")
  useEffect(()=>{
    axiosInstance.get("http://localhost:3006/userdetails")
    .then((res)=>{
      setDetails(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const bookHandler=(event)=>{
    event.preventDefault()
    axiosInstance.post("http://localhost:3006/address",{
      address:address,
      city:city,
      state:state,
      pincode:pincode,
      landmark:landmark
    })
    .then((res)=>{
      let result=res.data
      console.log(result)
      alert("booked successfully")
    })
    .catch((err)=>{
      console.log({"error":err})
    })
    
  }

  return (
    <div>
       <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <form onSubmit={bookHandler} >
           <div className='form-group'>
            <label className='mt-2' style={{fontSize:20}} >user:</label><input type="text" className='form-control' value={detail.name} onChange={(event)=>{setDetails.name(event.target.value)}}  disabled />
        </div>
        <div className='form-group'>
            <label className='mt-2' style={{fontSize:20}} >email:</label><input type="text" className='form-control' value={detail.email} onChange={(event)=>{setDetails.email(event.target.value)}}  disabled />
        </div>
        <div className='form-group'>
            <label className='mt-2' style={{fontSize:20}} >address:</label><input type="text" className='form-control' value={address} onChange={(event)=>{setAddress(event.target.value)}}  required />
        </div>
        <div className='form-group'>
            <label className='mt-2' style={{fontSize:20}} >phonenumber:</label><input type="text" className='form-control' value={phonenumber} onChange={(event)=>{setPhoneNumber(event.target.value)}}  required />
        </div>
          <div className='form-group'>
            <label className='mt-2' style={{fontSize:20}} >city:</label> 
            <input type="text" className='form-control' value={city} onChange={(event)=>{setCity(event.target.value)}} required/>
          </div>
          <div className='form-group'>
            <label className='mt-2 ' style={{fontSize:20}} >state:</label>
             <input type="text" className='form-control' value={state} onChange={(event)=>{setState(event.target.value)}} required/>
          </div>
          <div className='form-group'>
            <label className='mt-2 ' style={{fontSize:20}} >pincode:</label>
             <input type="text" className='form-control' value={pincode} onChange={(event)=>{setPincode(event.target.value)}} required/>
          </div>
          <div className='form-group'>
            <label className='mt-2 ' style={{fontSize:20}} >landmark:</label>
             <input type="text" className='form-control' value={landmark} onChange={(event)=>{setLandmark(event.target.value)}} required/>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-2 mt-1"><button className='btn btn-danger'>confirm</button></div>
          </div>

        </form>
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default Addresspage
