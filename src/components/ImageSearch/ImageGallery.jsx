import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import '../styles.css';

class ImageGallery extends Component {
  render() {
    const { hits } = this.props;
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem hits={hits} />
      </ul>
    );
  }
}
export default ImageGallery;
