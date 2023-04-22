import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import MovieDetails from '../pages/MovieDetails';
import { Route, Routes } from 'react-router-dom';

const Card = (props) => {
    let movie = props.movie;
    let setMovie = props.setMovie;
    let setLink = props.setLink;
   

    let genere = "";

    movie.Genre.map((gen) => {genere+=gen+'/'})
    genere=genere.slice(0,-1);

    let text = movie.Title.replaceAll(":", "-");

    let link = text.replaceAll(" ", "-").toLowerCase();

    function clickHandler () {
        setMovie(movie);
        setLink(link);
    }

    // const navigate = useNavigate(`{/}`);
  return (
    <div className='mx-auto'>
      <NavLink to={link}  className='flex flex-col p-5  w-[280px] rounded-2xl hover:scale-105 hover:shadow-[0px_0px_23px_10px_#cbd5e0] hover:cursor-pointer transition duration-300 scroll-smooth outline-1 outline-slate-500'>
        <img src={movie.Poster} className='w-full h-[350px]' onClick={clickHandler}/>

        <div className='text-lg font-bold text-left pt-2'>{movie.Title}</div>

        <div>{genere}</div>



      </NavLink>

      {/* <Routes>
        <Route path={`/movies/${link}`} element={<MovieDetails movie={movie}/>}/>
      </Routes> */}
    </div>
  )
}

export default Card
