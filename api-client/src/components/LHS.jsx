import React, { useState } from 'react'
import './lhs.style.css'
const LHS = () => {
    let [reqType , setReqType] = useState() ;
    let [url ,setUrl] = useState() ;
    let [body, setBody] =useState() ;
    let [response, setResponse] = useState('response') ;

    var setAllvalue = async () => {
        if(reqType === 'GET'){
            try {
                let res = await fetch(url,{
                    method:reqType,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    
                }) ;
                let data = await res.json() ;
                setResponse(data) ;
            } catch (error) {
                console.log(error) ;
            }

            return ;
           
        }else{
            
            let data = {
                request_type: reqType,
                Url : url  ,
                body : JSON.parse(body)
            }
            try {
                fetch(data.Url , {
                    method:data.request_type,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data.body),
                }).then((response) => response.json())
                .then((response) => {setResponse({message:response , status : "200 Ok"})})
            } catch (error) {
                console.log(error) 
            }
        }
        
        return ;
    }
    









  return (
    <div className='main' >
        <div className='lhsmaindiv'>
            <h1>-------------- API Testing Region ---------------- </h1>
            <div>
                <span><select style={{ width:"80px" , height:"35px"}} value={reqType} onChange={(e)=>{setReqType(e.target.value)}} >
                    <option value="">Select</option>
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PATCH">PATCH</option>
                    <option value="DELETE">DELETE</option>
                    </select></span>
                <input style={{ height:"30px" , width:"530px" }} type="text" placeholder='Enter your Api here' onChange={(e)=>{setUrl(e.target.value)}}  />
                <span><button style={{backgroundColor:"#87CEEB", width:"80px" , height:"35px"}} onClick={()=>{setAllvalue()}}>Send</button></span>
            </div>
            <div>
                <textarea style={{ height:"300px", width:"690px" , marginTop:"20px" }} type="text" onChange={(e)=>{setBody(e.target.value)}} />
            </div>
        </div>
        <div className='rhsmaindiv'>
            <h1>------------- API Response Region --------------- </h1>
            <div className='extra'>
            </div>
            <div>
                
                <textarea style={{ height:"300px", width:"690px" , marginTop:"20px" }} type="text" value={JSON.stringify(response)} />
            </div>
        </div>
    </div>
  )
}

export default LHS