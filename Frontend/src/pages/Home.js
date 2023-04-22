import React from 'react'
import image1 from '../assets/image1.png'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='w-9/12 h-[100vh]  mx-auto flex justify-center items-center p-10 gap-20'>
            <NavLink to='/movies' className='w-[50%] bg-orange-400 h-[500px] rounded-3xl text-7xl text-left flex  flex-col justify-center gap-8 pl-10 text-white font-extrabold hover:shadow-[0px_20px_50px_#f6ad55] hover:cursor-pointer transition duration-200 hover:-translate-y-5'>
               
                <span>Book</span> <span>Movie</span> <span>Tickets</span>
                
            </NavLink>

            <NavLink to='/shows' className='w-[50%] bg-sky-600 h-[500px] rounded-3xl text-7xl flex flex-col justify-center text-left gap-8 pl-10 text-white font-extrabold hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:cursor-pointer transition duration-200 hover:-translate-y-5'>
                <span>Book</span> <span>Shows</span> <span>Tickets</span>
            </NavLink>
      </div>
    </div>
  )
}

export default Home
