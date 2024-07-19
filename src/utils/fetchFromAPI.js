import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  
  params: {
    
    
    
    maxResults: '50',
  },
  headers: {
    'x-rapidapi-key': '71158d418amsh5a224da5aafb1b4p1b2094jsn7cc73a0b9d66',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};
