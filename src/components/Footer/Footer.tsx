import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()} Путь Преодоления. Все права
          защищены.
        </p>
      </div>
    </footer>
  );
}
