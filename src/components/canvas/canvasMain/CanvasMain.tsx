import React, {useRef} from "react";
import styles from './CanvasMain.module.css'
import {useTools} from "../hooks";

type CanvasMainProps = {
  toolId?: string;
  width?: number;
  height?: number;
}

export function CanvasMain({ toolId, width, height }: CanvasMainProps) {
  const cvs = useRef<HTMLCanvasElement | null>(null);

  const {
    handleBrush,
    handleStartBrush,
    handleEndBrush,
    handlePixel,
    handlePixelStart,
    handlePixelEnd
  } = useTools(cvs);

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    switch (toolId) {
      case 'tool_pixel':
        handlePixelStart?.(event);
        break;
      case 'tool_pencil':
        handleStartBrush?.(event);
        break;
    }
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    switch (toolId) {
      case 'tool_pixel':
        handlePixel?.(event);
        break;
      case 'tool_pencil':
        handleBrush?.(event);
        break;
    }
  }

  const handleMouseUp = () => {
    switch (toolId) {
      case 'tool_pixel':
        handlePixelEnd?.();
        break;
      case 'tool_pencil':
        handleEndBrush?.();
        break;
    }
  }

  if (width && height) {
    return (
      <canvas
        id="canvas_main"
        ref={cvs}
        className={styles.canvas}
        width={width}
        height={height}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      ></canvas>
    )
  }

  return null;
}