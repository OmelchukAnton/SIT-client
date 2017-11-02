const apiEndpoint = 'https://glacial-basin-12371.herokuapp.com';


export function get(url) {
  return fetch(`${apiEndpoint}${url}`).then(res => res.json());
}

export function post(url, datas) {
  return fetch(`${apiEndpoint}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(datas),
  }).then(res => res.json());
}
