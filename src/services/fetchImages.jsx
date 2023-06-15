import axios from 'axios';

export const fetchImages = async (name, page) => {
  const API_URL = 'https://pixabay.com/api/';
  const API_KEY = '35719237-a3b5fc2cde12a551a7cd51d6d';
  const params = {
    key: API_KEY,
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  };
  const response = await axios.get(API_URL, { params });
  return response.data.hits;
};