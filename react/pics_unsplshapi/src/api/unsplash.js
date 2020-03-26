import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID Bjzgs4aztGOI92h3CxSiXFhjkGKMnJP_op9ZAA7koeY',
  }
})