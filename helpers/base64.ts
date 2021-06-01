const base64Regexp = new RegExp(/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/)

export function isBase64(input: string) {
  if (typeof input !== 'string') return false;
  return base64Regexp.test(input);
}


const isBrowser = typeof process !== 'object';


export const base64decode = isBrowser ? atob : ((input: string) => Buffer.from(input, 'base64').toString('utf8'));

export const base64encode = isBrowser ? btoa : ((input: string) => Buffer.from(input, 'utf8').toString('base64'));
