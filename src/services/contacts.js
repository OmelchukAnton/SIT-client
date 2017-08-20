import md5 from 'md5';

export function getContacts() {
  return fetch('http://localhost:3000/users', {}).then(res => res.json().then(data => data.data));
}

export function getOwnContacts() {
  const user = JSON.parse(localStorage.getItem('userData') || '{}');
  const url = `http://localhost:3000/users/${user._id}`;
  return fetch(url, {}).then(res => res.json().then(data => data.data[0].contacts));
}

export function getFilterContacts() {
  const user = JSON.parse(localStorage.getItem('userData') || '{}');

  return fetch(`http://localhost:3000/find/${user._id}`, {}).then(res => res.json()).then(
    data => data.data,
  );
}

export function createContact(data) {
  const _data = data;
  _data.password = md5(_data.password);
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
  const hashedUserData = {
    ...userData,
    password: md5(userData.password),
  };

  return (
    fetch('http://localhost:3000/auth', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(hashedUserData),
    })
  ).then(res => res.json()).then((data) => {
    const requireField = data.data && data.data[0];
    if (requireField) {
      localStorage.setItem('userData', JSON.stringify(requireField));
    }
  });
}

export function addIdNewContact(contact) {
  const user = JSON.parse(localStorage.getItem('userData') || '{}');
  const data = {
    mainId: user._id,
    newContactId: contact._id,
  };
  return (
    fetch('http://localhost:3000/addId', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ data }),
    })
  ).then(res => res.json());
}
