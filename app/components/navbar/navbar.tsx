import Link from "next/link";
import Logout from "../logout/logout";
import styles from "./navbar.module.scss";

export default function NavBar() {
  return (
    <nav id={styles.nav}>
      <span>
        <Link href="/pages/product_catalog" replace>
          Home
        </Link>
      </span>
      <span>test</span>
      <span>
        <Link href="/pages/cart" replace>
          CART
        </Link>
      </span>
      <span>
        <Logout />
      </span>
    </nav>
  );
}
