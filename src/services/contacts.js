export default function getContacts() {
  return fetch('http://localhost:3000/start').then(res => res.json());
}
