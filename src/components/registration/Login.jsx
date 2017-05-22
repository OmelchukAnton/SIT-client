import React from 'react';
import Validation from 'react-validation';
import { Link } from 'react-router-dom';


const Login = () => (
  <form className="form__login">
    <fieldset>
      <legend>Log in</legend>
      <Validation.components.Form className="location__inform">
        <div>
          <label htmlFor="email" className="location__fields">
            Email*
            <Validation.components.Input className="input__email" value="email@email.com" name="email" validations={['required', 'email']} />
          </label>
          <label htmlFor="password" className="location__fields">
            Password*
            <Validation.components.Input className="input__password" type="password" value="" name="password" validations={['required']} />
          </label>
        </div>
        <div>
          <Link to="/pm">
            <Validation.components.Button className="button__login">
              Submit
            </Validation.components.Button>
          </Link>
        </div>
      </Validation.components.Form>
    </fieldset>
  </form>
);
export default Login;
