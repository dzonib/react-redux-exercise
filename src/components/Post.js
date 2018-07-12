import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../redux/actions/fetchPosts'
import PropTypes from 'prop-types'


class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.post) {
      this.props.posts.unshift(newProps.post)
    }
  }

  render() {
    return (
      <div>
        {this.props.posts.map( post => {
          return <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        })}
      </div>
    )
  }
}


Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  post: PropTypes.object.isRequired
}

const  mapStateToProps = state => ({
  posts: state.posts.items,
  post: state.posts.item
})


export default connect(mapStateToProps, {fetchPosts})(Posts)