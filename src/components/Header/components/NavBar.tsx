
import { PATH_URL } from '@/constants/path'
import Link from 'next/link'
import style from '../Header.module.scss'

export function NavBar() {
    return (
        <nav className={style.nav}>
            <ul style={{ borderBottom: 'none' }}>
                {Object.values(PATH_URL).map(({ url, name }) => (
                    <li key={`NavBar__${url}`}>
                        <Link href={url}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
