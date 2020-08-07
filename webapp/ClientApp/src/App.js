import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { RegisterPeople } from './components/RegisterPeople';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { Dashboard } from './components/Dashboard';

import './styles/global.css';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/register-people' component={RegisterPeople} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/dashboard' component={Dashboard} />
      </Layout>
    );
  }
}
