import React, { Component } from 'react';
import { Form, Input, Button } from 'react-validation/lib/build/validation.rc.js';
import { checkAccount } from '../../services/contacts.js';
import './LoginStyle.scss';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.AccountVerification = this.AccountVerification.bind(this);
  }

  AccountVerification() {
    checkAccount(this.state);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  checkAccount() {
    return (
      <div className="login__page">
        <div className="form__login">
          <fieldset className="fieldset_login_form">
            <Form className="location__inform">
              <div className="login__info">
                <h2> Authorization </h2>
                <summary className="login_info_summary">
                  Enter your registration information to enter your personal account.
                </summary>
              </div>
              <div>
                <label htmlFor="email" className="location_inputs">
                  <Input
                    className="input__email"
                    placeholder="email@email.com"
                    value=""
                    onChange={this.handleInputChange}
                    name="email"
                    validations={['required', 'email']}
                  />
                </label>
                <label htmlFor="password" className="location_inputs">
                  <Input
                    className="input__password"
                    type="password"
                    placeholder="******"
                    value=""
                    onChange={this.handleInputChange}
                    name="password"
                    validations={['required']}
                  />
                </label>
              </div>
              <div>
                <Button onClick={this.AccountVerification} className="button__login">
                  Enter
                </Button>
              </div>
              <div className="form__entry">
                <aside> Enter through: </aside>
                <div className="passport__entry">
                  <summary> Facebook </summary>
                  <summary> Google+ </summary>
                </div>
              </div>
            </Form>
          </fieldset>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.checkAccount()}
      </div>
    );
  }
}

Login.propTypes = {
  email: React.PropTypes.string,
  password: React.PropTypes.string,
};
Login.defaultProps = {
  email: '',
  password: '',
};
