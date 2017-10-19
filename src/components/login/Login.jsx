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
      <div className="login">
        <fieldset className="login__fieldset">
          <Form className="login__fieldset_form">
            <div className="login__fieldset_form_info">
              <h2> Authorization </h2>
              <summary className="login__fieldset_form_info_summary">
                Enter your registration information to enter your personal account.
              </summary>
            </div>
            <div>
              <label htmlFor="email" className="login__fieldset_form_inputs">
                <Input
                  className="login__fieldset_form_inputs_email"
                  placeholder="email@email.com"
                  value=""
                  onChange={this.handleInputChange}
                  name="email"
                  validations={['required', 'email']}
                />
              </label>
              <label htmlFor="password" className="login__fieldset_form_inputs">
                <Input
                  className="login__fieldset_form_inputs_password"
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
              <Button onClick={this.AccountVerification} className="login__fieldset_form_button">
                Enter
              </Button>
            </div>
            <div className="login__fieldset_form_entry">
              <aside> Enter through: </aside>
              <div className="login__fieldset_form_entry_passport">
                <summary> Facebook </summary>
                <summary> Google+ </summary>
              </div>
            </div>
          </Form>
        </fieldset>
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
