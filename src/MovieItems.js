export default function Example(movie) {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <ul role="list" className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
              <li>
                <div className="space-y-4">
                  <div className="aspect-w-1 aspect-h-6">
                    <img className="object-cover shadow-lg rounded-lg"  src={'http://image.tmdb.org/t/p/w500/'+ movie.poster_path} alt="" style={{maxHeight:'600px'}}/>
                  </div>
                </div>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
