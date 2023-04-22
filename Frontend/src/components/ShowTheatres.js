import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const ShowTheatres = (props) => {
    let theatre = props.theatre;
    let movie = props.movie;
    let setAudi = props.setAudi;
    let timeH = '';
    let timeM = '';

    const navigate = useNavigate();

    // function clickHandler(movieShow) {
    //     setAudi(movieShow);
    //     navigate('/book-ticket/seat-selection');
    // }

    timeH+=parseInt(movie.RunTime/60);
    timeM+=movie.RunTime%60;
    

  return (
    <div className='relative top-[300px] -left-[550px] flex flex-col'>
      
      <div className='flex flex-col gap-y-2'>
        <div className='text-2xl text-blue-900 font-extrabold border-b-4 border-blue-900'>{theatre.name}</div>
        <div className='flex gap-x-5 '>
            {/* {
                theatre.Audi.map( (movieShow, index) => (
                    
                    theatre.movieShowing[index] === movie.Id &&
                    <div className='text-lg text-blue-900 font-extrabold px-5 py-2 border-blue-900 border-2 rounded-xl hover:bg-blue-900 hover:text-white group transition-all duration-200 ease-in'>
                        <span className='pl-1 text-lg text-blue-900 font-extrabold group-hover:text-white transition-all duration-200'>Audi-</span>{movieShow}
                    </div>
                ))
            } */}
            {/* {
                theatre.movieShowing.map( (m) => (
                    m === movie.Id && (
                        theatre.Audi.map( (movieShow) => (
                            <button onClick={ () => {
                                setAudi(movieShow);
                                navigate('/book-ticket/seat-selection');
                            }} className='text-lg text-blue-900 font-extrabold px-5 py-2 border-blue-900 border-2 rounded-xl hover:bg-blue-900 hover:text-white group transition-all duration-200 ease-in'>
                                <span className='pl-1 text-lg text-blue-900 font-extrabold group-hover:text-white transition-all duration-200'>Audi-</span>{movieShow}
                            </button>
                        ))
                    )
                ))
            } */}
            {
                theatre.movieShowing.map( (m) => (
                    m === movie.Id && (
                        theatre.movieTiming.map( (movieTime) => (
                            <button onClick={ () => {
                                setAudi(theatre.Audi);
                                console.log('Printing theatre audisss');
                                console.log(theatre.Audi);
                                navigate('/book-ticket/seat-selection');
                            }} className='text-lg text-blue-900 font-extrabold px-5 py-2 border-blue-900 border-2 rounded-xl hover:bg-blue-900 hover:text-white group transition-all duration-200 ease-in'>
                                <div><span className='pl-1 text-lg text-blue-900 font-extrabold group-hover:text-white transition-all duration-200'>{parseInt(movieTime)}<span>to</span>{parseInt(movieTime) + parseInt(timeH)}<span>:{parseInt(timeM)}</span></span></div>
                                {/* {
                                    theatre.movieTiming.map( (movieTime) => (
                                        <div><span className='pl-1 text-lg text-blue-900 font-extrabold group-hover:text-white transition-all duration-200'>{parseInt(movieTime)}<span>to</span>{parseInt(movieTime) + parseInt(timeH)}<span>:{parseInt(timeM)}</span></span></div>
                                    ))
                                } */}
                            </button>
                        ))
                    )
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default ShowTheatres
