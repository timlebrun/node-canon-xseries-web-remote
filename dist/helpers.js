"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeout = exports.deepMerge = exports.formatCookiesForRequest = exports.parseCookies = void 0;
function parseCookies(header) {
    return header
        .map(h => h.split(';'))
        .map(h => h[0])
        .map(h => h.split('='))
        .reduce((c, [k, v]) => ({ ...c, [k]: v }), {});
}
exports.parseCookies = parseCookies;
function formatCookiesForRequest(cookies = null) {
    if (!cookies)
        return null;
    return Object.entries(cookies)
        .map(([key, value]) => `${key}=${value}`)
        .join(';');
}
exports.formatCookiesForRequest = formatCookiesForRequest;
function deepMerge(target, source) {
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (const key of Object.keys(source))
        if (source[key] instanceof Object)
            Object.assign(source[key], deepMerge(target[key], source[key]));
    // Join `target` and modified `source`
    Object.assign(target || {}, source);
    return target;
}
exports.deepMerge = deepMerge;
const timeout = (milliseconds) => new Promise(o => setTimeout(o, milliseconds));
exports.timeout = timeout;
