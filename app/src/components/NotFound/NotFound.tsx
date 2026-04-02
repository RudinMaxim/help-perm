import Link from 'next/link';
import styles from './not-found.module.scss';

interface NotFoundCompProps {
  subtitle: string;
  text: string;
  linkText: string;
  linkAriaLabel: string;
}

export default function NotFoundComp({
  subtitle,
  text,
  linkText,
  linkAriaLabel,
}: NotFoundCompProps): React.JSX.Element {
	return (
		<main id="main-content" className={styles.container}>
			<h1 className={styles.title}>404</h1>
			<h2 className={styles.subtitle}>{subtitle}</h2>
			<p className={styles.text}>{text}</p>
			<Link href="/" className={styles.link} aria-label={linkAriaLabel}>
				{linkText}
			</Link>
		</main>
	);
}
