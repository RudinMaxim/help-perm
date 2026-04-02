import Image from 'next/image';
import Link from 'next/link';
import style from './Logo.module.scss';

interface LogoProps {
  text: string;
  ariaLabel: string;
  alt: string;
}

export function Logo({ text, ariaLabel, alt }: LogoProps) {
  return (
    <Link href="/" className={style.logo} aria-label={ariaLabel}>
      <Image src="/logo.svg" alt={alt} width={52} height={52} />
      <span>{text}</span>
    </Link>
  );
}
