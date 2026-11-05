import assert from "node:assert/strict";
import { llogarit } from "./logjika.js";

assert.deepEqual(llogarit(4, 5, 20), {
  ok: true, total: 20, mbetja: 0, brenda: true
});

assert.deepEqual(llogarit(4.5, 5, 20), {
  ok: true, total: 22.5, mbetja: -2.5, brenda: false
});

assert.deepEqual(llogarit(0.1, 3, 0.3), {
  ok: true, total: 0.3, mbetja: 0, brenda: true
});

assert.equal(llogarit(-1, 2, 20).ok, false);
assert.equal(llogarit(2, 0, 20).ok, false);
assert.equal(llogarit(2, 6, 20).ok, false);
assert.equal(llogarit(Number.NaN, 2, 20).ok, false);
assert.equal(llogarit(2, 2, Number.NaN).ok, false);
assert.equal(llogarit("2", 2, 20).ok, false);

console.log("Të gjitha testet kaluan me sukses.");
