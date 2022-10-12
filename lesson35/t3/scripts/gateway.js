export const sendRequest = (url) => fetch(`${url}`)
.then(response => response.json())