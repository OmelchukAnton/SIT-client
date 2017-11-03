import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button } from 'react-validation/lib/build/validation.rc.js';
import { checkAccount } from '../../services/contacts.js';

import './LoginStyle.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.accountVerification = this.accountVerification.bind(this);
  }

  // componentWillMount() {
  //   const userAuth = JSON.parse(localStorage.getItem('userData') || '{}');
  //   if (Object.keys(userAuth).length !== 0) {
  //     this.props.history.push('/pm');
  //   }
  //   // alert('Incorrect email or password');
  // }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  accountVerification() {
    checkAccount(this.state).then(() => {
      this.props.history.push('/pm');
    });
  }

  render() {
    return (
      <div>
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
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') {
                        this.accountVerification();
                      }
                    }}
                  />
                </label>
              </div>
              <div>
                <Button onClick={this.accountVerification} className="login__fieldset_form_button">
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
      </div>
    );
  }
}

Login.propTypes = {
  // email: React.PropTypes.string,
  // password: React.PropTypes.string,
  history: React.PropTypes.object.isRequired,
};

Login.defaultProps = {
  // email: '',
  // password: '',
};

export default withRouter(Login);
