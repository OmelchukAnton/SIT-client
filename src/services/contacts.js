export function getContacts() {
  return fetch('http://localhost:3000/users', {}).then(res => res.json().then(data => data.data));
}

export function newContact(data) {
  return (
    fetch('http://localhost:3000/reg', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
  ).then(res => res.json());
}

export function checkAccount(data) {
  return (
    fetch('http://localhost:3000/auth', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
  ).then(res => res.json());
}
