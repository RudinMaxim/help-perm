import Image from 'next/image';
import Link from "next/link";
import style from './Logo.module.scss';

export function Logo() {
    return (
        <Link href="/" className={style.logo}>
            <Image
                src="/logo.svg"
                alt="Logo"
                width={62}
                height={62}
            />
            <span >
                Бесплатная помощь
                зависимым
            </span>
        </Link>
    );
}
