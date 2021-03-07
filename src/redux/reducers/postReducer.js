import { ERRORS, POSTS, POST, LIKE, DISLIKE } from "../types";

const initialState = {
  postId: null,
  posts: "",
  error: "",
  like: "",
  dislike: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POSTS:
      return {
        posts: action.payload,
      };
    case POST:
      return {
        postId: action.payload,
      };
    case ERRORS:
      return {
        error: action.payload,
      };
    case LIKE:
      return {
        ...state,
        like:state.like+action.payload
      };
    case DISLIKE:
      return {
        ...state,
        dislike:state.dislike+action.payload
      };
    default:
      return state;
  }
}
