import React from 'react';
// import Validation from 'react-validation';
import { Form, Input, Select, Button } from 'react-validation/lib/build/validation.rc.js';
import { Link } from 'react-router-dom';


const CreateAccount = () => (
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
export default CreateAccount;
