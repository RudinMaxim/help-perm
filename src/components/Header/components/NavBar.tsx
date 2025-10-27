
import { PATH_URL } from '@/constants/path'
import { ButtonLink } from '@/ui'
import style from '../Header.module.scss'
import React from 'react'

export function NavBar({ isOpen, id }: { isOpen: boolean; id?: string }) {
    return (
    <nav id={id} aria-label="Основная навигация" className={`${style.nav} ${isOpen ? style.nav__open : ''}`} aria-hidden={!isOpen}>
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

