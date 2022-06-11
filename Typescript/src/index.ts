export const canTakeHorizontally = (queen1: number, queen2: number) =>
  queen1 > 0 && queen2 > 0;

export const canTakeVertically = (queen1: number, queen2: number) =>
  (queen1 & queen2) > 0;
