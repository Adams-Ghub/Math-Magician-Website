import { Link } from 'react-router-dom';
import styles from '../css/Navbar.module.css';

const Navbar = () => (
  <div className={styles.navigationBox}>
    <h1 className={styles.brand}>Math Magician</h1>
    <nav className={styles.navLinksContainer}>
      <Link className={styles.homeLink} to="/">Home</Link>
      <Link className={styles.calculatorLink} to="/calculator">Calculator</Link>
      <Link className={styles.quoteLink} to="/quote">Quotes</Link>
    </nav>
  </div>
);

export default Navbar;
