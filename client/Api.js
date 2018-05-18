const Api = {};

Api.get = (url, data = {}) => {
  const params = new URLSearchParams(data)
  return fetch(`/api/${url}?${params.toString()}`)
    .then(response => response.json());
}

Api.post = (url, data) => {
  const options = {
    body: JSON.stringify(data),
     method: 'POST'
  };
  return fetch(`/api/${url}`, options)
    .then(response => response.json());
}

export default Api;
