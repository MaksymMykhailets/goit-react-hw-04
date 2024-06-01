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
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!query) return;
      try {
        setError(false);
        setIsLoading(true);
        const data = await getPhotos(query, page);
        setPhotos(prev => [...prev, ...data.results]);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    query && fetchData();
  }, [page, query]);

  const handleSearch = searchQuery => {
    setQuery(searchQuery);
    setPhotos([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ErrorMessage />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <LoadMoreBtn onClick={handleLoadMore} />
      <ImageModal />
    </>
  );
};

export default App;
