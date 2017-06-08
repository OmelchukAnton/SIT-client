import React, { Component } from 'react';
import Login from '../login/Login.jsx';
// import Log from '../login/Log.jsx';
import CreateAccount from '../registrationForm/CreateAccount.jsx';
import './Valid.jsx';

import './RegLog.scss';

export default class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }


  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn } = this.state;

    let button = null;
    if (isLoggedIn) {
      button = <LoginButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LogoutButton onClick={this.handleLoginClick} />;
    }

    return (
      <div className="begin">
        <div className="header__registration">
          <img
            src="./avatars/logo.jpg"
            width="30"
            height="20"
            alt="example-logo"
            className="logo"
          />
          <a className="logo" href="/">Stay in touch!</a>
          <div className="sign__switching">{button}</div>

        </div>
        <div className="form_login_and_create">
          <Greeting isLoggedIn={isLoggedIn} />
        </div>
      </div>
    );
  }
}

function OpenCreateForm() {
  return <CreateAccount />;
}

function OpenLoginForm() {
  return <Login />;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <OpenCreateForm />;
  }
  return <OpenLoginForm />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Sign up!
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Sign in!
    </button>
  );
}

LogoutButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};
LoginButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
};
Greeting.propTypes = {
  isLoggedIn: React.PropTypes.bool,
};
