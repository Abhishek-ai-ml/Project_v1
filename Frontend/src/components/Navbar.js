import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import {CgProfile} from 'react-icons/cg'

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    let setSearchLink = props.setSearchLink;

    const [link, setLink] = useState('');

  
    const navigate = useNavigate();

    function changeHandler(event) {
        setLink(event.target.value);
    }
 

    function submitHandler(event) {
        event.preventDefault();
        navigate(`/movies/${link}`)
        setSearchLink(link);
    }

  return (
    <div className='bg-slate-800 p-5 fixed top-0 left-0 right-0 z-50'>
      <nav className='flex justify-between w-9/12 mx-auto items-center'>
        <NavLink to='/' className='text-white text-2xl font-bold'>
            bookMyshow
        </NavLink>

        <form onSubmit={submitHandler} className='px-5 py-2'>
            <input type='search' placeholder='Search Movies & Shows' onChange={changeHandler} className='px-5 py-2 w-[450px] rounded-3xl'/>
        </form>

        <div className='flex justify-center items-end gap-x-4'>
            {/* <div>
                <select className='py-2 rounded-xl px-4 text-white bg-slate-800'>
                    <option>Delhi-NCR</option>
                    <option>Mumbai</option>
                    <option>Banglore</option>
                </select>
            </div> */}


            <div className='text-white'>
                <div className='flex gap-x-10'>
                {
                    !isLoggedIn && 
                    <NavLink to='/login'>
                        <button>Login</button> 
                    </NavLink>
                    
                }

                {
                    !isLoggedIn && 
                    <NavLink to='/signup'>
                        <button>Sign Up</button>
                    </NavLink>
                }

                </div>

                <div className='flex gap-5 items-center'>
                {
                    isLoggedIn &&
                    <NavLink to='/'>
                        <button onClick={() => {
                            setIsLoggedIn(false);
                            toast.success('Log out successfully');
                        }}>Log Out</button>
                    </NavLink>
                }

                {
                    isLoggedIn && <div>
                        <NavLink to='/dashboard'><CgProfile fontSize='2rem'/></NavLink>
                    </div>
                }
                </div>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
