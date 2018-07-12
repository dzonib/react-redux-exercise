import React, { Component } from 'react';
import {postPostlol} from '../redux/actions/fetchPosts';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class PostForm extends Component {

  state = {
    title: '',
    body: ''
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.postPostlol(post)

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   body: JSON.stringify(post)
    // })
    // .then(res => res.json())
    // .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br/>
            <input 
            type="text"
             name="title" 
             value={this.state.title} 
             onChange={this.onChange}
             autoComplete="off"/>
          </div>
          <div>
            <label>Body: </label><br/>
            <textarea 
            autoComplete="off" 
            name="body" 
            value={this.state.body} 
            onChange={this.onChange}/>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  postPostlol: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  state
})

export default connect(mapStateToProps, {postPostlol})(PostForm);