import Logout from "../logout/logout";
import styles from "./navbar.module.scss";

export default function NavBar() {
  return (
    <nav id={styles.nav}>
      <span>asdf</span>
      <span>test</span>
      <span>
        <Logout />
      </span>
    </nav>
  );
}
