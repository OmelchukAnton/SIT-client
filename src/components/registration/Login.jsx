import React from 'react';
import { Form, Input, Button } from 'react-validation/lib/build/validation.rc.js';
import { Link } from 'react-router-dom';


const Login = () => (
  <form className="form__login">
    <fieldset>
      <legend>Log in</legend>
      <Form className="location__inform">
        <div>
          <label htmlFor="email" className="location__fields">
            Email*
            <Input className="input__email" value="email@email.com" name="email" validations={['required', 'email']} />
          </label>
          <label htmlFor="password" className="location__fields">
            Password*
            <Input className="input__password" type="password" value="" name="password" validations={['required']} />
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
export default Login;
