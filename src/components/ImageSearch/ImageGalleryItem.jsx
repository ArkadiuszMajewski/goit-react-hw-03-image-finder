import React, { Component } from 'react';
import '../styles.css';

class ImageGalleryItem extends Component {
  render() {
    const { previewURL, tags } = this.props.el;
    console.log(this.props);
    return (
      <li className="ImageGalleryItem">
        <img className="ImageGalleryItem-image" src={previewURL} alt={tags} />
      </li>
    );
  }
}
export default ImageGalleryItem;
