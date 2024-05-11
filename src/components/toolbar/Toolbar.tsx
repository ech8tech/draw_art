import styles from './Toolbar.module.css';

export function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <button className={styles.button} type='button'>Save</button>
      <button className={styles.button} type='button'>Clean</button>
      <button className={styles.button} type='button'>Undo</button>
      <button className={styles.button} type='button'>Redo</button>
    </div>
  )
}