'use client';
import {
  FaAccessibleIcon,
  FaBalanceScale,
  FaBookReader,
  FaGavel,
  FaGlassWhiskey,
  FaHandHoldingHeart,
  FaHandshake,
  FaHome,
  FaMoneyBillWave,
  FaPills,
  FaUserFriends,
} from 'react-icons/fa';
import type { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  FaAccessibleIcon,
  FaBalanceScale,
  FaBookReader,
  FaGavel,
  FaGlassWhiskey,
  FaHandHoldingHeart,
  FaHandshake,
  FaHome,
  FaMoneyBillWave,
  FaPills,
  FaUserFriends,
};

export function CmsIcon({ name, size = 24 }: { name: string; size?: number }) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} aria-hidden="true" />;
}
