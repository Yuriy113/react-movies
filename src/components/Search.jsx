import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
    filter: '',
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fn(this.state.search);
  };

  handleFilterChange = (e) => {
    if (!this.state.search) this.setState({ search: 'matrix' });
    this.setState({ filter: e.target.value }, () => {
      this.props.filterFn(this.state.search, this.state.filter);
    });
  };

  render() {
    return (
      <>
        <div className="row">
          <form onSubmit={this.handleSubmit} className="input-field col s12">
            <input
              onChange={this.handleChange}
              className="movie-search"
              placeholder={'search'}
              value={this.state.search}
            />
          </form>
        </div>

        <form className="filter" onChange={this.handleFilterChange}>
          <label>
            <input type="radio" name="filter" value="" />
            <span>All</span>
          </label>
          <label>
            <input type="radio" name="filter" value="movie" />
            <span>Movies</span>
          </label>
          <label>
            <input type="radio" name="filter" value="series" />
            <span>Series</span>
          </label>
        </form>
      </>
    );
  }
}

export { Search };
