import style from '../Header.module.scss';

export function BurgerMenu({
    isOpen,
    toggleMenu,
}: {
    isOpen: boolean;
    toggleMenu: () => void;
}) {
    return (
        <button
            className={`${style.burger_menu} ${isOpen ? style.burger_menu__open : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}