import {useState} from "react";
import styles from './App.module.css'
import {Canvas, Toolbar, Tools} from "./components";

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
      <Toolbar />
      <Tools onSelectToolId={handleSelectTool} toolId={toolId}/>
      <Canvas toolId={toolId} />
    </div>
  )
}

export default App
