import React from 'react'
import Card from '../components/Card';
import { useState } from 'react';

const Movies = (props) => {
    let data = props.data;
    let data2 = props.data2;
    let actorsData = props.actorsData;
    let setMovie = props.setMovie;
    let setLink = props.setLink;
    const [seeAll, setSeeAll] = useState(false);

    const [seeAllUpcoming, setSeeAllUpcoming] = useState(false);

    function clickHandler() {
        setSeeAll(!seeAll);
    }

    function clickHandlerUpcoming() {
        setSeeAllUpcoming(!seeAllUpcoming);
    }

    console.log('print all data');
    console.log(data);

  return (
    <div className='relative top-52 w-full '>
        <div  className='flex mx-auto w-8/12 justify-between'>
            <h1 className='text-3xl font-bold'>Recent Movies</h1>
            <button className='text-red-500' onClick={clickHandler}>
                {
                    seeAll ? 'show less' : 'see all'
                }
            </button>
        </div>
      <div className={`flex w-9/12 pt-10 pl-5 mx-auto flex-wrap gap-y-12  ${seeAll ? "h-full" : "h-[510px]"} overflow-hidden `}>
        {
            data.map( (movie) => <Card movie={movie} actorsData={actorsData} setMovie={setMovie} setLink={setLink}/>)
        }
      </div>


      <div  className='flex mx-auto w-8/12 justify-between mt-16'>
            <h1 className='text-3xl font-bold'>Upcoming Movies</h1>
            <button className='text-red-500' onClick={clickHandlerUpcoming}>
                {
                    seeAllUpcoming ? 'show less' : 'see all'
                }
            </button>
        </div>
      <div className={`flex w-9/12 pt-10 pl-5 mx-auto flex-wrap gap-y-12  ${seeAllUpcoming ? "h-full" : "h-[510px]"} overflow-hidden `}>
        {
            data2.map( (movie) => <Card movie={movie} actorsData={actorsData} setMovie={setMovie} setLink={setLink}/>)
        }
      </div>
    </div>
  )
}

export default Movies
