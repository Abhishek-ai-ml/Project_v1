import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import { useState } from "react";
import Nopage from "./pages/Nopage";
import Login from "./pages/Login";
import data from "./utils/Movies";
import data2 from "./utils/Upcoming"
import actorsData from "./utils/Actors";
import MovieDetails from "./pages/MovieDetails";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import BookTicket  from "./pages/BookTicket";
import SeatSelection from "./pages/SeatSelection";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movie, setMovie] = useState(data[0]);
  const [notifyMovie, setNotifyMovie] = useState([]);
  const [link, setLink] = useState(data[0].Title.replaceAll(" ", "-").toLowerCase());
  const [searchLink, setSearchLink] = useState();
  const [username, setUsername] = useState();
  const [audi, setAudi] = useState(0);

  // const navigate = useNavigate(`movies/${searchLink}`);

  console.log('movies data');
  console.log(movie);
  console.log(link);
  console.log(searchLink);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setSearchLink={setSearchLink}/>

      {
        isLoggedIn &&
        <div className="relative w-9/12 mx-auto text-3xl text-blue-900 left-12 font-extrabold top-40 -z-10"> HI {username}</div>
      }

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/movies" element={<Movies data={data} data2={data2} actorsData={actorsData} setLink={setLink} setMovie={setMovie}/>}/>
        <Route path="/shows" element={<Shows/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} setUsername={setUsername}/>}/>
        <Route path={`/movies/${link}`} element={<MovieDetails movie={movie} actorsData={actorsData} isLoggedIn={isLoggedIn} setNotifyMovie={setNotifyMovie} setAudi={setAudi}/>}/> 
        <Route path="/dashboard" element={<Dashboard notifyMovie={notifyMovie}/>}/>
        <Route path='/book-ticket' element={<BookTicket movie={movie} setAudi={setAudi}/>}/>
        <Route path={searchLink ? `movies/${searchLink}` : '/movies'} element={<MovieDetails movie={movie} actorsData={actorsData}/>}/> 
        <Route path='/book-ticket/seat-selection' element={<SeatSelection audi={audi}/>}/>
        <Route path='*' element={<Nopage/>}/>
      </Routes>
    </div>
  );
}

export default App;
