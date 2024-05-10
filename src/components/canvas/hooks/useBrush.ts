import React, {RefObject, useState} from "react";
import { TOOLBAR_WIDTH_BOX } from "../consts.ts";

export function useBrush(ref: RefObject<HTMLCanvasElement>) {
  const ctx = ref.current?.getContext('2d');

  const [isDrawing, setIsDrawing] = useState(false);
  const [lastCoords, setLastCoords] = useState({ x: 0, y: 0 });

  if (!ctx) return {};

  const handleStartBrush = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);

    ctx.beginPath();
    ctx.moveTo(e.clientX - TOOLBAR_WIDTH_BOX, e.clientY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(e.clientX - TOOLBAR_WIDTH_BOX, e.clientY - 5);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(e.clientX - TOOLBAR_WIDTH_BOX, e.clientY + 5);
    ctx.stroke();

    setLastCoords({ x: e.clientX - TOOLBAR_WIDTH_BOX, y: e.clientY });
  }

  const handleBrush = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing) {
      ctx.beginPath();
      ctx.strokeStyle = '#fff';
      ctx.moveTo(lastCoords.x, lastCoords.y);
      ctx.lineTo(e.clientX - TOOLBAR_WIDTH_BOX, e.clientY);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = '#fff';
      ctx.moveTo(lastCoords.x, lastCoords.y - 5);
      ctx.lineTo(e.clientX - TOOLBAR_WIDTH_BOX, e.clientY - 5);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = '#fff';
      ctx.moveTo(lastCoords.x, lastCoords.y + 5);
      ctx.lineTo(e.clientX - TOOLBAR_WIDTH_BOX, e.clientY + 5);
      ctx.stroke();

      setLastCoords({ x: e.clientX - TOOLBAR_WIDTH_BOX, y: e.clientY });
    }
  }

  const handleEndBrush = () => {
    if (isDrawing) {
      ctx.closePath();
      setIsDrawing(false)
    }
  }

  return { handleStartBrush, handleBrush, handleEndBrush };
}