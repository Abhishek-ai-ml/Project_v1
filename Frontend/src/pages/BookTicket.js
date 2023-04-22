import React from 'react';
import audiData from '../utils/Audi';
import theatreData from '../utils/Theatre';
import SideBar from '../components/SideBar';
import ShowDates from '../components/ShowDates';
import ShowTheatres from '../components/ShowTheatres';

const BookTicket = (props) => {
  let date = Date().split(" ");
  let movie = props.movie;
  let setAudi = props.setAudi;
  
  return (
    <div className=''>
      <div className='w-9/12 mx-auto flex gap-x-14'>
        <SideBar movie={movie}/>
        <ShowDates date={date}/>
        <div className='flex flex-col gap-y-5'>
          {
            theatreData.map( (theatre) => (<ShowTheatres theatre={theatre} movie={movie} setAudi={setAudi}/>))
          }
        </div>
      </div>
    </div>
  )
}

export default BookTicket
