import {
  canTakeDiagonally,
  canTakeVertically,
  canTakeHorizontally,
} from "./index";

const strToNumber = (s: string) => parseInt(s, 2);

test("two queens cannot be on the same row", () => {
  expect(
    canTakeHorizontally(strToNumber("10000000"), strToNumber("00100000"))
  ).toBe(true);
});

test("two queens cannot be in the same column", () => {
  expect(
    canTakeVertically(strToNumber("10000000"), strToNumber("10000000"))
  ).toBe(true);
});

test("two queens cannot be in the same diagonal l->r", () => {
  expect(
    canTakeDiagonally(strToNumber("10000000"), strToNumber("01000000"), 1)
  ).toBe(true);
});

test("two queens cannot be in the same diagonal r->l", () => {
  expect(
    canTakeDiagonally(strToNumber("01000000"), strToNumber("10000000"), 1)
  ).toBe(true);
});
