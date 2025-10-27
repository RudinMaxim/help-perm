import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} ООО &quot;Феникс&quot;. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
