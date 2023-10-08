import React from 'react';

class Search extends React.Component {
  state = {
    search: '',
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ search: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fn(this.state.search);
  };

  render() {
    return (
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
    );
  }
}

export { Search };
