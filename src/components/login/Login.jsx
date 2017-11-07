import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button } from 'react-validation/lib/build/validation.rc.js';
import { checkAccount } from '../../services/contacts.js';
import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.accountVerification = this.accountVerification.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  accountVerification(e) {
    e.preventDefault();
    checkAccount(this.state).then(() => {
      this.props.history.push('/pm');
    });
  }

  render() {
    return (
      <div>
        <div className="login">
          <fieldset className="login__fieldset">
            <Form onSubmit={this.accountVerification} className="login__fieldset_form">
              <div className="login__fieldset_form_info">
                <h2> Authorization </h2>
                <summary className="login__fieldset_form_info_summary">
                  Enter your registration information to enter your personal account.
                </summary>
              </div>
              <div>
                <label htmlFor="email" className="login__fieldset_form_inputs">
                  <Input
                    className="login__fieldset_form_inputs_email"
                    placeholder="email@email.com"
                    value=""
                    onChange={this.handleInputChange}
                    name="email"
                    validations={['required', 'email']}
                  />
                </label>
                <label htmlFor="password" className="login__fieldset_form_inputs">
                  <Input
                    className="login__fieldset_form_inputs_password"
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
                <Button className="login__fieldset_form_button">
                  Enter
                </Button>
              </div>
              <div className="login__fieldset_form_entry">
                <aside> Enter through: </aside>
                <div className="login__fieldset_form_entry_passport">
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
}

Login.propTypes = {
  history: React.PropTypes.object.isRequired,
};

Login.defaultProps = {
};

export default withRouter(Login);
