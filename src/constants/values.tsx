import { FaBalanceScale, FaHandHoldingHeart, FaHandshake, FaUserFriends } from "react-icons/fa";

export interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    icon: <FaHandHoldingHeart size={48} />,
    title: 'Сострадание',
    description: 'Мы относимся к каждому с пониманием, заботой и уважением.',
  },
  {
    icon: <FaBalanceScale size={48} />,
    title: 'Справедливость',
    description: 'Мы стремимся обеспечить равные возможности и помощь для всех, кто в ней нуждается.',
  },
  {
    icon: <FaHandshake size={48} />,
    title: 'Сотрудничество',
    description: 'Мы работаем в тесном сотрудничестве с другими организациями и партнерами для достижения наилучших результатов.',
  },
  {
    icon: <FaUserFriends size={48} />,
    title: 'Поддержка сообщества',
    description: 'Мы верим в силу сообщества и стремимся объединять людей для взаимной поддержки.',
  },
]; 
