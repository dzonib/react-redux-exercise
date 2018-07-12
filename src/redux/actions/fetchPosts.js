import {
  FETCH_POSTS,
  NEW_POST
} from '../actions/types'

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispatch({
      type: FETCH_POSTS,
      data
    }))
}

export const postPostlol = (derPost) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(derPost)
    }).then(res => res.json())
    .then(data => dispatch({
      type: NEW_POST,
      neuPost: data
    }))
}