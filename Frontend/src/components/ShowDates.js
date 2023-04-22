import React from 'react'

const ShowDates = (props) => {
    let date = props.date;
  return (
    <div className='relative top-48 h-10'>
      <div className='w-[500px] mx-auto flex items-center gap-x-2 border-b-4 border-blue-900'>
        <div className='text-blue-900 font-extrabold text-2xl'>Tickets for</div>
        <div className='text-blue-900 font-extrabold text-2xl'>{date[2]}</div>
        <div className='text-blue-900 font-extrabold text-2xl'>{date[1]}</div>
      </div>
    </div>
  )
}

export default ShowDates
