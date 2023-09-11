let useDevelopment = process.env.NODE_ENV === "development";
let developEndpoint = "https://vozwcpjnhi.execute-api.eu-north-1.amazonaws.com";

console.log(developEndpoint);

if (process.browser) {
  // Check if we should use the development endpoint on the production website
  if (!useDevelopment) {
    const params = new URLSearchParams(window.location.search.substring(1));
    useDevelopment = !!params.get("debug");
  }

  // Update the develop endpoint when developing locally
  developEndpoint =
    window.location.hostname === "localhost"
      ? "localhost:3001"
      : "https://vozwcpjnhi.execute-api.eu-north-1.amazonaws.com";
}

console.log(useDevelopment);
const BASE_URL = useDevelopment
  ? developEndpoint
  : "https://v082393a2g.execute-api.eu-west-3.amazonaws.com";

export type error = {
  errorKey: string;
  message: string;
};

async function post(
  endpoint: string,
  body: object
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
  endpoint: string
): Promise<[error: error | null, data: any | null]> {
  const resp = await fetch(`${BASE_URL}${endpoint}`);
  return processResponse(resp);
}

async function processResponse(
  response: Response
): Promise<[error: error | null, data: any | null]> {
  const jsonResponse = await response.json();

  if (response.ok) return [null, jsonResponse.data];

  if (jsonResponse.error || typeof jsonResponse.error !== "undefined")
    return [jsonResponse.error, null];

  return [null, null];
}

export { post, get, useDevelopment };
