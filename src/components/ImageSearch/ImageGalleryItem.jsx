import React, { Component } from 'react';
import '../styles.css';

class ImageGalleryItem extends Component {
  render() {
    const { hits } = this.props;
    console.log(hits);
    return (
      <div>
        {hits.map(evt => (
          <li className="ImageGalleryItem">
            <img
              className="ImageGalleryItem-image"
              src={evt.previewURL}
              alt={evt.tags}
            />
          </li>
        ))}
        {/* <img className="ImageGalleryItem-image" src="" alt="" /> */}
      </div>
    );
  }
}
export default ImageGalleryItem;
