export function parseCookies(header: string[]) {
  return header
    .map(h => h.split(';'))
    .map(h => h[0])
    .map(h => h.split('='))
    .reduce((c, [k, v]) => ({ ...c, [k]: v}), {})
}

export function formatCookiesForRequest(cookies: {[key: string]: string} = null) {
  if (!cookies) return null;

  return Object.entries(cookies)
    .map(([key, value]) => `${key}=${value}`)
    .join(';');
}

export function deepMerge(target: Object, source: Object) {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of Object.keys(source))
    if (source[key] instanceof Object) Object.assign(source[key], deepMerge(target[key], source[key]));

  // Join `target` and modified `source`
  Object.assign(target || {}, source);
  return target;
}

export const timeout = (milliseconds: number) => new Promise(o => setTimeout(o, milliseconds));