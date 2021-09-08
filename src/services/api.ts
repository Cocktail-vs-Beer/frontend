
const BASE_URL = process.env.NODE_ENV === 'development' ? 'https://xgvjhc94lf.execute-api.eu-west-3.amazonaws.com' : 'https://me87vyuhb3.execute-api.eu-west-3.amazonaws.com'

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