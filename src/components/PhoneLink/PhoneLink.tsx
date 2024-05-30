import { MAIN_PHONE_NUMBER } from "@/constants/phone";
import { formatPhoneNumber } from "@/utils/phone";
import Link from "next/link";
import style from './PhoneLink.module.scss';

export function PhoneLink() {
    return (
        <Link href={`tel:${MAIN_PHONE_NUMBER}`} tabIndex={0} title="Позвонить по номеру" aria-label={`Позвонить по номеру ${MAIN_PHONE_NUMBER}`}
            className={style.phoneLink}>
            {formatPhoneNumber(MAIN_PHONE_NUMBER)}
        </Link>
    )
}
