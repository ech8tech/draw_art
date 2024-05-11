import React, {RefObject, useState} from "react";
import {CELL_SIZE} from '../consts.ts'
import {useApp} from "../../../app/useApp.tsx";

export function usePixel(ref: RefObject<HTMLCanvasElement>) {
  const ctx = ref.current?.getContext('2d');
  const { app } = useApp();

  const [isDrawing, setIsDrawing] = useState(false);

  if (!ctx) return {};

  const handlePixelStart = (e: React.MouseEvent) => {
    setIsDrawing(true);

    const [x, y] = app.onSetCoords(e);

    ctx.fillStyle = 'red'
    ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
  }

  const handlePixel = (e: React.MouseEvent) => {
    if (isDrawing) {
      const [x, y] = app.onSetCoords(e);

      ctx.fillStyle = 'red'
      ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
    }
  }

  const handlePixelEnd = () => {
    setIsDrawing(false);
  }

  return { handlePixelStart, handlePixel, handlePixelEnd }
}