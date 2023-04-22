import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai'


const Login = ({setIsLoggedIn, setUsername}) => {

  const [loginData, setLoginData] = useState({email:'', password:''});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event) {
    setLoginData( (prev)=> ({...prev, [event.target.name]:event.target.value}));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    console.log('login Data');
    console.log(loginData);
    toast.success('Login Successfully');
    navigate('/dashboard')
  }

  

  function passwordHandler(event) {
    event.preventDefault();
    setShowPassword(!showPassword);
  }

  let name = loginData.email.split('@').at(0).toUpperCase();

  setUsername(name);


  return (
    <div className='relative pt-44 bg-slate-300 h-screen'>

      <div className='mx-auto w-9/12'>
        <form onSubmit={submitHandler} className='mx-auto py-24 w-[50%] rounded-3xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] flex flex-col gap-y-10 items-center justify-center h-[60vh] login-page'>
          <div className='flex flex-col  gap-3 items-start justify-start '>
            <label htmlFor='email' className='text-md font-bold text-blue-900'>Email:</label>
            <input type='email' required name='email' id='email' placeholder='Enter your Email address' onChange={changeHandler} value={loginData.email}
              className='px-5 py-2 rounded-lg border-2 border-blue-900 bg-transparent text-blue-900 font-bold text-md'
            />
          </div>

          <div className='flex flex-col gap-3 items-start justify-start relative'>
            <label className='text-md font-bold text-blue-900'>Password :</label>
            <input type={showPassword ? 'text' : 'password'} required name='password' id='password' placeholder='Enter password' onChange={changeHandler} value={loginData.password}
              className='px-5 py-2 rounded-lg border-2 border-blue-900 bg-transparent text-blue-900 font-bold text-md'
            />
            <button onClick={passwordHandler} className='absolute top-12 right-5'>
              {
                showPassword ? (<AiOutlineEyeInvisible color={`rgb(30 ,58, 138)`}  fontSize='1.5rem'/>) : (<AiOutlineEye color={`rgb(30 ,58, 138)`} fontSize='1.5rem'/>)
              }
            </button>
          </div>

          <button className=' rounded-xl text-md font-bold py-2 px-20 border-blue-900 border-4 transition-all duration-200 ease-in text-blue-900 hover:bg-blue-900 hover:text-white'>Login</button>
        </form>
      </div>


    </div>
  )
}

export default Login
