import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {FetchData} from '../FetchData';
import api from '../../services/api';
import './styles.css'
export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {email: 'micaelsantana2009@hotmail.com', password: '123456'};
     this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    api.get('v1/users', {  params: { email: this.state.email, password: this.state.password}})  
       .then(response => {
              
              this.props.history.push('/'); })
       .catch(x => {
            console.log(x);
            alert("Não foi possível cadastra usuário, tente mais tarde !!");
        })
  }
  render() {
    return (
      <div className="container-dashboard">
  
        <div className="content-dashboard">
          <>
            <div className="header-dashboard">
                <h1>Listagem de Pessoas</h1>
                <Link id="link-register-people" to="/register-people">Nova Pessoa</Link>
            </div>
             <FetchData/>
          </>
        </div>
      </div>
    )
  }
}


