import axios from 'axios';

const KEY = 'AIzaSyAkNBs9jWwFr4qbrJm194UdoB43ltc7TAg';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params:{
    part:'snippet',
    maxResults: 5,
    key : KEY
  }
});