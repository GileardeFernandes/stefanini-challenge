import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
 import landingImg from '../../assets/images/landing.svg';
 import codeImgAnimation from '../../assets/images/code-animation.gif';
 import codeImgAnimation2 from '../../assets/images/code2-animation.gif';
 import './styles.css';
 
export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={codeImgAnimation} id="animation-code" alt="Code animation" />
          <h2>Desafio Stefanini .Net </h2>
          <img src={codeImgAnimation2} id="animation-code2" alt="Code animation2" />
          <div className="buttons">
              <Link to="/signup" className="button-cadastrar">
                <button type="submit" className="button-cadastrar"  >
                  Cadastre-se
                </button>
              </Link>
            <Link to="/signin" className="button-login">
             <button type="submit" className="button-login" >Login</button>
            </Link>
          </div>
        </div>

        <img src={landingImg} alt="Landing" className="hero-image"/>

      </div>  
   </div>
    );
  }
}
