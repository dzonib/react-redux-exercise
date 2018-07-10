import React, { Component } from 'react'


class Posts extends Component {

  state = {
    posts: []
  }

  async componentWillMount() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        this.setState(() => ({posts: data}))
      })
  
  }


  render() {
    return (
      <div>
        {this.state.posts.map( post => {
          return <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        })}
      </div>
    )
  }
}

export default Posts