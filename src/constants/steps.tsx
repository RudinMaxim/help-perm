// @ts-nocheck

import { IconType } from 'react-icons';
import {
  FaClipboardList,
  FaHandsHelping,
  FaPhoneAlt,
  FaWalking,
} from 'react-icons/fa';

export interface Step {
  icon: IconType;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    icon: <FaPhoneAlt />,
    title: 'Первый контакт',
    description: 'Звонок или обращение. Выслушаем и проконсультируем.',
  },
  {
    icon: <FaClipboardList />,
    title: 'Оценка ситуации',
    description: 'Анализ для разработки индивидуального плана.',
  },
  {
    icon: <FaHandsHelping />,
    title: 'Комплексная помощь',
    description: 'Предоставление разносторонней поддержки.',
  },
  {
    icon: <FaWalking />,
    title: 'Путь к улучшению',
    description: 'Сопровождение на всех этапах.',
  },
];