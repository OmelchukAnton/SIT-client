import React, { Component } from 'react';
import CreateAccount from '../registrationForm/CreateAccount.jsx';
import './Valid.jsx';
import './RegStyle.scss';

export default class RegistrationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="regPage">
        <div className="regPage__header">
          <img
            src="./images/logo.jpg"
            width="30"
            height="20"
            alt="example-logo"
            className="regPage__header_logo"
          />
          <a className="regPage__header_logo" href="/">Stay in touch!</a>
        </div>
        <div className="form_login_and_create">
          <CreateAccount />
        </div>
      </div>
    );
  }
}
