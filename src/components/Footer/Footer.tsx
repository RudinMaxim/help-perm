import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Logo } from '..';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.contactInfo}>
          <p>Адрес компании</p>
          <p>Телефон: +1 234 567 890</p>
          <p>Email:info@company.com</p>
        </div>
        <div className={styles.socialLinks}>
          <h3>Следите за нами</h3>
          <div className={styles.icons}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Max Rudin. Все права защищены.</p>
      </div>
    </footer>
  );
}
