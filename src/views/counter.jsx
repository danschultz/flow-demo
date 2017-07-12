// @flow

import * as React from "react";
import type { CounterActions } from "../actions/counter";

type Props = {
  count: number,
  actions: CounterActions
};

export class CounterView extends React.PureComponent<any, Props, any> {
  render() {
    const { actions, count } = this.props;
    return (
      <div>
        <button onClick={() => actions.decrement()}>Decrement</button>
        <span>
          {count}
        </span>
        <button onClick={() => actions.increment()}>Increment</button>
      </div>
    );
  }
}
