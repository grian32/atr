// Credit: https://github.com/tc39/proposal-relative-indexing-method#polyfill
/**
 * Same behaviour as the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at at method} except that it takes in an optional replace value that replaces the specified index
 * @param arr The array
 * @param n The requested index
 * @param r The replace value 
 * @returns The requested element at the index
 */
export function atr(arr: any, n: number, r: any = undefined) {
    // arr's and r's type is any because i cant get it to type properly
    // ToInteger() abstract op
    n = Math.trunc(n) || 0;
    // Allow negative indexing from the end
    if(n < 0) n += arr.length;
    // OOB access is guaranteed to return undefined
    if(n < 0 || n >= arr.length) return undefined;
    
    if (r === undefined) {
        return arr[n];
    }
    arr[n] = r;
    return arr[n];
}