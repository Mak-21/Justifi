import styles from "./Button.module.css";
function Button({ size = "medium" }) {
  return (
    <a
      className={
        size === "medium" ? styles.btn : `${styles.btn} ${styles.btnLarge}`
      }
      href="https://chatgpt.com/g/g-BFmRoEdGC-justifi"
    >
      Ask Juris
    </a>
  );
}

export default Button;
