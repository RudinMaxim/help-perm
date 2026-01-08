'use client';
import { useState, useEffect, useRef } from 'react';
import { MAIN_EMAIL } from '@/constants/phone';
import Link from 'next/link';
import { Logo } from '../Logo/Logo';
import { PhoneLink } from '../index';
import style from './Header.module.scss';
import { BurgerMenu } from './components/BurgerMenu';
import { NavBar } from './components/NavBar';
import { useMediaQuery } from '@/hook/useMediaQuery';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollYRef = useRef(0);
  const navId = 'main-navigation';
  const isDesktop = useMediaQuery('(min-width: 769px)');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollYRef.current && currentScrollY > 50) {
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollYRef.current) {
        setIsScrolled(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false);
    };

    if (isMenuOpen && !isDesktop) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        const firstLink = document.getElementById(navId)?.querySelector('a') as HTMLAnchorElement | null;
        firstLink?.focus();
      }, 0);
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen, isDesktop]);

  return (
    <header
      className={`${style.header} ${isScrolled ? style.headerHidden : ''}`}
    >
      <div className={style.header__logo_side}>
        <Logo />
        <BurgerMenu
          isOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          ariaControls={navId}
        />
      </div>
      <div
        className={`${style.menu} ${isMenuOpen ? style.menu__open : ''}`}
        aria-hidden={!isMenuOpen && !isDesktop}
      >
        <NavBar isOpen={isMenuOpen} id={navId} />
        <div className={style.menu__contacts}>
          <PhoneLink />
          <Link href={`mailto:${MAIN_EMAIL}`} title="Написать нам">
            blagotvoritelnostperm@gmail.com
          </Link>
        </div>
      </div>
    </header>
  );
}
