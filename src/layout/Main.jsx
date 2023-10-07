import React from 'react';
import MovieList from '../components/MovieList';

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=2049fdfd&s=matrix')
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    return (
      <main className="container content">
        {this.state.movies.length ? <MovieList movies={this.state.movies} /> : null}
      </main>
    );
  }
}

export default Main;
