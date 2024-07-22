"use client"
import { MAIN_EMAIL } from '@/constants/phone';
import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '../Logo/Logo';
import { PhoneLink } from '../index';
import style from './Header.module.scss';
import { BurgerMenu } from './components/BurgerMenu';
import { NavBar } from './components/NavBar';

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className={style.header}>
			<div className={style.header__logo_side}>
				<Logo />
				<BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
			</div>
			<NavBar isOpen={isMenuOpen} />
			<div className={style.header__contacts_side}>
				<PhoneLink />
				<Link href={`mailto:${MAIN_EMAIL}`} title="Написать нам">
					blagotvoritelnostperm@gmail.com
				</Link>
			</div>
		</header>
	);
}