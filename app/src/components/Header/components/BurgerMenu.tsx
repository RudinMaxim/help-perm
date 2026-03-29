import style from '../Header.module.scss';

export function BurgerMenu({
    isOpen,
    toggleMenu,
    ariaControls,
}: {
    isOpen: boolean;
    toggleMenu: () => void;
    ariaControls?: string;
}) {
    return (
        <button
            className={`${style.burger_menu} ${isOpen ? style.burger_menu__open : ''}`}
            onClick={toggleMenu}
            type="button"
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isOpen}
            aria-controls={ariaControls}
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </button>
    );
}
