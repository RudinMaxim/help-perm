import Link from 'next/link';
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  disabled = false,
  ...props
}) => {
  const buttonClass = `${styles.baseButton} ${variant === 'primary' ? styles.primaryButton : styles.secondaryButton
    } ${className}`;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  href,
  className = '',
  variant = 'primary',
  ...props
}) => {
  const buttonClass = `${styles.baseButton} ${variant === 'primary' ? styles.primaryButton : styles.secondaryButton
    } ${className}`;

  return (
    <Link
      className={buttonClass}
      href={href ?? '/'}
      {...props}
    >
      {children}
    </Link>
  );
};