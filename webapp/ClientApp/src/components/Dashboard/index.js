import React, { Component } from 'react';
import swal from 'sweetalert';
import api from '../../services/api';
import {format} from 'date-fns';
import './styles.css'
export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '', 
      gender:'',
      nationality: '',
      naturalness: '',
      birthDate:'',
      cpf: '',
      userId: 1,
      people: [], 
      loading: true,
      actionEdit: false,
      peopleEdit: {},
      indexItemTable: ''
     };
     this.handleRegisterPeople = this.handleRegisterPeople.bind(this);
     this.populateWeatherData = this.populateWeatherData.bind(this);
     this.handleEditPeople = this.handleEditPeople.bind(this);
     this.resetFormaData = this.resetFormaData.bind(this);
     this.handleDeletePeople = this.handleDeletePeople.bind(this);
     this.handleLogout = this.handleLogout.bind(this);
  }

  handleRegisterPeople(event){
    event.preventDefault();

    let date = this.state.birthDate;
    let dateArray = date.split("/");
    let newDate = dateArray[1] + '/' + dateArray[0] + '/' + dateArray[2];
    
    let idUser = localStorage.getItem('@id');
   

    const  newPeople = {
      name: this.state.name,
      email: this.state.email,
      gender: this.state.gender,
      nationality: this.state.nationality,
      naturalness: this.state.naturalness,
      birthDate: new Date(newDate),
      cpf: this.state.cpf,
      userId: Number(idUser)
    }

     if (this.state.actionEdit){
        api.put('v1/people',newPeople,{params: {id: this.state.peopleEdit.id}})
        .then(response => {
          newPeople.id = this.state.peopleEdit.id;
          var peopleUpdate = this.state.people;
          peopleUpdate[this.state.indexItemTable] = newPeople;
 
          this.setState({actionEdit: false, peopleEdit:{}, indexItemTable:''});
          this.resetFormaData();
        })
        .catch(x => {
          swal('Não foi possível atualizar dados, tente mais tarde !!','','error');
        });

     }
     else{
        api.post('v1/people',newPeople).then(response => {
          this.setState({people:[...this.state.people, response.data]});
          this.resetFormaData();
        }).catch(x => {
          swal('Não foi possível cadastra usuário, tente mais tarde !!','','error');
        });
     }
  }
  
  async populateWeatherData() {
    const response = await api.get('v1/people');
    console.log(response);
    this.setState({ people: response.data, loading: false });
  }

  componentDidMount() {
    var email = localStorage.getItem('@email');
    console.log(email);
    if (email == null || email == '')
       this.props.history.push('/');

   this.populateWeatherData();
  }

  handleEditPeople(peopleParam,index){
    this.setState({
      name:peopleParam.name,
      email: peopleParam.email, 
      gender:peopleParam.gender,
      nationality: peopleParam.nationality,
      naturalness: peopleParam.naturalness,
      birthDate: format(new Date(peopleParam.birthDate),'dd/MM/yyyy'),
      cpf: peopleParam.cpf,
      actionEdit: true,
      peopleEdit: peopleParam,
      indexItemTable: index
    });
  }

  handleDeletePeople(peopleParam,index){
 
   api.delete('v1/people',{params: {id: peopleParam.id}})
    .then(response => {

      var peopleUpdate = this.state.people;
      peopleUpdate.splice(index,1);
      this.setState({people: peopleUpdate});
      this.resetFormaData(); 

    })
    .catch(x => {
      swal('Não foi possível atualizar dados, tente mais tarde !!','','error');
    });
  }

  resetFormaData() {
    this.setState({
      name: '',
      email: '',
      gender: '',
      nationality: '',
      naturalness: '',
      birthDate: '',
      cpf: '',
      actionEdit: false
    });
  }

  handleLogout(event){
    event.preventDefault();
    localStorage.removeItem('@email');
    localStorage.removeItem('@id');
    this.props.history.push('/');
  }


  render() {
    return (
      <>
      <button  className="button-sair" onClick={this.handleLogout}>Sair</button>
      <div className="container-dashboard">
        <div className="container-table-people">
          <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
              <tr>
                <th>Name</th>
                <th>Sexo</th>
                <th>Naturalidade</th>
                <th>Cpf</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.people.map((item, itemIndex) =>
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.gender}</td>
                  <td>{item.naturalness}</td>
                  <td>{item.cpf}</td>
                  <td className="button-cell">
                    <button className="button-edit" onClick={() => this.handleEditPeople(item,itemIndex)}>Editar</button>
                    <button className="button-delete" onClick={() => this.handleDeletePeople(item,itemIndex)}>Excluir</button>
                    </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="content-register-dashboard">
          <form className="form-content-dashboard"  onSubmit={this.handleRegisterPeople}>
  
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


            <button type="submit">{this.state.actionEdit ? 'Atualizar' : 'Cadastrar'}</button>
          </form>
        </div>
      </div>
      </>
    )
  }
}


