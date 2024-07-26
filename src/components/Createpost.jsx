import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Createpost = () => {

    const [data,changedata]=useState(
        {
            "userId":sessionStorage.getItem("userid"),
            "Message":""  
            
        }
    )
    
    const inputHandler=(event)=>{
        changedata({...data,[event.target.name]:event.target.value})
    }
    
    const readValue=()=>{
        axios.post("http://localhost:8080/create",data,{headers:{"token":sessionStorage.getItem("token"),"Content-Type":"application/json"}}).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="Success") {
    
                    alert("add successfully")
                    
                } else {
                    alert("error")
                    
                }
            }
        )
        console.log(data)
    }
    

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">post a message</label>
<textarea name="Message" id="" className="form-control" value={data.Message} onChange={inputHandler}></textarea>


    </div>
    
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


<button className="btn btn-success" onClick={readValue}>Submit</button>

    </div>
</div>

        </div>
    </div>
</div>


    </div>
  )
}

export default Createpost
