
import { PATH_URL } from '@/constants/path'
import { ButtonLink } from '@/ui'
import style from '../Header.module.scss'

export function NavBar() {
    return (
        <nav className={style.nav}>
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
