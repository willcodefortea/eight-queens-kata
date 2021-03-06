export type Board = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

const isPowerOf2OrZero = (num: number) => Math.log2(num) % 1 === 0 || num === 0;

const canTakeHorizontally = (...rows: number[]): Boolean => {
  return rows.reduce((result, row) => result || !isPowerOf2OrZero(row), false);
};

const canTakeVertically = (...rows: number[]): Boolean => {
  let canTake = false;
  rows.reduce((current, row) => {
    if ((current & row) > 0) canTake = true;
    return current | row;
  }, 0);
  return canTake;
};

const canTakeDiagonally = (...rows: number[]): Boolean => {
  for (let i = 0; i < rows.length - 1; i++) {
    for (let j = i + 1; j < rows.length; j++) {
      const dist = j - i;
      if (
        canTakeVertically(rows[i] >> dist, rows[j]) ||
        canTakeVertically(rows[i] << dist, rows[j])
      ) {
        return true;
      }
    }
  }
  return false;
};

export const isBoardValid = (board: Board): Boolean => {
  return !(
    canTakeHorizontally(...board) ||
    canTakeVertically(...board) ||
    canTakeDiagonally(...board)
  );
};

export const isComplete = (board: Board) => {
  return board.reduce((rowsFilled, row) => rowsFilled && row > 0, true);
};

export const printBoard = (board: Board) => {
  board.forEach((row) => {
    const rowChars = [];
    for (const char of row.toString(2).padStart(8, "0")) {
      const friendlyChar = char === "1" ? "👸" : "🔲";
      rowChars.push(friendlyChar);
    }
    console.log(rowChars.join(""));
  });
};
