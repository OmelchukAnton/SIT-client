import React from 'react';
import { Form, Input, Button } from 'react-validation/lib/build/validation.rc.js';
import { Link } from 'react-router-dom';


const Login = () => (
  <div className="content_login">
    <div className="form__login">
      <fieldset className="fieldset_login_form">
        {/* <legend>Log in</legend> */}
        <Form className="location__inform">
          <div className="login_info">
            <h2> Authorization </h2>
            <summary> Enter your registration information to enter your personal account. </summary>
          </div>
          <div>
            <label htmlFor="email" className="location__fields">
              <Input className="input__email" placeholder="email@email.com" value="" name="email" validations={['required', 'email']} />
            </label>
            <label htmlFor="password" className="location__fields">
              <Input className="input__password" type="password" placeholder="******" value="" name="password" validations={['required']} />
            </label>
          </div>
          <div>
            <Link to="/pm">
              <Button className="button__login">
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
export default Login;
