import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import signUpAnimation from '../../assets/images/signup-animation.gif';
import './styles.css'
export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
                   name: '',
                   email: '', 
                   password: ''
                  };
     this.handleRegisterUser = this.handleRegisterUser.bind(this);
  }

    handleRegisterUser(event){
    event.preventDefault();
     api.post('v1/users',this.state).then(response => {
        alert('Usuário cadastrado, pode fazer login');
        this.props.history.push('/');
    }).catch(x => {
      alert("Não foi possível cadastra usuário, tente mais tarde !!");
    })
  }
  render() {
    return (
      <div className="container-register">

        <img src={signUpAnimation} className="logo" alt="SignIn" />
  
        <div className="content-register">
          <form className="form-content" onSubmit={this.handleRegisterUser}>
            <h1>Faça seu cadastro</h1>
            <input name="name" 
                   placeholder="nome"
                   value={this.state.name}  
                   onChange={e => this.setState({name: e.target.value})}
            />
            <input 
                   name="email"
                   placeholder="E-mail"
                   value={this.state.email}  
                   onChange={e => this.setState({email: e.target.value})}
            />

            <input 
                   name="password" 
                   type="password" 
                   placeholder="Senha" 
                   value={this.state.password}  
                   onChange={e => this.setState({password: e.target.value})}
           />

            <button type="submit">Cadastrar</button>
          </form>

          <Link  className="link-go-back"  to="/">Voltar para login</Link>
        </div>
      </div>
    )
  }
}


