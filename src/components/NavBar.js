import styles from "./NavBar.module.css";
import Logo from "./Logo";
import Button from "./Button";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <Button />
    </nav>
  );
}

export default NavBar;
