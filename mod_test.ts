import { atr } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test({
    name: "atr has same behaviour as at with no replace value",
    fn(): void {
        let arr = [1, 2, 3, 4];
        let atrResult = atr(arr, -1);
        let atResult = arr.at(-1); 
        assertEquals(atrResult, atResult);
    }
})

Deno.test({
    name: "atr replaces properly",
    fn(): void {
        let arr = [1, 2, 3, 4];
        let atrResult = atr(arr, -1, 3);
        assertEquals(atrResult, 3);
        assertEquals(arr, [1, 2, 3, 3]);
        assertEquals(arr.at(-1), 3);
    }
})