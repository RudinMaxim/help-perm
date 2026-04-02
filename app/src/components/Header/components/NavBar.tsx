'use client';

import { usePathname } from 'next/navigation';
import { ButtonLink } from '@/ui';
import style from '../Header.module.scss';

interface NavItem {
  url: string;
  name: string;
}

export function NavBar({
  isOpen,
  id,
  ariaLabel,
  items,
}: {
  isOpen: boolean;
  id?: string;
  ariaLabel: string;
  items: NavItem[];
}) {
  const pathname = usePathname();
  return (
    <nav
      id={id}
      aria-label={ariaLabel}
      className={`${style.nav} ${isOpen ? style.nav__open : ''}`}
    >
      <ul>
        {items.map(({ url, name }) => {
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
