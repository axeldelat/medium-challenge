import React, { Component } from 'react'

// CSS //
import './Posts.css'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      timeToRead: "",
      content: "",
      featured: "",
      editorsPick: "",
      popular: "",
      imageUrl: "",
      category: "",
      author: "",
      avatar: "",
    }
  }

  render() {
    // const { title, date, timeToRead, content, featured, editorsPick, popular, imageUrl, category, author, avatar } = this.state;
    
    return (
      <div>
        <div class="card-container">
          <div class="card u-clearfix">
            <div class="card-body">
              <div class="author">
                <div class="card-number card-circle subtle">01</div>
                <div class="card-author subtle">John Smith</div>
              </div>
              <h2 class="card-title">New Brunch Recipe</h2>
              <span class="card-description subtle">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
              <div class="card-read">Read</div>
            </div>
            <img class="card-media" src="https://s15.postimg.cc/temvv7u4r/recipe.jpg" alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Posts