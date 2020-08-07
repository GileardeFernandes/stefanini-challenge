import React, { Component } from 'react';
import {Link, useLocation} from 'react-router-dom';
import api from '../../services/api';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { people: [], loading: true };
    this.populateWeatherData = this.populateWeatherData.bind(this);
    this.teste = this.teste.bind(this);
  }

  async populateWeatherData() {
    const response = await api.get('v1/people');
    console.log(response);
    this.setState({ people: response.data, loading: false });
  }

  componentDidMount() {
   this.populateWeatherData();
  }
  
  teste(){
   
  }

  render() {
    // let contents = this.state.loading
    //   ? <p><em>Loading...</em></p>
    //   : (
       
    //   )

    return (
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
          {this.state.people.map(item =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.naturalness}</td>
              <td>{item.cpf}</td>
              <td><button onClick={this.teste}>Editar</button></td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }


}
