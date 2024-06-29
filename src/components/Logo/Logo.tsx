import Image from 'next/image';
import Link from "next/link";
import style from './Logo.module.scss';

export function Logo() {
    return (
        <Link href="/" className={style.logo}>
            <Image
                src="/logo.svg"
                alt="Logo"
                width={32}
                height={32}
            />
            <span >
                Бесплатная помощь
                <br />
                зависимым
            </span>
        </Link>
    );
}
