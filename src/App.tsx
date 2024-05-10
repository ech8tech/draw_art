import {useState} from "react";
import styles from './App.module.css'
import {Toolbar} from "./components/Toolbar.tsx";
import {CanvasField, CanvasMain} from "./components/canvas";

function App() {
  const [toolId, setToolId] = useState<string>();

  const handleSelectTool = (toolIdUpdated: string) => {
    if (toolId === toolIdUpdated) {
      setToolId(undefined)
    } else {
      setToolId(toolIdUpdated);
    }
  }

  return (
    <div className={styles.main}>
      <Toolbar onSelectToolId={handleSelectTool} toolId={toolId}/>
      <CanvasMain toolId={toolId} />
      <CanvasField />
    </div>
  )
}

export default App
