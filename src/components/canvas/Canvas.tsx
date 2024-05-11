import {CanvasField} from "./canvasField/CanvasField.tsx";
import {CanvasMain} from "./canvasMain/CanvasMain.tsx";
import styles from './Canvas.module.css'
import {useEffect, useRef, useState} from "react";

export function Canvas({ toolId } : { toolId?: string }) {
  const refCanvas = useRef<HTMLDivElement | null>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const params = refCanvas.current?.getBoundingClientRect();
    const { width, height } = params || {}
    
    setWidth(width || 0);
    setHeight(height || 0);
  }, [refCanvas.current])

  return (
    <div ref={refCanvas} className={styles.canvas}>
      <CanvasMain width={width} height={height} toolId={toolId} />
      <CanvasField width={width} height={height} />
    </div>
  )
}