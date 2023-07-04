import React, { useEffect } from 'react'
import "./product.css"
import axios from "axios"
import {FaRupeeSign} from "react-icons/fa"
const Product = () => {
    const[product,setProduct]=React.useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3006/getallmedicine`)
                .then((response)=>{
                    setProduct(response.data)                   
                })
                .catch((err)=>{
                    console.log(err);
                })
    },[])
  return (
    <React.Fragment>
        <div id='search'>
            <input type='search'/>
            <button className='searchbtn'>Search</button>
        </div>
        <div>
        {
          product.map((ele,index)=>{
            return (<div key={index} className='product'>
                <div>
                    <img src={ele.image} alt="" height={157} width={150}/>
                </div>
                <div className='name'>
                <h4 >{ele.name}</h4>
                </div> 
                <div className='price'>
                   <h4><FaRupeeSign size={23}/>  {ele.price}</h4> 
                </div>
                {
                    ele.type==="tablet"?<p className='tab'>/per 10 tablets </p>:<></>
                }
                <div className='cart'>
                   <h5>Cart</h5> 
                </div>
                <div className='buy'>
                    <h5>Buy</h5>
                </div>
                
                
                 </div>)
          })
        }
        </div>
    </React.Fragment>
  )
}

export default Product