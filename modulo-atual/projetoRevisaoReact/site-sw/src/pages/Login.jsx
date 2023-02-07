import React from "react";

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <button onClick={this.props.onClickLogin}>Logar</button>
      </div>
    );
  }
}
