import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
// import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import peopleImgAnimation from '../../assets/images/people-animation.gif';
import './styles.css'
export class RegisterPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
                   name: 'Isabella naves costa',
                   email: 'isabella@gmail.com', 
                   gender:'Masculino',
                   nationality: 'Brasileiro',
                   naturalness: 'Pernambucano',
                   birthDate:'',
                   cpf: '09933622498',
                   userId: 1
                  };
     this.handleRegisterPeople = this.handleRegisterPeople.bind(this);
  }

  handleRegisterPeople(event){
    event.preventDefault();
     const  newPeople = {
       name: this.state.name,
       email: this.state.email,
       gender: this.state.gender,
       nationality: this.state.nationality,
       naturalness: this.state.naturalness,
       birthDate: new Date(this.state.birthDate),
       cpf: this.state.cpf,
       userId: 1
     }
     api.post('v1/people',newPeople).then(response => {
      console.log(response);  
      alert('Pessoa cadastrada com sucesso');
       this.props.history.push('/dashboard');
    }).catch(x => {
      console.log(x);
      alert("Não foi possível cadastra usuário, tente mais tarde !!");
    })
  }
  render() {
    return (
      <div className="container-register">

        <img src={peopleImgAnimation} className="logo" alt="User animation" />
  
        <div className="content-register" id="content-people">
          <form className="form-content" id="form-people" onSubmit={this.handleRegisterPeople}>
            <h1>Cadastre uma pessoa</h1>
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
            <div className="input-small" >
              <input
                name="gender"
                placeholder="Sexo"
                value={this.state.gender}
                onChange={e => this.setState({ gender: e.target.value })}
              />

              <input
                name="BirthDate"
                placeholder="Data nascimento"
                value={this.state.birthDate}
                onChange={e => this.setState({ birthDate:e.target.value })}
              />
            </div>

            <div className="input-small" >
              <input
                name="Nationality"
                placeholder="Nacionalidade"
                value={this.state.nationality}
                onChange={e => this.setState({ nationality: e.target.value })}
              />
              <input
                name="Naturalness"
                placeholder="Naturalidade"
                value={this.state.naturalness}
                onChange={e => this.setState({ naturalness: e.target.value })}
              />
            </div>

            <input
                name="Cpf"
                placeholder="CPF"
                value={this.state.cpf}
                onChange={e => this.setState({ cpf: e.target.value })}
              />


            <button type="submit">Cadastrar</button>
          </form>
          <Link  className="link-go-back"   to="/dashboard">Voltar</Link>
        </div>
      </div>
    )
  }
}


