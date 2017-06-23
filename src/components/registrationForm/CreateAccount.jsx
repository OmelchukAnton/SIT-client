import React, { Component } from 'react';
import { Form, Input, Select, Button } from 'react-validation/lib/build/validation.rc.js';
import { Link } from 'react-router-dom';
import { newContact } from '../../services/contacts.js';


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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onAddNewAccount = this.onAddNewAccount.bind(this);
  }


  onAddNewAccount() {
    newContact(this.state).then(response => (response));
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  newContact() {
    return (
      <main className="form_create_account">
        <Form>
          <h3>Registration</h3>
          <p className="required">*All fields are required.</p>
          <label htmlFor="firstname" className="field_group">
            <div className="blocks">
              Firstname:
              <Input
                className="inputs_group"
                errorClassName="is-invalid-input"
                type="text"
                containerClassName=""
                value=""
                onChange={this.handleInputChange}
                name="firstname"
                validations={['required', 'alpha']}
              />
            </div>
          </label>
          <label htmlFor="lastname" className="field_group">
            <div className="blocks">
              Lastname:
              <Input
                className="inputs_group"
                errorClassName="is-invalid-input"
                type="text"
                containerClassName=""
                value=""
                onChange={this.handleInputChange}
                name="lastname"
                validations={['required', 'alpha']}
              />
            </div>
          </label>
          <label htmlFor="city" className="field_group">
            <div className="blocks">
              City:
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
            </div>
          </label>
          <label htmlFor="email" className="field_group">
            <div className="blocks">
              Email:
              <Input
                className="inputs_group"
                value="email@email.com"
                onChange={this.handleInputChange}
                name="email"
                validations={['required', 'email']}
              />
            </div>
          </label>
          <label htmlFor="password" className="field_group">
            <div className="blocks">
              Password:
              <Input
                className="inputs_group"
                type="password"
                value=""
                onChange={this.handleInputChange}
                name="password"
                validations={['required']}
              />
            </div>
          </label>
          <label htmlFor="confirm" className="field_group">
            <div className="blocks">
            Confirm password:
              <Input
                className="inputs_group"
                type="password"
                errorClassName="is-invalid-input"
                containerClassName=""
                value=""
                onChange={this.handleInputChange}
                name="passwordConfirm"
                validations={['required', 'password']}
              />
            </div>
          </label>
          <Link to="/pm" className="button_create_account">
            <Button onClick={this.onAddNewAccount}> Create an account. </Button>
          </Link>
        </Form>
      </main>
    );
  }
  render() {
    return (
      <div>
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
