import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar';

const Signup = () => {
    const [credentials, setcredentials] = useState({ name:"", email:"", password:"",geolocation:""})
    
    let navigate = useNavigate();

    const handleSubmit =async (e)=>{
        e.preventDefault();          //-----------------SYNTHETIC EVENT
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation})
        })
        const json = await response.json()
        console.log(json)

        // if(json.success){
        //     alert("Enter Valid Credentials")
        // }

          if (json.success) {
             //save the auth toke to local storage and redirect
                localStorage.setItem('token', json.authToken)
                navigate("/login")
          } else {
            alert("Enter Valid Credentials");
}

    }

    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }

  return (
    <>
      <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh',backgroundPosition:'center', }}>
      <div>
      <Navbar />
      </div>

<div className='d-flex justify-content-center align-items-center' style={{ height:'85vh'}}>
    <form className='p-4 rounded-4 shadow-lg'
    style={{ width:'400px', backgroundColor:'rgba(0, 0, 0, 0.75)',backdropFilter:'blur(4px)', color:'white',}}
    onSubmit={handleSubmit}>

        <h3 className="text-center mb-4" style={{ color: "#4ce37f" }}>
              Create Your Account 🍽️
            </h3>

    <div className="m-3">
    <label htmlFor="name" className="form-label">Full Name</label>
    <input type="text" className="form-control bg-dark text-white border-0" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp"/>
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control  bg-dark text-white border-0" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control  bg-dark text-white border-0" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div className="m-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input type="text" className="form-control  bg-dark text-white border-0" name='geolocation' value={credentials.geolocation} onChange={onChange} aria-describedby="emailHelp" placeholder='Enter your delivery address'/>
  </div>
  <button type="submit" className="btn btn-success px-4 ms-4 fw-semibold">SIGN UP</button>

  {/* Already a User then Login in your Account */}

  <Link to="/login" className='btn btn-danger fw-semibold px-3 ms-4 text-decoration-none'>Already a user</Link>
</form>
</div>
</div>
    </>
  )
}

export default Signup;