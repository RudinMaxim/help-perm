'use client';

import { usePathname } from 'next/navigation';
import { PATH_URL } from '@/constants/path';
import { ButtonLink } from '@/ui';
import style from '../Header.module.scss';

export function NavBar({ isOpen, id }: { isOpen: boolean; id?: string }) {
  const pathname = usePathname();
  return (
    <nav
      id={id}
      aria-label="Основная навигация"
      className={`${style.nav} ${isOpen ? style.nav__open : ''}`}
    >
      <ul>
        {Object.values(PATH_URL).map(({ url, name }) => {
          const isActive = pathname === url;
          return (
            <li key={`NavBar__${url}`}>
              <ButtonLink
                href={url}
                className={isActive ? style.navLinkActive : undefined}
                aria-current={isActive ? 'page' : undefined}
              >
                {name}
              </ButtonLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
