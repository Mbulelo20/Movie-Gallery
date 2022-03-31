import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";

const MovieInfo = ({getMovie, movie, cast}) => {
    const id = useParams().id
    // const [genre, setGenre] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getMovie(id)
        // setGenre(movie.genres)
        setLoading(false)
    }, [id, getMovie, movie])

    if(loading){
      return <h3 className="mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">Loading...</h3>
    } else{
    return (
        <div className="bg-white overflow-hidden">
      <div className="relative mx-auto py-16 px-4 sm:px-6 lg:px-8" style={{maxWidth: '75%'}}>
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 ml-9 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={'http://image.tmdb.org/t/p/w500/'+ movie.poster_path} 
                    alt="Whitney leaning against a railing on a downtown street"
                    height={1376}
                    style={{minWidth:'500px'}}
                  />
                </div>
                
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <div>
                    <h3 className="mt-1 text-3xl leading-8 font-extrabold tracking-tight text-gray-500 sm:text-4xl">
                        {movie.original_title}
                    </h3>
                </div>
                <div className="text-base mt-10 text-indigo-600 font-semibold tracking-wide ">
                    <span className="inline flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="gold">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {movie.vote_average * 10}%
                    </span>
                    <h2 className="inline flex">Year: {movie.release_date}</h2>
                    <h2>Runtime: {movie.runtime} min</h2>
                </div>
                <div>
                    <h4 className="text-2xl mt-10">{movie.overview}</h4>
                    <span className="inline flex">
                    {cast.map((c) => (
                      <div key={c.id} className="mr-auto">
                        <div className="space-y-2 space-x-6 m-10 mx-auto mt-16" style={{marginLeft:'-2em'}} >
                            <div style={{margin:'2em'}}>
                              <img className="h-40 w-40 rounded-md xl:w-21 xl:h-21" src={'http://image.tmdb.org/t/p/w500/'+c.profile_path} alt=""/>
                            <div className="font-medium  leading-2 space-y-1" style={{marginLeft:'auto'}}>
                              <h1 className="text-xl text-gray-600">{c.name.slice(0, 16)}</h1>
                              <p className="text-gray-500 text-xs">{c.character}</p>
                            </div>
                            
                            </div>
                          
                        </div>
                      </div>
                    ))}
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default MovieInfo
