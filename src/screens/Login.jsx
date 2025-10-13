
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
const Login = () => {

     const [credentials, setcredentials] = useState({ email:"", password:""})
           let navigate = useNavigate() 
    
        const handleSubmit =async (e)=>{
            e.preventDefault();          //-----------------SYNTHETIC EVENT
            const response = await fetch("https://vercel-backend-6e4o.vercel.app/api/loginuser",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({ email:credentials.email, password:credentials.password})
            })
            const json = await response.json()
            console.log(json)
                                                              
    
              if (json.success) {
               localStorage.setItem("userEmail",credentials.email);
               localStorage.setItem("authToken",json.authToken);
               console.log(localStorage.getItem("authToken")) 
               navigate("/");
              } else {
                alert("Enter Valid Credentials");
    }
    
        }
    
        const onChange=(event)=>{
            setcredentials({...credentials,[event.target.name]:event.target.value})
        }


  return (
    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', }}>
      <div>
        <Navbar />
      </div>

    <div className='d-flex justify-content-center align-items-center' style={{ height: "85vh" }}>
    <form className='p-4 rounded-4 shadow-lg' 
    style={{ width: "380px", backgroundColor:'rgba(0,0,0,0.75)',backdropFilter:'blur(4px)',color:'white',}}
    onSubmit={handleSubmit}>
      <h3 className='text-center mb-4' style={{color:'#4ce37f'}}>Welcome Back 🍴</h3>

  <div className="m-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control bg-dark text-white border-0" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control form-control bg-dark text-white border-0" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange} name='password'/>
  </div>
  <button type="submit" className="btn btn-success ms-4 px-4 fw-semibold">LOGIN</button>

  {/* Already a User then Login in your Account */}

  <Link to="/createuser" className='btn btn-danger ms-5 px-2 fw-semibold'>I'M A NEW USER</Link>
  <p className='text-center mt-3 text-secondary'
  style={{ fontSize:'0.9rem'}}>
    Don't have an account?{""}
    <Link to="/createuser" className='text-success text-decoration-none'>Sign up</Link>
  </p>
</form>
</div>
</div>
  )
}

export default Login