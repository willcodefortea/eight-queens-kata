import { isBoardValid } from "./rules";

const strToNumber = (s: string) => parseInt(s, 2);
const buildBoard = () => {
  return [0, 0, 0, 0, 0, 0, 0, 0];
};

test.each`
  firstRow      | secondRow     | type
  ${"10000010"} | ${"00000000"} | ${"row"}
  ${"10000000"} | ${"10000000"} | ${"column"}
  ${"10000000"} | ${"01000000"} | ${"diagonal l->r"}
  ${"01000000"} | ${"10000000"} | ${"diagonal r->l"}
`("two queens cannot be in the same $type", ({ firstRow, secondRow }) => {
  expect(
    isBoardValid([
      strToNumber(firstRow),
      strToNumber(secondRow),
      0,
      0,
      0,
      0,
      0,
      0,
    ])
  ).toBe(false);
});
