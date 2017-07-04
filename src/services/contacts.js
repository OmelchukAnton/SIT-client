import md5 from 'md5';

export function getContacts() {
  return fetch('http://localhost:3000/users', {}).then(res => res.json().then(data => data.data));
}

export function getOwnContacts() {
  const user = JSON.parse(localStorage.getItem('userData') || '{}');
  const url = `http://localhost:3000/users/${user._id}`;
  return fetch(url, {}).then(res => res.json().then(data => data.data[0].contacts));
}

export function newContact(data) {
  const _data = data;
  _data.password = md5(_data.password);
  _data.passwordConfirm = md5(_data.passwordConfirm);
  return (
    fetch('http://localhost:3000/reg', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(_data),
    })
  ).then(res => res.json());
}

export function checkAccount(userData) {
  return (
    fetch('http://localhost:3000/auth', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(userData),
    })
  ).then(res => res.json()).then((data) => {
    const requireField = data.data && data.data[0];
    if (requireField) {
      localStorage.setItem('userData', JSON.stringify(requireField));
    }
  });
}

export function addIdNewContact(contact) {
  return (
    fetch('http://localhost:3000/addId', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ contact }),
    })
  ).then(res => res.json());
}
