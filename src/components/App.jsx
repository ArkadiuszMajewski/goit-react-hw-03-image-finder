import SearchBar from './SearchBar/index';
import ImageGallery from './ImageGallery/index';
import ImageGalleryItem from './ImageGalleryItem/index';
import ButtonLoad from './ButtonLoad/index';
import './styles.css';

export const App = () => {
  return (
    <div className="App">
      <SearchBar />
      <ImageGallery />
      <ImageGalleryItem />
      <ButtonLoad />
    </div>
  );
};
