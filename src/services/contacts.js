import md5 from 'md5';
import { getUserId, saveUser } from './user.js';
import * as api from '../api/index.js';

let contacts = {};

export function getContacts() {
  return api.get('/users').then(data => data.data);
}

export function saveOwnContactsToMemory(data) {
  contacts = data;
  return contacts;
}

export function getOwnContacts() {
  return api.get(`/users/${getUserId()}`)
  .then(data => data.data[0].contacts)
  .then(saveOwnContactsToMemory);
}

export function getFilterContacts() {
  return api.get(`/find/${getUserId()}`).then(
    data => data.data);
}

export function createContact(data) {
  const datas = {
    ...data,
    password: md5(data.password),
  };
  return api.post('/reg', datas);
}

export function checkAccount(userData) {
  const datas = {
    ...userData,
    password: md5(userData.password),
  };
  return api.post('/auth', datas).then((data) => {
    const requireField = data.data[0];
    if (requireField) {
      saveUser(JSON.stringify(requireField));
    }
  });
}

export function addIdNewContact(contact) {
  const datas = {
    mainId: getUserId(),
    newContactId: contact._id,
  };

  return api.post('/addId', datas).then(({ data }) => data.length && data[0].chatId);
}

export function addNewAvatar(imageInfo) {
  const formData = new FormData();
  formData.append('photo', imageInfo, getUserId());

  return (
    fetch('http://localhost:5000/public', {
      method: 'POST',
      body: formData,
    })
  );
}
