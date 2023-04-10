import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={styles.Navbar_nav_bar}>
      <div className={styles.Navbar_div}>
        <Link to='/profile' className={styles.Navbar_a}>Profile</Link>
      </div>
      <div className={styles.Navbar_div}>
        <Link to='/dialogs' className={styles.Navbar_a}>Messages</Link>
      </div>
      <div className={styles.Navbar_div}>
        <Link to='/news' className={styles.Navbar_a}>News</Link>
      </div>
      <div className={styles.Navbar_div}>
        <Link to='/music' className={styles.Navbar_a}>Music</Link>
      </div>
    </nav>
  );
}

export default Navbar;
