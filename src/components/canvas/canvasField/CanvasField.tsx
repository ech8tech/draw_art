import {useEffect, useRef} from "react";
import styles from './CanvasField.module.css'
import {CELL_SIZE} from "../../../tools";

export function CanvasField() {
  const cvs = useRef<HTMLCanvasElement | null>(null);

  const drawCells = () => {
    if (cvs.current) {
      const ctx = cvs.current.getContext('2d');

      if (ctx) {
        const width = ctx.canvas.width;
        const height = ctx.canvas.height;

        for (let x = 0; x < width / CELL_SIZE; x++) {
          for (let y = 0; y < height / CELL_SIZE; y++) {
            if ((x + y) % 2 === 0) {
              ctx.fillStyle = '#4d4d4d';
              ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            } else {
              ctx.fillStyle = '#636363';
              ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            }
          }
        }
      }
    }
  }

  useEffect(() => {
    if (cvs.current) {
      drawCells();
    }
  }, []);

  return (
    <canvas
      id="canvas_field"
      ref={cvs}
      className={styles.canvas}
      width="700"
      height="500"
    ></canvas>
  )
}