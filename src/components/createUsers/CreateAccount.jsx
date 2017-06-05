// import React from 'react';
import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'react-validation/lib/build/validation.rc.js';
import { Link } from 'react-router-dom';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      city: '',
      email: '',
      password: '',
    };

    this.handleFirstnameInput = this.handleFirstnameInput.bind(this);
    this.handleLastnameInput = this.handleLastnameInput.bind(this);
    this.handleCityTick = this.handleCityTick.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handleFirstnameInput(e) {
    const firstname = e.target.value;

    this.setState({
      firstname,
    });
  }

  handleLastnameInput(e) {
    const lastname = e.target.value;

    this.setState({
      lastname,
    });
  }

  handleCityTick(e) {
    const city = e.target.value;

    this.setState({
      city,
    });
  }

  handleEmailInput(e) {
    const email = e.target.value;

    this.setState({
      email,
    });
  }

  handlePasswordInput(e) {
    const password = e.target.value;

    this.setState({
      password,
    });
  }


  newContact() {
    return (
      <main className="form_create_account">
        <Form>
          <h3>Registration</h3>
          <label htmlFor="firstname" className="field_group">
            Firstname*
            <Input
              className="inputs_group"
              errorClassName="is-invalid-input"
              type="text"
              containerClassName=""
              value=""
              onChange={this.handleFirstnameInput}
              name="firstname"
              validations={['required', 'alpha']}
            />
          </label>
          <label htmlFor="lastname" className="field_group">
            Lastname*
            <Input
              className="inputs_group"
              errorClassName="is-invalid-input"
              type="text"
              containerClassName=""
              value=""
              onChange={this.handleLastnameInput}
              name="lastname"
              validations={['required', 'alpha']}
            />
          </label>
          <label htmlFor="city" className="field_group">
            City*
            <Select
              className="inputs_group"
              errorClassName="is-invalid-input"
              name="city"
              value=""
              onChange={this.handleCityTick}
              validations={['required']}
            >
              <option value="">Choose your city</option>
              <option value="1">Brest</option>
              <option value="2">Minsk</option>
              <option value="3">New York</option>
            </Select>
          </label>
          <label htmlFor="email" className="field_group">
            Email*
            <Input
              className="inputs_group"
              value="email@email.com"
              onChange={this.handleEmailInput}
              name="email"
              validations={['required', 'email']}
            />
          </label>
          <label htmlFor="password" className="field_group">
            Password*
            <Input
              className="inputs_group"
              type="password"
              value=""
              onChange={this.handlePasswordInput}
              name="password"
              validations={['required']}
            />
          </label>
          <label htmlFor="confirm" className="field_group">
            Confirm password*
            <Input
              className="inputs_group"
              type="password"
              errorClassName="is-invalid-input"
              containerClassName=""
              value=""
              onChange={this.handlePasswordInput}
              name="passwordConfirm"
              validations={['required', 'password']}
            />
          </label>
          <Link to="/pm" className="button_create_account">
            <Button>Submit</Button>
          </Link>
        </Form>
      </main>
    );
  }
  render() {
    return (
      <div>
        {/* {console.log(1)} */}
        {/* {console.log(this.newContact())} */}
        {this.newContact()}
      </div>
    );
  }
}
CreateAccount.propTypes = {
  firstname: React.PropTypes.string,
  lastname: React.PropTypes.string,
  city: React.PropTypes.string,
  email: React.PropTypes.string,
  password: React.PropTypes.string,
};
CreateAccount.defaultProps = {
  firstname: '',
  lastname: '',
  city: '',
  email: '',
  password: '',
  placeholder: '',
};
