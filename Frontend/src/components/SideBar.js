import React from 'react'

const SideBar = (props) => {
    let movie = props.movie;
  return (
    <div className=' relative top-44 pt-5'>
      <div className='w-[250px] '>
        <div className='w-full flex flex-col  items-center gap-y-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-2xl'>
            <h1 className='text-md text-blue-900 font-extrabold border-b-2 border-blue-900'>{movie.Title}</h1>
            <div><img src={movie.Poster}/></div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
