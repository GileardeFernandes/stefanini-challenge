import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import api from '../../services/api';
import signInAnimation from '../../assets/images/login-animation.gif';
import './styles.css'
export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    api.get('v1/users', {  params: { email: this.state.email, password: this.state.password}})  
       .then(response => {     
              localStorage.setItem('@email',response.data.email);
              localStorage.setItem('@id',response.data.id);

              this.props.history.push('/dashboard'); })
       .catch(x => {
            swal('Usuário e senha inválidos!!','','info');
        })
  }
  render() {
    return (
      <div className="container-register-signin">

        <img src={signInAnimation} className="logo" alt="SignIn" />
  
        <div className="content-register">
          <form className="form-content" onSubmit={this.handleLogin}>
            <h1>Login</h1>
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

            <button type="submit">Entrar</button>
          </form>

          <Link  className="link-go-back"  to="/">Voltar para home</Link>
        </div>
      </div>
    )
  }
}


