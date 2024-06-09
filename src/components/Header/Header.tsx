import { Logo } from '../Logo/Logo';
import { PhoneLink } from '../index';
import style from './Header.module.scss';
import { NavBar } from './components/NavBar';

export function Header() {
	return (
		<header className={style.header}>
			<div className={style.header__logo_side}>
				<Logo />
				<NavBar />
			</div>
			<PhoneLink/>
		</header>
	);
}
