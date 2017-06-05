import React, { Component } from 'react';
import { Form, Input, Button } from 'react-validation/lib/build/validation.rc.js';
import { Link } from 'react-router-dom';

export default class Log extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
      pass: null,
    };

    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handleEmailInput(event) {
    const value = event.target.value;

    this.setState({
      value,
    });

    // this.props.handleChangeEmail(this.props.name, value);
  }

  handlePasswordInput(event) {
    const pass = event.target.pass;

    this.setState({
      pass,
    });

    // this.props.handleChangePassword(this.props.past, pass);
  }


  render() {
    return (
      <form className="form__login">
        <fieldset>
          <legend>Log in</legend>
          <Form className="location__inform">
            <div>
              <label htmlFor="email" className="location__fields">
                Email*
                <Input
                  className="input__email"
                  value="email@email.com"
                  name={this.props.name}
                  onChange={this.handleEmailInput}
                  validations={['required', 'email']}
                />
              </label>
              <label htmlFor="password" className="location__fields">
                Password*
                <Input
                  className="input__password"
                  type="password"
                  value={this.state.pass}
                  name={this.props.past}
                  onChange={this.handlePasswordInput}
                  validations={['required']}
                />
              </label>
            </div>
            <div>
              <Link to="/pm">
                <Button className="button__login">
                  Submit
                </Button>
              </Link>
            </div>
          </Form>
        </fieldset>
      </form>
    );
  }
}
Log.propTypes = {
  name: React.PropTypes.string,
  past: React.PropTypes.string,
  // isValidEmail: React.PropTypes.bool,
  // isValidPassword: React.PropTypes.bool,
  // handleChangeEmail: React.PropTypes.func.isRequired,
  // handleChangePassword: React.PropTypes.func.isRequired,
};
Log.defaultProps = {
  name: '',
  past: '',
  placeholder: '',
  // isValidPassword: '',
  // isValidEmail: '',
};
