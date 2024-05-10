import React, {RefObject, useState} from "react";
import { CELL_SIZE } from '../consts.ts'

export function usePixel(ref: RefObject<HTMLCanvasElement>) {
  const ctx = ref.current?.getContext('2d');
  const offsetLeft = ref.current?.offsetLeft || 0;
  const offsetTop = ref.current?.offsetTop || 0;

  const [isDrawing, setIsDrawing] = useState(false);

  if (!ctx) return {};

  const handlePixelStart = (e: React.MouseEvent) => {
    setIsDrawing(true);

    const x = Math.floor((e.clientX - offsetLeft) / CELL_SIZE) * 10;
    const y = Math.floor((e.clientY - offsetTop) / CELL_SIZE) * 10;

    ctx.fillStyle = 'red'
    ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
  }

  const handlePixel = (e: React.MouseEvent) => {
    if (isDrawing) {
      const x = Math.floor((e.clientX - offsetLeft) / CELL_SIZE) * 10;
      const y = Math.floor((e.clientY - offsetTop) / CELL_SIZE) * 10;

      ctx.fillStyle = 'red'
      ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
    }
  }

  const handlePixelEnd = () => {
    setIsDrawing(false);
  }

  return { handlePixelStart, handlePixel, handlePixelEnd }
}