import { Logo } from '../Logo/Logo';
import style from './Header.module.scss';

interface HeaderProps {
  logoText: string;
  logoAriaLabel: string;
  logoAlt: string;
  contactButtonText: string;
  contactButtonAriaLabel: string;
  contactButtonTitle: string;
}

export function Header({
  logoText,
  logoAriaLabel,
  logoAlt,
  contactButtonText,
  contactButtonAriaLabel,
  contactButtonTitle,
}: HeaderProps) {
  return (
    <header data-motion-header className={style.header}>
      <div className={style.inner}>
        <Logo text={logoText} ariaLabel={logoAriaLabel} alt={logoAlt} />
        <a
          href="#contactUs"
          className={style.contactButton}
          aria-label={contactButtonAriaLabel}
          title={contactButtonTitle}
        >
          <span aria-hidden="true">{contactButtonText}</span>
        </a>
      </div>
    </header>
  );
}
