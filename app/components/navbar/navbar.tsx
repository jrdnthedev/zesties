import Link from "next/link";
import Logout from "../logout/logout";
import styles from "./navbar.module.scss";
import { useShoppingCart } from "@/app/context/CartContext";

export default function NavBar() {
  const { cart } = useShoppingCart();

  return (
    <nav id={styles.nav}>
      <span>
        <ul id={styles.main_nav}>
          <li>
            {" "}
            <Link href="/pages/product_catalog" replace>
              Home
            </Link>
          </li>
          <li>
            <Link href="/pages/cart" replace>
              {cart.items.length ? (
                <span className={cart.items.length ? "dot" : ""}>
                  {cart.items.length}
                </span>
              ) : null}
              CART
            </Link>
          </li>
        </ul>
      </span>
      <span>
        <Logout />
      </span>
    </nav>
  );
}
