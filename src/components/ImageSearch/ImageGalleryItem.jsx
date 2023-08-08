import React, { Component } from 'react';
import '../styles.css';

class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, tags, id } = this.props;
    // console.log(this.props);
    return (
      <li id={id} className="ImageGalleryItem">
        <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      </li>
    );
  }
}
export default ImageGalleryItem;
