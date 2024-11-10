import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import Logo from "./Logo";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <NavLink className={styles.btn} to="/ask-juris">
        Ask Juris
      </NavLink>
    </nav>
  );
}

export default NavBar;
