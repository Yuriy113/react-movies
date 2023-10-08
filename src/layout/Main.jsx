import React from 'react';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends React.Component {
  state = {
    movies: [],
  };

  fetchMovies = (searchString) => {
    fetch(`http://www.omdbapi.com/?apikey=2049fdfd&s=${searchString}`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=2049fdfd&s=matrix')
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    return (
      <>
        <main className="container content">
          <Search fn={this.fetchMovies} />
          {this.state.movies.length ? <MovieList movies={this.state.movies} /> : <Preloader />}
        </main>
      </>
    );
  }
}

export default Main;
