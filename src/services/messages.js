import * as api from '../api/index.js';
import { getFirstName } from './user.js';

export function getMessages(chatId) {
  return api.get(`/messages/${chatId}`).then(
    data => data.data[0].messages);
}

export function getNewMessages(chatId, lastMessageTime) {
  return api.get(`/messages/${chatId}?timestamp=${lastMessageTime}`).then(data => data.data);
}

export function sendMessage(message, chatId) {
  const user = getFirstName();
  const time = new Date().getTime();

  const datas = {
    chatId,
    whoSend: user,
    text: message.message,
    sendTime: time,
  };
  return api.post('/newMessage', datas);
}
