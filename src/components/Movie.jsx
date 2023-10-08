/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Movie = (props) => {
  const { Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={poster} />
        <span className="card-title">{title}</span>
      </div>
      <div className="card-content">
        {year}
        <span className="right">{type}</span>
      </div>
    </div>
  );
};

export default Movie;
