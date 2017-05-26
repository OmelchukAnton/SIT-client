import React from 'react';
import { rules } from 'react-validation/lib/build/validation.rc';
import validator from 'validator';

Object.assign(rules, {
  required: {
    rule: value => value.toString().trim(),
    hint: () => <span className="form-error is-visible"> <br /> Required</span>,
  },

  email: {
    rule: value => validator.isEmail(value),
    hint: value =>
      <span className="form-error is-visible">
        <br /> {value} - is not an Email.
      </span>,
  },
  alpha: {
    rule: value => validator.isAlpha(value),
    hint: () =>
      <span className="form-error is-visible">
        <br /> String should contain only letters (a-z, A-Z).
      </span>,
  },
  password: {
    rule: (value, components) => {
      const password = components.password.state;
      const passwordConfirm = components.passwordConfirm.state;
      const isBothUsed = password
        && passwordConfirm
        && password.isUsed
        && passwordConfirm.isUsed;
      const isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;

      if (!isBothUsed || !isBothChanged) {
        return true;
      }

      return password.value === passwordConfirm.value;
    },
    hint: () => <span className="form-error is-visible"> <br /> Passwords should be equal.</span>,
    api: {
      hint: value => (
        <button
          className="form-error is-visible"
        >
          <br /> API Error on {value} value. Focus to hide.
        </button>
      ),
    },
  },
});
