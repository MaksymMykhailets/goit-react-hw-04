import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

const App = () => {
  return (
    <>
      <SearchBar />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <LoadMoreBtn />
      <ImageModal />
    </>
  );
};

export default App;
