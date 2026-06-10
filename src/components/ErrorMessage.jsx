import styles from './ErrorMessage.module.css'

function ErrorMessage({ message }) {
  return (
    <div className={styles.box} role="alert">
      <span className={styles.icon}>⚠️</span>
      <span className={styles.text}>{message}</span>
    </div>
  )
}

export default ErrorMessage
