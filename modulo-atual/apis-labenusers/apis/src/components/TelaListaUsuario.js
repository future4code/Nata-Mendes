import React from "react";
import axios from "axios";
import styled from "styled-components"


const CardUsuario = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: lightgreen;
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
`


class TelaListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }


    componentDidUpdate(){
    this.pegarTodosUsers()
    }

    // no vídeo a Chijo fez com Didmount, but, eu não quis q mostrasse os usuários assim q aparecesse na tela,
    // somente quando eu apertasse um botão.

    pegarTodosUsers = () => {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios.get(url, {
            headers: {
                Authorization: 'nata-mendes-joy'
            }
        })
        
        .then((res) => {
            this.setState({usuarios: res.data})
        })
        
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }

    deletarUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "nata-mendes-joy"
            }

        })
        .then((res)=>{
            alert("Deletado com sucesso!")
// aqui, se fosse declarada a função de pegar todos user no didMount, seria chamado de novo a função:
// this.pegarTodosUsers()
        })
        .catch((err)=>{
            console.log(err.response.data)

        })
    }

    render(){
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
            <CardUsuario key={user.id}>{user.name}
            <button onClick={()=> this.deletarUser(user.id)}>X</button>
            </CardUsuario>
            )
        })

        return ( 
            
            <div>
                <h1>Labenusers</h1>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários </h2>
                <button onClick={this.pegarTodosUsers}>Pegar Usuários</button>
                <div>
                {listaUsuarios}
                </div>
            </div>
        )
    }
}

export default TelaListaUsuarios;