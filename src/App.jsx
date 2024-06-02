import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

import { useState, useEffect } from 'react';
import { getPhotos } from './api/api';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;
      try {
        setError(null);
        setIsLoading(true);
        const data = await getPhotos(query, page);
        if (data.results.length === 0) {
          throw new Error('No results found');
        }
        setPhotos(prev => [...prev, ...data.results]);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  const handleSearch = searchQuery => {
    setQuery(searchQuery);
    setPhotos([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error.message} />}
      <ImageGallery images={photos} />
      {isLoading && <Loader />}
      {photos.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal />
    </>
  );
};

export default App;
