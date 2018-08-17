import { POST_LOADING, GET_POSTS, GET_POST, ADD_POST, LIKE_POST, DELETE_POST, DELETE_COMMENT } from '../actions/types'

const initialState = {
  posts: [],
  post: {},
  loading: false,
}

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true,
      }
    case ADD_POST:
      return {
        ...state,
        posts: [
          action.payload,
          ...state.posts,
        ]
      }
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      }
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      }
    case LIKE_POST:
    return {
    ...state,
    posts: state.posts.map(post => {
      if (post._id === action.payload._id) {
        return {
          ...post,
          ...action.payload
        }
      } else {
        return post
      }
    })}
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      }
    case DELETE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(comment => comment._id !== action.payload),
        }
      }
    default:
      return state
  }
}
