import React from 'react';

import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
  };

  fetchMovies = (searchString = 'matrix') => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchString}`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  filterMovies = (searchString = 'matrix', filterString) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchString}&type=${filterString}`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  componentDidMount() {
    this.fetchMovies('matrix');
  }

  render() {
    return (
      <>
        <main className="container content">
          <Search fn={this.fetchMovies} filterFn={this.filterMovies} />
          {this.state.movies.length ? <MovieList movies={this.state.movies} /> : <Preloader />}
        </main>
      </>
    );
  }
}

export default Main;
