export function formatPhoneNumber(phoneNumber: string): string {
  // Удаляем все нецифровые символы из номера телефона, кроме "+"
  const cleanedPhoneNumber = phoneNumber.replace(/[^+\d]/g, '');

  // Проверяем, начинается ли номер с "+"
  const isRussianNumber = cleanedPhoneNumber.startsWith('+');

  // Если номер не российский или имеет неправильную длину, возвращаем исходный номер
  if (!isRussianNumber || cleanedPhoneNumber.length !== 12) {
    return phoneNumber;
  }

  // Удаляем "+" из начала номера
  const formattedNumber = cleanedPhoneNumber.slice(1);

  // Применяем маску к номеру
  const maskedNumber = `+7 (${formattedNumber.slice(
    1,
    4
  )}) ${formattedNumber.slice(4, 7)}-${formattedNumber.slice(
    7,
    9
  )}-${formattedNumber.slice(9)}`;

  return maskedNumber;
}
