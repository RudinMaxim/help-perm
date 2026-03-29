import { formatPhoneNumber } from '@/utils/phone';
import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';
import style from './PhoneLink.module.scss';

interface PhoneLinkProps {
  phone: string;
}

export function PhoneLink({ phone }: PhoneLinkProps) {
  const formatted = formatPhoneNumber(phone);
  return (
    <Link
      href={`tel:${phone}`}
      title={`Позвонить по номеру ${formatted}`}
      aria-label={`Позвонить по номеру ${formatted}`}
      className={style.phoneLink}
    >
      <FiPhone className={style.icon} aria-hidden="true" />
      <span className={style.number}>{formatted}</span>
    </Link>
  );
}
