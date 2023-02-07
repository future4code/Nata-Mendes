import "./styles.css";
import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";



export default class App extends React.Component {
  state = {
    login: false
  };

  logar = () => {
    this.setState({ login: true });
  };

  logout = () => {
    this.setState({ login: false });
  };

  render() {
    // let pagina = <h1>Página Erro</h1>;

    // if (this.state.login) {
    //   pagina = <Home onClickLogout={this.logout} />;
    // } else {
    //   pagina = <Login onClickLogin={this.logar} />;
    // }

    let pagina = this.state.login ? (
      <Home onClickLogout={this.logout} />
    ) : (
      <Login onClickLogin={this.logar} />
    );

    return (
      <div className="App">
        <h1>Star Wars</h1>
      
        {/* <hr /> */}
        {pagina}
      </div>
    );
  }
}
