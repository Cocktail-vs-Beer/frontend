let useDevelopment = process.env.NODE_ENV === 'development';
let developEndpoint = 'https://xgvjhc94lf.execute-api.eu-west-3.amazonaws.com';

if (process.browser) {
  // Check if we should use the development endpoint on the production website
  if (!useDevelopment) {
    const params = new URLSearchParams(window.location.search.substring(1));
    useDevelopment = !!params.get('debug');
  }

  // Update the develop endpoint when developing locally
  developEndpoint = window.location.hostname === 'localhost' ? 'http://localhost:3001' : 'https://xgvjhc94lf.execute-api.eu-west-3.amazonaws.com'
}

console.log(useDevelopment, developEndpoint);
const BASE_URL = useDevelopment ? developEndpoint : 'https://me87vyuhb3.execute-api.eu-west-3.amazonaws.com'

export type error = {
  errorKey: string,
  message: string
}

async function post(endpoint: string, body: object): Promise<[error: error | null, data: any | null]> {
  const resp = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(body)
  });
  
  const jsonResponse = await resp.json();

  if (resp.ok)
    return [null, jsonResponse.data]

  if (jsonResponse.error || typeof jsonResponse.error !== 'undefined')
    return [jsonResponse.error, null]

  return [null, null];
}

export {
  post
}