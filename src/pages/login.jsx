import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function App() {
 // const [email, setEmail] = useState("....")
  // const [pass, setPass] = useState("")
  const[formdata,setformdata]=useState({
    email:"",
    password:""
  })
  function HandleChange(e){
    e.preventDefault()
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const navigate=useNavigate();



  function print(){
    console.log("printing inside the print function")
    console.log(email,pass)
  }
  const e = (event) => {
    event.preventDefault()
    console.log(formdata.email,formdata.password)

    navigate("/dashboard",{state:formdata})
  }
  return (
        
        <div>
            {/*<h6 className="text-blue-500">Cr7</h6>
            <input type='email' required placeholder='enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <br></br>
            <input type='password' required placeholder='enter your password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
            <br></br>
            <button type='button' className="text-green-500" onClick={()=>console.log(email,pass)}>Submit</button>
            <br></br>
            <button type='button' className="text-green-500" onClick={()=>print()}>Submit</button> 
            */}
            
        
    
        <form onSubmit={e}>
            <input type='email' required placeholder='enter your email' name='email' onChange={HandleChange}/>
            <br></br>
            <input type='password' required placeholder='enter your password' name='password' onChange={HandleChange}/>
            <br></br>
            <button type='submit' className="text-green-500">Submit</button>
        </form>
      </div>
    )
}

export default App