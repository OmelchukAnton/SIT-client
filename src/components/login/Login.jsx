import React, { Component } from 'react';
import { Form, Input, Button } from 'react-validation/lib/build/validation.rc.js';
import { Link } from 'react-router-dom';
import { checkAccount } from '../../services/contacts.js';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onCheckAccount = this.onCheckAccount.bind(this);
  }

  onCheckAccount() {
    // console.log(this.checkAccount());
    // checkAccount(this.state).then(response);
    // console.log(this.state);
    checkAccount(this.state);
    // checkAccount(this.state).then(response => console.log(response));
    // checkAccount(this.state).then(response => console.log(response));
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  checkAccount() {
    return (
      <div className="content_login">
        <div className="form__login">
          <fieldset className="fieldset_login_form">
            <Form className="location__inform">
              <div className="login_info">
                <h2> Authorization </h2>
                <summary>
                  Enter your registration information to enter your personal account.
                </summary>
              </div>
              <div>
                <label htmlFor="email" className="location__fields">
                  <Input
                    className="input__email"
                    placeholder="email@email.com"
                    value=""
                    onChange={this.handleInputChange}
                    name="email"
                    validations={['required', 'email']}
                  />
                </label>
                <label htmlFor="password" className="location__fields">
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
                <Link to="/pm">
                  <Button onClick={this.onCheckAccount} className="button__login">
                    Enter
                  </Button>
                </Link>
              </div>
              <div className="form_entry">
                <aside> Enter through: </aside>
                <div className="passport_entry">
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
