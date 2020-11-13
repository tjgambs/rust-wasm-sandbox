import * as wasm from "../pkg";
import fibonacci from "./src";

const n = 45;

const t0 = performance.now();
wasm.fibonacci(n);
const t1 = performance.now();
document.getElementById("wasm").innerHTML = `${(t1- t0).toFixed(2)} milliseconds`

const t2 = performance.now();
fibonacci(n);
const t3 = performance.now();
document.getElementById("javascript").innerHTML = `${(t3 - t2).toFixed(2)} milliseconds`
