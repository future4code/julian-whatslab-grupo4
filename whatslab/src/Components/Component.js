import React from "react";
import './Component.css';


class Componente extends React.Component {
    state = {
        mensagens: [
            {
                usuario: "",
                mensagem: ""

            }
        ],
        valorInputUsuario: "",
        valorInputMensagem: ""
    };

    adicionaMensagem = () => {
        const novaMensagem = {
            usuario: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem
        };

        const novoMensagens = [...this.state.mensagens, novaMensagem];

        this.setState({ mensagens: novoMensagens, valorInputMensagem: "" });
    };

    onChangeInputUsuario = event => {
        this.setState({ valorInputUsuario: event.target.value });
    };

    onChangeInputMensagem = event => {
        this.setState({ valorInputMensagem: event.target.value });

    };



    render() {
        const listaDeMensagens = this.state.mensagens.map(msg => {
            return (
                <div>
                    <p><b>{msg.usuario}</b> {msg.mensagem}</p>
                    <hr/>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="footer">
                    <input className="usuario"
                        value={this.state.valorInputUsuario}
                        onChange={this.onChangeInputUsuario}
                        placeholder="Usuário"
                    />
                    <input className="mensagem"
                        value={this.state.valorInputMensagem}
                        onChange={this.onChangeInputMensagem}
                        placeholder="Mensagem"
                    />
                    <button className="botao" onClick={this.adicionaMensagem}>Enviar</button>
                </div>
                <div>{listaDeMensagens}</div>
            </div>
        );
    }
}
export default Componente;