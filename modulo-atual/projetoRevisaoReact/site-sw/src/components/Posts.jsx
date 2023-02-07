import React from "react";
import image from "../assets/image.png";
import Post from "./Post";

export default class Posts extends React.Component {
  render() {
    return (
      <div>
        <h1>Posts</h1>
        <Post />
        <Post />
        {/* <div>
          <h3>Post 1</h3>
          <img src={image} />
          <p>Legenda sobre a foto</p>
        </div>
        <div>
          <h3>Post 2</h3>
          <img src={image} />
          <p>Legenda sobre a foto</p>
        </div> */}
      </div>
    );
  }
}
