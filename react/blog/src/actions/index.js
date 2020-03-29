import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPosts = () => {

  return function (dispatch, getState) {
    const response = jsonPlaceHolder('/posts');
    return {
      type: 'FETCH_POSTS',
      payload: response
    };
  }

}; 
