import {useState} from "react";
import styles from './App.module.css'
import {Canvas, Toolbar, Tools} from "../components";
import {useApp} from "./useApp.tsx";
import {AppContextProvider} from "./AppContext.tsx";

function App() {
  const [toolId, setToolId] = useState<string>();
  const { app } = useApp();

  const handleSelectTool = (toolIdUpdated: string) => {
    if (toolId === toolIdUpdated) {
      setToolId(undefined)
    } else {
      setToolId(toolIdUpdated);
    }
  }

  return (
    <div className={styles.main}>
      <AppContextProvider app={app}>
        <Toolbar />
        <Tools onSelectToolId={handleSelectTool} toolId={toolId}/>
        <Canvas toolId={toolId} />
      </AppContextProvider>
    </div>
  )
}

export default App
