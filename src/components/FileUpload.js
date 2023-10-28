import React,{useState} from 'react'
import axios from 'axios';
const FileUpload = () => {
    const [file,setFile]=useState("");
    const [uploadedImage,setUploadedImage]=useState("");
    const fileChange=(event)=>{
        console.log(event.target.files[0]);
        setFile(event.target.files[0]);

    }

    const uploadToServer=()=>{
        const formdata=new FormData();
        formdata.set("file",file)
        axios.post("http://localhost:8080/upload",formdata).then(result=>{
            console.log(result.data);
            setUploadedImage(result.data.data)
        }).catch(err=>{
            console.log(err);
        })

    }
  return (
    <div>
        <h1>FileUpload</h1>
        <input type='file' onChange={fileChange}/>
        <button onClick={uploadToServer}>
            Upload File to Server
        </button>

        <div>
            <h2>Uploaded Image</h2>

            <img src={uploadedImage} width={"200px"} height={"200px"}/>
        </div>


    </div>
  )
}

export default FileUpload