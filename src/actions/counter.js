// @flow

export type Increment = { type: "counter.increment" };
export type Decrement = { type: "counter.decrement" };

export type CounterActions = { increment: () => void, decrement: () => void };

export function increment(): Increment {
  return { type: "counter.increment", name: "foo" };
}

export function decrement(): Decrement {
  return { type: "counter.decrement" };
}
