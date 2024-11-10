import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "./Logo";
import Button from "./Button";

function NavBar() {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <Logo />

      {/* Conditionally render the Ask Juris button if not on the /ask-juris page */}
      {location.pathname !== "/ask-juris" && (
        <a
          className={styles.btn}
          href="https://chatgpt.com/g/g-BFmRoEdGC-justifi"
        >
          Ask Juris
        </a>
      )}
    </nav>
  );
}

export default NavBar;
