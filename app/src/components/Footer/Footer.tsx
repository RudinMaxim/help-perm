import Link from 'next/link';
import styles from './Footer.module.scss';

interface FooterProps {
  copyrightText: string;
  privacyPolicyText: string;
  privacyPolicyUrl: string;
  requisitesText: string;
  requisitesUrl: string;
}

export function Footer({
  copyrightText,
  privacyPolicyText,
  privacyPolicyUrl,
  requisitesText,
  requisitesUrl,
}: FooterProps) {
  const copyrightWithYear = copyrightText.replace('{year}', String(new Date().getFullYear()));

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <p className={styles.copyright}>
          {copyrightWithYear}
        </p>
        <Link className={styles.link} href={requisitesUrl}>
          {requisitesText}
        </Link>
        <Link className={styles.link} href={privacyPolicyUrl}>
          {privacyPolicyText}
        </Link>
      </div>
    </footer>
  );
}
