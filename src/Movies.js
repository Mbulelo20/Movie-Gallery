import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

const Movies = () => {
  const [movies, setMovies] = useState({})
  const [movie_title, setMovie_title] = useState('')
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+process.env.REACT_APP_API_KEY+'&language=en-US&page='+page).then((res) => setMovies(res.data.results)).then(() => setLoading(false));
  },[page]) ;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMovie_title(movie_title)
    axios.get('https://api.themoviedb.org/3/search/movie?api_key='+process.env.REACT_APP_API_KEY+'&query='+ movie_title).then((res) => setMovies(res.data.results));
    setLoading(false);
  }
  
  const next = () => {
    setPage(page + 1)
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+process.env.REACT_APP_API_KEY+'&language=en-US&page='+page).then((res) => setMovies(res.data.results)).then(() => setLoading(false));
    window.scroll(0,0)
  }
  const previous = () => {
    setPage(page - 1)
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+process.env.REACT_APP_API_KEY+'&language=en-US&page='+page).then((res) => setMovies(res.data.results)).then(() => setLoading(false));
    window.scroll(0,0)
  }
  
  if(loading){
    return <h3 className="mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">Loading...</h3>
  }else {
    return (
      <div className="bg-white">
        
        <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24" style={{maxWidth: '75%'}}>
          <div className="space-y-12">
            <form className='m-auto mt-1 w-1/2' onSubmit={handleSubmit}>
              <div className="mt-1 border-b border-gray-300 form-control focus-within:border-indigo-600">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full border-0 border-b border-transparent bg-gray-100 focus:border-indigo-600 focus:ring-0 sm:text-sm"
                  placeholder="search your movies..."
                  value={movie_title}
                  onChange={(e) => setMovie_title(e.target.value)}
                />
              </div>
              <button
                type="submit" 
                // disabled={!movie_title}
                onClick={(e) => handleSubmit(e)}
                className=" m-auto mt-1 items-center px-4 py-2 border border-transparent text-sm font-medium shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Search
              </button>
              
            </form>
            <div className="mt-9">
              <ul className="space-y-1 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-19 sm:space-y-0 lg:grid-cols-4 lg:gap-y-9 lg:gap-x-9">
                {movies.length > 0 && movies.map((movie) => (
                  <li key={movie.id}>
                    <Link to={`/movie/${movie.id}`} className="btn btn-dark btn-sm my-1">
                      <div className="space-y-4 bg-gray-300 shadow-lg ">
                          <div className="aspect-w-3 aspect-h-3">
                            <img className="object-cover " src={'http://image.tmdb.org/t/p/w500/'+ movie.poster_path} alt=""/>
                          </div>
                          <div className="mt-5">
                            <div className="text-lg flex leading-6 ml-1 font-medium space-y-1">
                              <h1 className="text-md text-gray-900">
                              {(() => {
                                if (movie.original_title.length > 30) {
                                  return movie.original_title.slice(0, 26) +'...'
                                  
                                }else {
                                  return movie.original_title
                                }
                              })()}
                              </h1>
                              <p className="text-sm text-gray-900" style={{textAlign: 'right'}}>({movie.release_date.slice(0,4)})</p>

                            </div>
                            <span className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="orange">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <p className="text-sm">{movie.vote_average}</p> 
                              </span>
                          </div>
                      </div>
                    </Link>
                  </li>
                  ))
                }
              </ul>
            </div>
          </div>

          <div className="mt-7">
            <nav
      className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Page {page}
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <button
          onClick={previous}
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100"
        >
          Previous
        </button>
        <button
          onClick={next}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100"
        >
          Next
        </button>
      </div>
    </nav>
          </div>
        </div>

      </div>
    )
  }
}

export default Movies;