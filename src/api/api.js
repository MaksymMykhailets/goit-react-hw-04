import axios from 'axios';

const API_KEY = 'QKjtc5cjsnmWcMyifDCczMCwrGIriUDA6GXLlV3oFLU';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 20,
};

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`search/photos`, {
    params: { query, page },
  });
  return data;
};
