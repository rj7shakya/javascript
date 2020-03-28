import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPosts = async () => {
  const response = await jsonPlaceHolder('/posts');

  return {
    type: 'FETCH_POSTS',
    payload: response
  }; 
}; 
