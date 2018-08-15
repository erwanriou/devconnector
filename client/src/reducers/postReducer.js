import { POST_LOADING, GET_POSTS, GET_POST, ADD_POST, DELETE_POST } from '../actions/types'

const initialState = {
  posts: [],
  post: {},
  loading: false,
}

export default function postReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST :
      return {
        ...state,
        posts: [
          action.payload,
          ...state.posts,
        ]
      }
    default :
      return state
  }
}
