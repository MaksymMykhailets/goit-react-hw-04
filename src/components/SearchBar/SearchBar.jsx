import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const input = e.target;
    const searchQuery = input.elements.search.value;
    if (searchQuery.trim() === '') {
      toast.error('Please enter a search query');
      return;
    }
    onSearch(searchQuery);
    input.reset();
  };

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <Toaster />
    </>
  );
};

export default SearchBar;
