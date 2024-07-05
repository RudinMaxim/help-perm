import { MAIN_EMAIL } from '@/constants/phone';
import Link from 'next/link';
import { Logo } from '../Logo/Logo';
import { PhoneLink } from '../index';
import style from './Header.module.scss';
import { NavBar } from './components/NavBar';

export function Header() {
	return (
		<header className={style.header}>
			<Logo />
			<NavBar />
			<div className={style.header__contacts_side}>
				<PhoneLink />
				<Link href={`mailto:${MAIN_EMAIL}`} title="Написать нам">
					blagotvoritelnostperm@gmail.com
				</Link>
			</div>
		</header>
	);
}
