import cn from 'classnames';
import styles from "../App.module.css";
import { TOOLBAR_WIDTH } from "./canvas/consts";

type ToolbarProps = {
  onSelectToolId: (toolId: string) => void;
  toolId?: string;
}

export function Toolbar({ onSelectToolId, toolId }: ToolbarProps) {
  const tools = [
    [{ id: 'tool_arrow', text: 'Стрел.' }, { id: 'tool_selection', text: 'Выдел.' }],
    [{ id: 'tool_lasso', text: 'Лассо' }, { id: 'tool_trim', text: 'Стрел.' }],
    [{ id: 'tool_cut', text: 'Вырез.' }, { id: 'tool_eraser', text: 'Ластк.' }],
    [{ id: 'tool_pencil', text: 'Каран.' }, { id: 'tool_brush', text: 'Кисть' }],
    [{ id: 'tool_pixel', text: 'Пиксл.'}]
  ]

  return (
    <div className={styles.main}>
      <div className={styles.toolbar} style={{ width: TOOLBAR_WIDTH }}>
        <div className={styles.tools}>
          {tools.map((toolsGroup, idx) => {
            return (
              <div key={idx} className={styles.toolsGroup}>
                {toolsGroup.map(tool => (
                  <div className={styles.tool}>
                    <button
                      onClick={() => onSelectToolId(tool.id)}
                      type="button"
                      id={tool.id}
                      className={cn(styles.tool_btn, {
                        [styles.active]: tool.id === toolId
                      })}
                    >
                      {tool.text}
                    </button>
                  </div>
                ))}
              </div>
            )}
          )}
        </div>
      </div>
    </div>
  )
}

