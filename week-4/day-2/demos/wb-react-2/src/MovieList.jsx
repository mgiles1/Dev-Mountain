import { useState } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState(['Alien', 'Predator', 'Alien Vs. Predator']);
  // This initializes our state value movies as an array with 3 items.

  const [inputValue, setInputValue] = useState('');
  // This will be used to hold the value of our input box.

  // console.log(inputValue)

  const moviesDisplay = movies.map((movies) => <h5 key={movies} >{movies}</h5>)
  
  return (
    <div>
      <h2>Movie List</h2>
      {moviesDisplay}

      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type='text'></input>

      <button onClick={() => {
        let newMoviesArr = [...movies, inputValue]
        setMovies(newMoviesArr)
      }}>Add Movie</button>
    </div>
  )

//   const moviesDisplay = movies.map((movie) => <h5 key={movie}>{movie}</h5>);
//   return (
//     <div>
//       <h2>Movie List</h2>
//       {moviesDisplay}

//       <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" />

//       <button
//         style={{ marginLeft: '5px' }}
//         onClick={() => {
//           setMovies([...movies, inputValue]);
//           setInputValue('');
//         }}
//       >
//         Add Movie
//       </button>
//     </div>
//   );
}

export default MovieList