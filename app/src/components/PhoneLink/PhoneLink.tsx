import { formatPhoneNumber } from '@/utils/phone';
import Link from 'next/link';
import { FiPhone } from 'react-icons/fi';
import style from './PhoneLink.module.scss';

interface PhoneLinkProps {
  phone: string;
  labelPrefix: string;
}

export function PhoneLink({ phone, labelPrefix }: PhoneLinkProps) {
  const formatted = formatPhoneNumber(phone);
  return (
    <Link
      href={`tel:${phone}`}
      title={`${labelPrefix} ${formatted}`}
      aria-label={`${labelPrefix} ${formatted}`}
      className={style.phoneLink}
    >
      <FiPhone className={style.icon} aria-hidden="true" />
      <span className={style.number}>{formatted}</span>
    </Link>
  );
}
