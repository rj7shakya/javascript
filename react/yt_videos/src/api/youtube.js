import axios from 'axios';

const KEY = 'AIzaSyAs-W5QCqW6zYhg9UGUBU1dOtwCRyY9wbI';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResults: 5,
    key : KEY
  }
});