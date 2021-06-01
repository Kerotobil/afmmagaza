import { createArrayRotator } from "./createArrayRotator";

const endpoints = [
  { url: 'https://www.googleapis.com', status: 404, },
  { url: 'https://api.hetzner.cloud', status: 404, },
  { url: 'https://api.digitalocean.com/v2', status: 404, },
  { url: 'https://dynamodb.us-east-1.amazonaws.com', status: 200, },
  { url: 'https://dynamodb.us-east-2.amazonaws.com', status: 200, },
  { url: 'https://dynamodb.eu-west-1.amazonaws.com', status: 200, },
  { url: 'https://dynamodb.eu-west-2.amazonaws.com', status: 200, },
  { url: 'https://dynamodb.eu-west-3.amazonaws.com', status: 200, },
]

const getNextEndpoint = createArrayRotator(endpoints, true);

export async function isOnline(testCount = 1): Promise<boolean> {
  const tests = Array(testCount).fill(null).map(_ => checkRandomEndpoint());

  return Promise.any(tests).catch(_ => false);
}

async function checkRandomEndpoint(): Promise<boolean> {
  const endpoint = getNextEndpoint();
  return (await fetch(endpoint.url)).status === endpoint.status;
}

// @ts-ignore
if (process.browser) {
  (<any>window).isOnline = isOnline;
}
