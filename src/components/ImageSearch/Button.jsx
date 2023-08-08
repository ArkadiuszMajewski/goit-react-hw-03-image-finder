import React, { Component } from 'react';
import '../styles.css';

class ButtonLoad extends Component {
  render() {
    return (
      <button onClick={this.props} className="Button" type="submit">
        Load more
      </button>
    );
  }
}
export default ButtonLoad;
