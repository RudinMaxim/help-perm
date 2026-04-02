import { Logo } from '../Logo/Logo';
import style from './Header.module.scss';

interface HeaderProps {
  logoText: string;
  logoAriaLabel: string;
  logoAlt: string;
}

export function Header({
  logoText,
  logoAriaLabel,
  logoAlt,
}: HeaderProps) {
  return (
    <header data-motion-header className={style.header}>
      <div className={style.inner}>
        <Logo text={logoText} ariaLabel={logoAriaLabel} alt={logoAlt} />
        <a
          href="#contactUs"
          className={style.contactButton}
          aria-label="Перейти к форме обращения"
          title="Перейти к форме обращения"
        >
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  );
}
