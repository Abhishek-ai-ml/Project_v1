import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai'

const Signup = (props) => {
    // let setUsername = props.setUsername;
    const [formData, setFormData] = useState({username:'', email:'', phoneNo:'', password:'', confirmPassword:''});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    function submitHandler(event) {
        
        if(formData.password === formData.confirmPassword) {
            event.preventDefault();
            console.log(formData);
            // setUsername(formData.username);
            toast.success('SignUp successfull');
            toast.success('Now Login to Continue');
            navigate('/login');
        }
        else {
            event.preventDefault();
            toast.error('Password doesnot matches');
        }
    }

    function changeHandler(event) {
        setFormData( (prev)=> ({...prev, [event.target.name]:event.target.value}));
    }

    function passwordHandler(event) {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    function confirmPasswordHandler(event) {
        event.preventDefault();
        setShowConfirmPassword(!showConfirmPassword);
    }


  return (
    <div className='relative pt-40 pb-10 bg-slate-300'>
      <div className='w-9/12 mx-auto'>
        <form onSubmit={submitHandler} className='mx-auto py-24 w-[60%] rounded-3xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] flex flex-col gap-y-10 items-center justify-center h-[75vh] login-page'>
            <div className='flex w-[80%] px-10 gap-3 items-center justify-between'>
                <label htmlFor='username' className='text-lg font-bold text-blue-900'>Name:</label>
                <input type='text' required id='username' name='username' placeholder='Enter your name' onChange={changeHandler} value={formData.name}
                    className='px-5 py-2 rounded-lg border-2 border-blue-900 bg-transparent text-blue-900 font-bold text-md'
                />
            </div>

            <div className='flex w-[80%] px-10 gap-3 items-center justify-between'>
                <label htmlFor='email' className='text-lg font-bold text-blue-900'>Email:</label>
                <input type='email' required id='email' name='email' placeholder='Enter your Email' onChange={changeHandler} value={formData.email}
                    className='px-5 py-2 rounded-lg border-2 border-blue-900 bg-transparent text-blue-900 font-bold text-md'
                />
            </div>

            <div className='flex w-[80%] px-10 gap-3 items-center justify-between'>
                <label htmlFor='phoneNo' className='text-lg font-bold text-blue-900'>Phone Number:</label>
                <input type='text' required id='phoneNo' name='phoneNo' placeholder='Enter your Number' onChange={changeHandler} value={formData.phoneNo}
                    className='px-5 py-2 rounded-lg border-2 border-blue-900 bg-transparent text-blue-900 font-bold text-md'
                />
            </div>
            
            <div className='flex w-[80%] px-10 gap-3 items-center justify-between relative'>
                <label htmlFor='password' className='text-lg font-bold text-blue-900'>Password</label>
                <input type={showPassword ? 'text' : 'password'} required id='password' name='password' placeholder='Enter Password' onChange={changeHandler} value={formData.password}
                    className='px-5 py-2 rounded-lg border-2 border-blue-900 bg-transparent text-blue-900 font-bold text-md'
                />
                <button onClick={passwordHandler} className='absolute top-2 right-12'>
                    {
                        showPassword ? (<AiOutlineEyeInvisible color={`rgb(30 ,58, 138)`}  fontSize='1.5rem'/>) : (<AiOutlineEye color={`rgb(30 ,58, 138)`} fontSize='1.5rem'/>)
                    }
                </button>
            </div>

            <div className='flex w-[80%] px-10 gap-3 items-center justify-between relative'>
                <label htmlFor='confirmPassword' className='text-lg font-bold text-blue-900'>Confirm Password</label>
                <input type={showConfirmPassword ? 'text' : 'password'} required id='confirmPassword' name='confirmPassword' placeholder='Confirm Password' onChange={changeHandler} value={formData.confirmPassword}
                    className='px-5 py-2 rounded-lg border-2 border-blue-900 bg-transparent text-blue-900 font-bold text-md'
                />
                <button onClick={confirmPasswordHandler} className='absolute top-2 right-12'>
                    {
                        showConfirmPassword ? (<AiOutlineEyeInvisible color={`rgb(30 ,58, 138)`}  fontSize='1.5rem'/>) : (<AiOutlineEye color={`rgb(30 ,58, 138)`} fontSize='1.5rem'/>)
                    }
                </button>
            </div>

            <button className=' rounded-xl text-md font-bold py-2 px-20 border-blue-900 border-4 transition-all duration-200 ease-in text-blue-900 hover:bg-blue-900 hover:text-white'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
