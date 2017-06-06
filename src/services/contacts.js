export default function getContacts() {
  return fetch('http://localhost:3000/users', {}).then(res => res.json().then(data => data.data));
}

const data = {
  firstname: ant,
};
fetch('http://localhost:8080/reg', {
  method: 'POST',
  body: JSON.stringify(data),
});
