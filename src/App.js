import {useState, Fragment} from 'react'
import './App.css';
import Movies from './Movies'
import MovieInfo from './MovieInfo'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [movie, setMovie] = useState({})
  const [genre, setGenre] = useState([])
  const [cast, setCast] = useState([])
  
  const getMovie = (id) => {
    axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=9270421e43cc32ed6056cad8de3c2c67&append_to_response=images').then((res) => setMovie(res.data));
    setGenre(movie.genre)
    axios.get('https://api.themoviedb.org/3/movie/'+id+'/credits?api_key=9270421e43cc32ed6056cad8de3c2c67&language=en-US&&append_to_response=videos').then((res) => setCast(res.data.cast.slice(0, 4)))
  }
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <Fragment>
            <div >
              <Movies />
            </div>          
          </Fragment>
        }/>
        <Route exact path='/signin/callback' element={<Movies />} />
        <Route exact path='/movie/:id' element={<MovieInfo getMovie={getMovie} genre={genre} movie={movie} cast={cast}/>} />
      </Routes>
    </Router>
      
    
  );
}

export default App;
