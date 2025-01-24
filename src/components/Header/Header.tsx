'use client';
import { useState, useEffect } from 'react';
import { MAIN_EMAIL } from '@/constants/phone';
import Link from 'next/link';
import { Logo } from '../Logo/Logo';
import { PhoneLink } from '../index';
import style from './Header.module.scss';
import { BurgerMenu } from './components/BurgerMenu';
import { NavBar } from './components/NavBar';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsScrolled(true);
    } else if (currentScrollY < lastScrollY) {
      setIsScrolled(false); 
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`${style.header} ${isScrolled ? style.headerHidden : ''}`}
    >
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
