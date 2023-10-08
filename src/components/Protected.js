import React,{useEffect, useState} from 'react'
import axios from 'axios';

const Protected = () => {
    const [state,setState]=useState([]);

    useEffect(()=>{
        let config = {
            headers: {
              Authorization: localStorage.getItem("token"),
            }
          }
        axios.get("http://localhost:8090/crud",config).then(data=>{
            console.log(data.data.data);
            setState(data.data.data)
        }).catch(err=>{
            console.log(err);
        })

    },[])
  return (
    <div>
        {
            state.map(ele=>(
                <h1>{ele.userName}</h1>
            ))
        }


    </div>
  )
}

export default Protected