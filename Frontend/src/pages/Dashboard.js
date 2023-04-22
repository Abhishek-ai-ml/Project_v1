import React, { useEffect, useState } from 'react'

const Dashboard = (props) => {
    let notifyMovie = props.notifyMovie;
    console.log('Inside Dashboard');
    console.log(notifyMovie);

    // notifyMovie.push(movie);
    // setNotifyMovie( (prevMovie) => [...prevMovie, movie]);
    // setNotifyMovie( (prev) => [...prev, movie]);
    // setNotifyMovie(notifyMovie);

    // let notifyMovie = [];

  return (
    <div className='relative top-44'>

        <div className='w-9/12 mx-auto mt-10 notify-movie-bg rounded-xl'>
          <div className=' underline text-red-900 text-3xl font-extrabold px-10 pt-5'>Notify Movies List</div>

          <div className='flex flex-col mt-5 px-10 py-5'>
          {
              notifyMovie.map( (m) => (
                  <div key={m.id} className='flex gap-x-10 pt-5 border-b-4 border-blue-900 pb-2 justify-between'>
                    <div className='text-blue-900 font-extrabold text-xl'>{m.Title}</div>
                    <div className='text-blue-900 font-medium text-lg'>{m.ReleaseDate}</div>
                  </div>
              ))
          }
          </div>
        </div>
    </div>
  )
}

export default Dashboard
