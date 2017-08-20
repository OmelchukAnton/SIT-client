export function getMessages() {
  return fetch('http://localhost:3000/messages', {}).then(res => res.json().then(data => data.data[0].messages[0]));
}

export function createNewChat(data) {
  return (
    fetch('http://localhost:3000/createChat', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
  ).then(res => res.json());
}
