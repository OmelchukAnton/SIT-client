export function getMessages() {
  return fetch('http://localhost:3000/messages', {}).then(res => res.json().then(data => data.data[0].messages));
}

export function sendMessage(message) {
  const user = JSON.parse(localStorage.getItem('userData') || '{}');
  const time = new Date();
  const sendTime = `${time.getHours()}:${time.getMinutes()}`
  const data = {
    whoSend: user.firstname,
    text: message.message,
    sendTime: sendTime,
  };
  return (
    fetch('http://localhost:3000/newMessage', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    })
  ).then(res => res.json());
}
