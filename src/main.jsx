// @flow

import * as React from "react";
import * as ReactDom from "react-dom";
import { createStore, bindActionCreators, Dispatch } from "redux";
import { AppView } from "./views/app";
import { reducer } from "./reducers";
import * as CounterActions from "./actions/counter";
import { App } from "./models";

type Render<S> = (state: S) => any;

export function main(container: Element): void {
  const store = createStore(reducer);
  const render = renderTo(container, store.dispatch);

  store.subscribe(() => render(store.getState()));
  render(store.getState());
}

function renderTo(container: Element, dispatch: Dispatch<App>): Render<App> {
  const actions = bindActionCreators(CounterActions, dispatch);
  return state =>
    window.requestAnimationFrame(() =>
      ReactDom.render(<AppView state={state} actions={actions} />, container)
    );
}
