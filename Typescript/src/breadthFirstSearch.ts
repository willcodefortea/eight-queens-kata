import { Board, isBoardValid, isComplete } from "./rules";
import { nextStates } from "./tree";

export const solve = (): undefined | Board => {
  const toExplore: Board[] = [[0, 0, 0, 0, 0, 0, 0, 0]];

  while (toExplore) {
    const currentState = toExplore.shift();
    const newStates = nextStates(currentState).filter(isBoardValid);

    const solution = newStates.find(isComplete);
    if (solution) {
      return solution;
    }

    newStates.forEach((state) => toExplore.push(state));
  }

  return;
};
