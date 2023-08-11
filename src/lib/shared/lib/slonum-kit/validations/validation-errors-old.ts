import { contentTypes } from '@slonum/kit';

const validationInputErrors = (
  content: contentTypes,
  value: string | number,
) => {
  switch (content) {
    case 'name':
      return value.toString().includes(' ')
        ? 'Имя содержит недопустимые символы'
        : 'Введите имя и фамилию';
    case 'name-order':
      return 'Имя содержит недопустимые символы';
    case 'participantName':
      return 'Ввидите имя и фамилию участника';
    case 'phone':
      return 'Некорректный номер';
    case 'password':
      return 'Пароль содержит недопустимые символы';
    case 'loginOrEmail':
      return 'Некорректный email или логин';
    case 'email':
      return 'Некорректный email';
    case 'city':
      return 'Некорректное название города';
    case 'url':
      return 'Некорректный адрес';
    case 'url-repost':
      return 'Вставьте ссылку на репост VK или Одноклассники';
    case 'donate':
      return 'Введите число';
    case 'text':
      return 'Поле содержит недопустимые символы';
    case 'metaUrl':
      return 'Некорректный адрес';
    case 'title':
      return 'Поле содержит недопустимые символы';
  }
};
