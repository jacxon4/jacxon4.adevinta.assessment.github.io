export const RestMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const handleFetch = (endpoint, method, body = null) => {
  const getRequestConfig = (method, body) => {
    const returnObject = {
      headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
      },
      method,
    };
    if (body !== null) {
      returnObject.body = JSON.stringify(body);
    }

    return returnObject;
  };
  return fetch(endpoint, getRequestConfig(method, body))
    .then(response => {
      if (response.status === 200 || response.status === 201) {
        return response.json();
      } else {
        throw new Error(`${response.status} : ${response.statusText}`);
      }
    })
    .catch(handleErrors);
};

const handleErrors = error => {
  throw error;
};
