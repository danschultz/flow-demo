// @flow

import type { Point } from "./point";
import type { Dimensions } from "./dimensions";

export type Rectangle = Point & Dimensions;

export function create(
  x: number,
  y: number,
  width: number,
  height: number
): Rectangle {
  return { x, y, width, height };
}
