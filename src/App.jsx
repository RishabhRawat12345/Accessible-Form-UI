import React, { useEffect, useState } from 'react'
import './App.css'
import { FaEye, FaEyeSlash } from "react-icons/fa";


const App = () => {
  const [pass,Setpass]=useState(false);
  const [confirm,Setconfirm]=useState(false);
  const[progress,Setprogress]=useState(0)
  useEffect(()=>{
   const totalval=Object.keys(form).length;
   const valfield=Object.values(form).filter((v)=>v.trim()!=="").length;
   const  finalans=Math.round((valfield/totalval)*100);
   Setprogress(finalans);
  })
  const [form,Setform]=useState({
    name:'',
    email:'',
    password:'',
    confirmpass:''
  })

  const handlechange=(e)=>{
    const {name,value}=e.target;
    Setform((prev)=>({...prev,[name]:value}))
  }
  return (
    <div className='main'>

      <form action="">
        <label>FullName</label>
        <input name='name' value={form.name} type="text" onChange={handlechange}  />
         <label htmlFor="">Email</label>
         <input name='email' value={form.email} onChange={handlechange} type="text" />
         <label htmlFor="">Enter the password</label>
         <div className="pass-wrap">
            <input name='password' value={form.password}  onChange={handlechange}  type={pass ? "text" : "password"}/>
        <button
  type="button"
  className="btn"
  onClick={() => Setpass(!pass)}
>
  {pass ? <FaEyeSlash color="#333" /> : <FaEye color="#333" />}
</button>

         </div>
        

         <label htmlFor="">Confirm the password</label>
         <div className="wrap">
            <input name='confirmpass' value={form.confirmpass} onChange={handlechange} type={confirm?"text":"password"} />

          <button type='button' className='btn1' onClick={()=>Setconfirm(!confirm)}>
            {confirm ?<FaEyeSlash color='#333'/>:<FaEye color='#333'/>}
          </button>
         </div>
          
         <button>Submit</button>
      </form>


     <div className="circle">
        <div
          className="progress-ring"
          style={{ background: `conic-gradient(#4caf50 ${progress * 3.6}deg, #e0e0e0 ${progress * 3.6}deg)` }}
        ></div>
        <div className="inner-circle">
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  )
}

export default App