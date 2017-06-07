export function getContacts() {
  return fetch('http://localhost:3000/users', {}).then(res => res.json().then(data => data.data));
}

// export default function newContact() {
//   // return fetch('http://localhost:3000/reg', {}).then(res => res.json().then(JSON.stringify(data)));
//   return fetch('http://localhost:3000/reg', {}).then(res => res.json()).then(json => )
// }

// const data = {
//   firstname: 'ant',
// };
export function newContact(data) {
  return (
    fetch('http://localhost:3000/reg', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
  );
}
