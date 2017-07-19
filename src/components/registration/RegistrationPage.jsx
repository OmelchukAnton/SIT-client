import React, { Component } from 'react';
import CreateAccount from '../registrationForm/CreateAccount.jsx';
import './Valid.jsx';
import './RegStyle.scss';

export default class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="reg__page">
        <div className="header__registration">
          <img
            src="./avatars/logo.jpg"
            width="30"
            height="20"
            alt="example-logo"
            className="header_reg_logo"
          />
          <a className="header_reg_logo" href="/">Stay in touch!</a>
        </div>
        <div className="form_login_and_create">
          <CreateAccount />
        </div>
      </div>
    );
  }
}
