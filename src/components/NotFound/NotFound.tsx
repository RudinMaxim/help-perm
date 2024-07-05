import Link from 'next/link';
import styles from './not-found.module.scss';

export default function NotFoundComp(): React.JSX.Element {
	return (<div className={styles.container}>
		<h1 className={styles.title}>404</h1>
		<h2 className={styles.subtitle}>Страница не найдена</h2>
		<p className={styles.text}>
			Извините, запрашиваемая вами страница не существует.
		</p>
		<Link href="/" className={styles.link}>
			Вернуться на главную
		</Link>
	</div>);
}
