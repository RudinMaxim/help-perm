import { MAIN_PHONE_NUMBER } from "@/constants/phone";
import { formatPhoneNumber } from "@/utils/phone";
import Link from "next/link";
import { FiPhone } from 'react-icons/fi';
import style from './PhoneLink.module.scss';

export function PhoneLink() {
    const formatted = formatPhoneNumber(MAIN_PHONE_NUMBER);
    return (
        <Link
            href={`tel:${MAIN_PHONE_NUMBER}`}
            title={`Позвонить по номеру ${formatted}`}
            aria-label={`Позвонить по номеру ${formatted}`}
            className={style.phoneLink}
        >
            <FiPhone className={style.icon} aria-hidden="true" />
            <span className={style.number}>{formatted}</span>
        </Link>
    )
}
