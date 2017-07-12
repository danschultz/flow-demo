// @flow

import type { Increment, Decrement } from "../actions/counter";

type Action = Increment | Decrement;

export function reducer(state: number = 0, action: Action): number {
  switch (action.type) {
    case "counter.increment":
      return state + 1;
    case "counter.decrement":
      return state - 1;
    default:
      return state;
  }
}
