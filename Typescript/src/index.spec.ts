import { canTakeHorizontally } from "./index";

const strToNumber = (s: string) => parseInt(s, 2);

test("two queens cannot be on the same row", () => {
  expect(canTakeHorizontally(strToNumber("10000000"), strToNumber("00100000")));
});
