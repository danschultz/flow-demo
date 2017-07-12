// @flow

import * as Redux from "redux";
import { App } from "../models";
import * as Counter from "./counter";

const initialState: App = {
  count: 0
};

export const reducer = Redux.combineReducers({
  count: Counter.reducer
});
