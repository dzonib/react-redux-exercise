import {FETCH_POSTS} from '../actions/types'

const postReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        ...action.posts
      }

    default:
      return {}  
  }
}

export default postReducer