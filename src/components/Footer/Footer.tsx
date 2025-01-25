import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()}  ООО &quot;Феникс&quot;. Все права
          защищены.
        </p>
      </div>
    </footer>
  );
}
