import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = { posts: [] };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
      this.setState({
        posts: response.data.map((post) => {
          return <Post title={post.title} key={post.id} />;
        }),
      });
    });
  }

  render() {
    return (
      <div>
        <section className='Posts'>{this.state.posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
