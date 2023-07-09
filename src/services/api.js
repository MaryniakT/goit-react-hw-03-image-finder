import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (query, page) => {
  console.log(query);

  const paramsString = new URLSearchParams({
    key: '35719237-a3b5fc2cde12a551a7cd51d6d',
    q: query,
    page,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  const response = await axios.get(`?${paramsString}`);

  return response.data;
};