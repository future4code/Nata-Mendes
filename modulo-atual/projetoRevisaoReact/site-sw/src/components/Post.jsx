import React from "react";
import image from "../assets/image.png";

export default class Post extends React.Component {
  render() {
    return (
      <div>
        <h3>Post 1</h3>
        <img src={image} />
        <p>Legenda sobre a foto</p>
      </div>
    );
  }
}
