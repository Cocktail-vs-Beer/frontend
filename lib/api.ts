const BASE_URL = process.env.NEXT_PUBLIC_ENDPOINT;

export type error = {
  errorKey: string;
  message: string;
};

async function post(
  endpoint: string,
  body: object,
): Promise<[error: error | null, data: any | null]> {
  const resp = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return processResponse(resp);
}

async function get(
  endpoint: string,
): Promise<[error: error | null, data: any | null]> {
  const resp = await fetch(`${BASE_URL}${endpoint}`);
  return processResponse(resp);
}

async function processResponse(
  response: Response,
): Promise<[error: error | null, data: any | null]> {
  const jsonResponse = await response.json();

  console.log(jsonResponse);
  if (response.ok) return [null, jsonResponse];
  else return [jsonResponse, null];
}

export { post, get };
