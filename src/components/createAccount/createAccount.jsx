import React, { Component } from 'react';
import { Form, Input, Button } from 'react-validation/lib/build/validation.rc.js';
import { Link } from 'react-router-dom';
import { createContact } from '../../services/contacts.js';
import './createAccount.scss';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onAddNewAccount = this.onAddNewAccount.bind(this);
  }

  onAddNewAccount() {
    createContact(this.state);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  newContact() {
    return (
      <main className="formCreateAcc">
        <Form>
          <h3>Create a new account</h3>
          <p className="formCreateAcc__required">*All fields are required.</p>
          <label htmlFor="firstname" className="formCreateAcc__group">
            <div className="formCreateAcc__group_blocks">
              <Input
                className="formCreateAcc__group_blocks_inputs"
                errorClassName="is-invalid-input"
                type="text"
                placeholder="Firstname"
                containerClassName=""
                value=""
                onChange={this.handleInputChange}
                name="firstname"
                validations={['required', 'alpha']}
              />
            </div>
          </label>
          <label htmlFor="lastname" className="formCreateAcc__group">
            <div className="formCreateAcc__group_blocks">
              <Input
                className="formCreateAcc__group_blocks_inputs"
                errorClassName="is-invalid-input"
                type="text"
                placeholder="Lastname"
                containerClassName=""
                value=""
                onChange={this.handleInputChange}
                name="lastname"
                validations={['required', 'alpha']}
              />
            </div>
          </label>
          <label htmlFor="email" className="formCreateAcc__group">
            <div className="formCreateAcc__group_blocks">
              Email:
              <Input
                className="formCreateAcc__group_blocks_inputs"
                value=""
                placeholder="email@email.com"
                onChange={this.handleInputChange}
                name="email"
                validations={['required', 'email']}
              />
            </div>
          </label>
          <label htmlFor="password" className="formCreateAcc__group">
            <div className="formCreateAcc__group_blocks">
              Password:
              <Input
                className="formCreateAcc__group_blocks_inputs"
                type="password"
                placeholder="*****"
                value=""
                onChange={this.handleInputChange}
                name="password"
                validations={['required']}
              />
            </div>
          </label>
          <label htmlFor="confirm" className="formCreateAcc__group">
            <div className="formCreateAcc__group_blocks">
              <Input
                className="formCreateAcc__group_blocks_inputs"
                type="password"
                placeholder="Confirm password"
                errorClassName="is-invalid-input"
                containerClassName=""
                value=""
                onChange={this.handleInputChange}
                name="passwordConfirm"
                validations={['required', 'password']}
              />
            </div>
          </label>
          <div className="formCreateAcc__buttonCreateAcc">
            <Link to="/" >
              <Button onClick={this.onAddNewAccount}> Create an account. </Button>
            </Link>
          </div>
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
  email: React.PropTypes.string,
  password: React.PropTypes.string,
};

CreateAccount.defaultProps = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
};
