/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-shadow
export enum Result {
  Correct = "Correct",
  Fail = "Fail",
}

export interface Occurrence {
  result: Result;
  occurredAt: Date;
  cardId: string;
}
