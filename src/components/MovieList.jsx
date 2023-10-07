import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  const { movies } = props;

  console.log(movies);
  return (
    <div className="movies">
      {movies.map((movie) => {
        return <Movie key={movie.imdbID} {...movie} />;
      })}
    </div>
  );
};

export default MovieList;
