export function getContacts() {
  return fetch('http://localhost:3000/users', {}).then(res => res.json().then(data => data.data));
}

export function getOwnContacts() {
  const user = JSON.parse(localStorage.getItem('userData') || "{}");
  // console.log(user._id)
  const url = 'http://localhost:3000/users/' + user._id;
  return fetch(url, {}).then(res => res.json().then(data => data.data[0].contacts));
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
  ).then(res => res.json()).then(data => {
    let user, firstname, email = data.data && data.data[0];

    if (user) {
      localStorage.setItem('userData', JSON.stringify(user));
    } else if (firstname) {
      localStorage.setItem('userData', JSON.stringify(firstname));
    } else if (email) {
      localStorage.setItem('userData', JSON.stringify(email));
    }
  });
}
