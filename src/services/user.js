let myUser = null;

export function getFirstName() {
  return myUser.firstname;
}

export function getEmail() {
  return myUser.email;
}

export function getLastName() {
  return myUser.lastname;
}

export function getUserId() {
  return myUser._id;
}

export function saveUser(user) {
  localStorage.setItem('userData', user);
  myUser = user;
}

export function getUser() {
  // if (!myUser) {
  //   return myUser;
  // }
  myUser = JSON.parse(localStorage.getItem('userData') || '{}');
}
