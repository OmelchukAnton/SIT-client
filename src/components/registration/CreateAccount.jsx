import React from 'react';
import Validation from 'react-validation';
import { Link } from 'react-router-dom';


const CreateAccount = () => (
  <main className="form_create_account">
    <Validation.components.Form>
      <h3>Registration</h3>
      <label htmlFor="firstname" className="field_group">
        Firstname*
        <Validation.components.Input
          className="inputs_group"
          errorClassName="is-invalid-input"
          type="text"
          containerClassName=""
          value=""
          name="firstname"
          validations={['required', 'alpha']}
        />
      </label>
      <label htmlFor="lastname" className="field_group">
        Lastname*
        <Validation.components.Input
          className="inputs_group"
          errorClassName="is-invalid-input"
          type="text"
          containerClassName=""
          value=""
          name="lastname"
          validations={['required', 'alpha']}
        />
      </label>
      <label htmlFor="city" className="field_group">
        City*
        <Validation.components.Select
          className="inputs_group"
          errorClassName="is-invalid-input"
          name="city"
          value=""
          validations={['required']}
        >
          <option value="">Choose your city</option>
          <option value="1">Brest</option>
          <option value="2">Minsk</option>
          <option value="3">New York</option>
        </Validation.components.Select>
      </label>
      <label htmlFor="email" className="field_group">
        Email*
        <Validation.components.Input
          className="inputs_group"
          value="email@email.com"
          name="email"
          validations={['required', 'email']}
        />
      </label>
      <label htmlFor="password" className="field_group">
        Password*
        <Validation.components.Input
          className="inputs_group"
          type="password"
          value=""
          name="password"
          validations={['required']}
        />
      </label>
      <label htmlFor="confirm" className="field_group">
        Confirm password*
        <Validation.components.Input
          className="inputs_group"
          type="password"
          errorClassName="is-invalid-input"
          containerClassName=""
          value=""
          name="passwordConfirm"
          validations={['required', 'password']}
        />
      </label>
      <Link to="/pm" className="button_create_account">
        <Validation.components.Button>Submit</Validation.components.Button>
      </Link>
    </Validation.components.Form>
  </main>
);
export default CreateAccount;
