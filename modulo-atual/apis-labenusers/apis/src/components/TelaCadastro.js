import React from "react";
import axios from "axios"

class TelaCadastro extends React.Component {
    state = {
        nome : "",
        email : ""
    }

    inputNome = (e) => {
        this.setState({nome: e.target.value})
    }

    inputEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        const body = {
            name: this.state.nome,
            email: this.state.email
        }
       axios.post(url, body, {
        headers: {
            Authorization: 'nata-mendes-joy'
        }
       })
       .then((res) => {        
        alert("Usuário cadastrado com sucesso!")
        this.setState({nome:"", email:""})
       })
       .catch((err) => {
        alert(err.response.data.message)
       })
    }


    render() {
        return(

        <div>
            <h1>Labenusers</h1>
            <button onClick={this.props.irParaLista}>Ir para Lista de Usuários </button>
            <h2>Criar Usuários</h2>
            <input value={this.state.nome} onChange={this.inputNome} placeholder="Nome"/>
            <input value={this.state.email} onChange={this.inputEmail} placeholder="E-mail"/>
            <button onClick={this.fazerCadastro}>Cadastrar</button>
        </div>

        )
    }
}

export default TelaCadastro;