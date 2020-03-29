import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPosts = () => async  dispatch => {
  const response = await jsonPlaceHolder('/posts');
  return {
    type: 'FETCH_POSTS',
    payload: response

  }

};

export const selectPost = () => {
  return {
    type: 'SELECT_POST'
  }
};
