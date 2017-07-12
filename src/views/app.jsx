// @flow

import * as React from "react";
import { CanvasView } from "./canvas";
import { CounterView } from "./counter";
import type { App } from "../models";
import type { CounterActions } from "../actions/counter";

type Props = {
  actions: CounterActions,
  state: App
};

export class AppView extends React.PureComponent<any, Props, any> {
  render() {
    const { actions, state } = this.props;
    return (
      <div>
        <span>App View</span>
        <CounterView count={state.count} actions={actions} />
        <CanvasView />
      </div>
    );
  }
}
