export const canTakeHorizontally = (queen1: number, queen2: number) =>
  queen1 > 0 && queen2 > 0;

export const canTakeVertically = (queen1: number, queen2: number) =>
  (queen1 & queen2) > 0;

export const canTakeDiagonally = (
  queen1: number,
  queen2: number,
  rowDistance: number
) => {
  return (
    canTakeVertically(queen1 >> rowDistance, queen2) ||
    canTakeVertically(queen1, queen2 >> rowDistance)
  );
};
