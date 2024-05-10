import { useBrush } from "./useBrush.ts";
import { usePixel } from "./usePixel.ts";
import {RefObject} from "react";

export function useTools(ref: RefObject<HTMLCanvasElement>) {
  const brush = useBrush(ref);
  const pixel = usePixel(ref);

  return { ...brush, ...pixel }
}
