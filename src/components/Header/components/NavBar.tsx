
import { PATH_URL } from '@/constants/path'
import { ButtonLink } from '@/ui'
import style from '../Header.module.scss'

export function NavBar({ isOpen }: { isOpen: boolean }) {
    return (
        <nav className={`${style.nav} ${isOpen ? style.nav__open : ''}`}>
            <ul>
                {Object.values(PATH_URL).map(({ url, name }) => (
                    <li key={`NavBar__${url}`}>
                        <ButtonLink href={url}>
                            {name}
                        </ButtonLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

