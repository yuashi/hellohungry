import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/phone.png" alt="phone" width="32" height="32" />
        </div>
        <div className={styles.texts}>ORDER NOW!</div>
        <div className={styles.texts}>012 345 678</div>
      </div>

      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="logo" width="260px" height="200px" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>

      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="cart" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
