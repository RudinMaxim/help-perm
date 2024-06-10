import { MAIN_PHONE_NUMBER, SECOND_PHONE_NUMBER } from '@/constants/phone';
import Link from 'next/link';
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
          <p>Телефон: 
            <Link href={`tel:${MAIN_PHONE_NUMBER}`}>{MAIN_PHONE_NUMBER}</Link>
          </p>
          <p>Телефон: 
            <Link href={`tel:${SECOND_PHONE_NUMBER}`}>{SECOND_PHONE_NUMBER}</Link>
          </p>
          {/* <p>Email:
            <Link href={`mailto:${MAIN_EMAIL}`}>{MAIN_EMAIL}</Link>
          </p> */}
        </div>
        <div className={styles.socialLinks}>
          {/* <h3>Следите за нами</h3>
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
          </div> */}
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Max Rudin. Все права защищены.</p>
      </div>
    </footer>
  );
}
