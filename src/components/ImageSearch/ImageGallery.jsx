import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import '../styles.css';

class ImageGallery extends Component {
  render() {
    const { hits } = this.props;
    // console.log(hits);
    return (
      <ul className="ImageGallery">
        {hits.map(el => (
          <ImageGalleryItem
            key={el.id}
            tags={el.tags}
            webformatURL={el.webformatURL}
          />
        ))}
      </ul>
    );
  }
}
export default ImageGallery;
