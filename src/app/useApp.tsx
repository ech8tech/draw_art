import React, {useState} from "react";
import {CANVAS_OFFSET_LEFT, CANVAS_OFFSET_TOP, CELL_SIZE} from "../components/canvas/consts.ts";
import {AppContextProps} from "./AppContext.tsx";

export function useApp(): AppContextProps {
  const [coords, setCoords] = useState<[number, number]>([0, 0]);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [color, setColor] = useState<string>('#fff');

  const handleSetCoords = (e: React.MouseEvent) => {
    const x = Math.floor((e.clientX - CANVAS_OFFSET_LEFT) / CELL_SIZE) * 10;
    const y = Math.floor((e.clientY - CANVAS_OFFSET_TOP) / CELL_SIZE) * 10;

    setCoords([x, y]);
    return [x, y];
  }

  const handleSetIsDrawing = (isDrawing: boolean) => {
    setIsDrawing(!isDrawing);
  }

  const handleChangeColor = (color: string) => {
    setColor(color);
  }

  return {
    app: {
      coords,
      isDrawing,
      color,
      onSetCoords: handleSetCoords,
      onSetIsDrawing: handleSetIsDrawing,
      onChangeColor: handleChangeColor
    }
  }
}
