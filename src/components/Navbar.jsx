import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <p className={styles.logo}>Expense<span>Tracker</span></p>
    </nav>
  );
};

export default Navbar;