import React, { Component } from 'react';
import '../styles.css';
import PropTypes from 'prop-types';
import ImageGallery from './ImageGallery';
import ButtonLoad from './Button';
import { Audio } from 'react-loader-spinner';
// import ImageGalleryItem from './ImageSearch/ImageGalleryItem';
// import ButtonLoad from './ImageSearch/Button';

class SearchBar extends Component {
  state = {
    hits: [],
    search: '',
    page: 1,
    key: '36819144-796cb24dbda7f1c215c0374a0',
    limit: 12,
  };

  async componentDidMount() {
    await this.fetchPhotos();
    // console.log('componentDidMount');
  }

  handleSubbmit = evt => {
    evt.preventDefault();
    if (this.state.search.trim() === '') {
      alert('Nothing');
    }
    this.fetchPhotos();
    console.log(this.state.hits);
    console.log(this.state.limit);
  };

  async componentDidUpdate(prevProps, prevState) {
    //jezeli sie zmieni state lub dostaniemy nowe propsy ta funkcja jest odpalana
    // console.log('update per limit')
    //10 - prevState -> aktualny state -> 10
    if (prevState.limit !== this.state.limit) {
      console.log('aktualizuj mi dane i pobieraj fetcha');
      this.fetchPhotos();
    }
  }

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  addExtraImg = () => {
    this.setState(prevState => ({
      ...prevState,
      limit: prevState.limit + 10,
    }));
    console.log(this.state.limit);

    this.fetchPhotos();
  };

  componentWillUnmount() {
    // console.log('kiedy zamykam moj modal wyczysc moj state z todos')
    this.setState({ hits: [] });
  }

  fetchPhotos = async () => {
    try {
      const { search, page, key, limit } = this.state;
      const response = await fetch(
        `https://pixabay.com/api/?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${limit}`
      );
      const data = await response.json();

      if (data.total === 0) {
        alert('Nofing was found');
      }
      this.setState(prevState => ({ ...prevState, hits: data.hits }));
    } catch (error) {
      console.log('blad w fetchPhotos');
    }
  };

  render() {
    const { hits } = this.state;
    // console.log(hits);
    return (
      <div>
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
        <ImageGallery hits={hits} />
        <ButtonLoad addExtraImg={this.addExtraImg} />
      </div>
    );
  }
}
export default SearchBar;

// SearchBar.PropTypes = {};
