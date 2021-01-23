export declare function parseCookies(header: string[]): {};
export declare function formatCookiesForRequest(cookies?: {
    [key: string]: string;
}): string;
export declare function deepMerge(target: Object, source: Object): Object;
export declare const timeout: (milliseconds: number) => Promise<unknown>;
