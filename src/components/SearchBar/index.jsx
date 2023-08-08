import React, { Component } from 'react';
import '../styles.css';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    hits: [],
    search: '',
    page: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubbmit = evt => {
    evt.preventDefault();
    console.log(this.state.search);
    // const {} = evt.currentTarget;
  };

  fetchPhotos = async () => {
    try {
      const { search } = this.state;
      const response = await fetch(
        'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'
      );
      const data = await response.json();
    } catch {}
  };

  render() {
    return (
      <header onSubmit={this.handleSubbmit} className="Searchbar">
        <form className="SearchForm">
          <button
            onSubmit={this.handleSubbmit}
            type="submit"
            className="SearchForm-button"
          >
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            name="search"
            onChange={this.handleChange}
            value={this.state.search}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;

// SearchBar.PropTypes = {};
