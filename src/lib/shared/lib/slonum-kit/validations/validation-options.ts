import { contentTypes } from '../types';
import { getWordEnding } from '../utils';
import { regexList } from './validation-regex-list';

const maxSymbols = (value: number) => {
  const word = getWordEnding(value, ['символ', 'символа', 'символов']);

  return `Максимум ${value} ${word}`;
};

const minSymbols = (value: number) => {
  const word = getWordEnding(value, ['символ', 'символа', 'символов']);

  return `Минимум ${value} ${word}`;
};

const nameError = 'Введите имя и фамилию';
const nameOrder = 'Имя содержит недопустимые символы';
const participantName = 'Ввидите имя и фамилию участника';
const password = 'Пароль содержит недопустимые символы';
const email = 'Некорректный email';
const loginOrEmail = 'Некорректный email или логин';
const city = 'Некорректное название города';
const url = 'Некорректный адрес';
const urlRepost = 'Вставьте ссылку на репост VK или Одноклассники';
const donate = 'Введите число';
const phone = 'Некорректный номер';

const invalidSymbols = 'Поле содержит недопустимые сиволы';

export const validations: {
  [key in contentTypes]?: any;
} = {
  name: {
    minLength: {
      value: 5,
      message: nameError,
    },
    maxLength: {
      value: 40,
      message: nameError,
    },
    pattern: {
      value: regexList.name,
      message: nameError,
    },
  },
  'name-order': {
    minLength: {
      value: 1,
      message: nameOrder,
    },
    maxLength: {
      value: 40,
      message: nameOrder,
    },
    pattern: {
      value: regexList.name,
      message: nameOrder,
    },
  },
  participantName: {
    minLength: {
      value: 5,
      message: participantName,
    },
    maxLength: {
      value: 40,
      message: participantName,
    },
    pattern: {
      value: regexList.fullName,
      message: participantName,
    },
  },
  password: {
    minLength: {
      value: 8,
      message: minSymbols(8),
    },
    maxLength: {
      value: 20,
      message: maxSymbols(20),
    },
    pattern: {
      value: regexList.password,
      message: password,
    },
  },
  passwordConfirm: {
    minLength: {
      value: 8,
      message: minSymbols(8),
    },
    maxLength: {
      value: 20,
      message: maxSymbols(20),
    },
    pattern: {
      value: regexList.password,
      message: password,
    },
  },
  email: {
    minLength: {
      value: 5,
      message: minSymbols(5),
    },
    maxLength: {
      value: 40,
      message: maxSymbols(40),
    },
    pattern: {
      value: regexList.email,
      message: email,
    },
  },
  loginOrEmail: {
    minLength: {
      value: 5,
      message: minSymbols(5),
    },
    maxLength: {
      value: 40,
      message: maxSymbols(40),
    },
    pattern: {
      value: regexList.loginOrEmail,
      message: loginOrEmail,
    },
  },
  city: {
    minLength: {
      value: 2,
      message: minSymbols(2),
    },
    maxLength: {
      value: 20,
      message: maxSymbols(20),
    },
    pattern: {
      value: regexList.city,
      message: city,
    },
  },
  url: {
    minLength: {
      value: 4,
      message: minSymbols(4),
    },
    maxLength: {
      value: 190,
      message: maxSymbols(190),
    },
    pattern: {
      value: regexList.url,
      message: url,
    },
  },
  'url-repost': {
    minLength: {
      value: 4,
      message: minSymbols(4),
    },
    maxLength: {
      value: 190,
      message: maxSymbols(190),
    },
    pattern: {
      value: regexList.url,
      message: urlRepost,
    },
  },
  donate: {
    minLength: {
      value: 1,
      message: minSymbols(1),
    },
    maxLength: {
      value: 60,
      message: maxSymbols(60),
    },
    pattern: {
      value: regexList.donate,
      message: donate,
    },
  },
  phone: {
    minLength: {
      value: 4,
      message: minSymbols(4),
    },
    maxLength: {
      value: 20,
      message: maxSymbols(20),
    },
    pattern: {
      value: regexList.phone,
      message: phone,
    },
  },
  text: {
    minLength: {
      value: 2,
      message: minSymbols(2),
    },
    maxLength: {
      value: 140,
      message: maxSymbols(140),
    },
    pattern: {
      value: regexList.text,
      message: invalidSymbols,
    },
  },
  translate: {
    minLength: {
      value: 1,
      message: minSymbols(1),
    },
    maxLength: {
      value: 140,
      message: maxSymbols(140),
    },
    pattern: {
      // NOTE: Так и было
      value: regexList.city,
      message: invalidSymbols,
    },
  },
  birthday: {
    minLength: {
      value: 10,
      message: 'Введите дату рождения',
    },
    maxLength: {
      value: 10,
      message: 'Введите дату рождения',
    },
    pattern: {
      value: regexList.birthDate,
      message: 'Введите дату рождения',
    },
  },
  'competition-title': {
    minLength: {
      value: 5,
      message: minSymbols(5),
    },
    maxLength: {
      value: 100,
      message: maxSymbols(100),
    },
    pattern: {
      value: regexList.text,
      message: invalidSymbols,
    },
  },
  'competition-description': {
    minLength: {
      value: 10,
      message: minSymbols(10),
    },
    maxLength: {
      value: 150,
      message: maxSymbols(150),
    },
    pattern: {
      value: regexList.text,
      message: invalidSymbols,
    },
  },
  'competition-vk': {
    minLength: {
      value: 5,
      message: minSymbols(5),
    },
    maxLength: {
      value: 150,
      message: maxSymbols(150),
    },
    pattern: {
      value: regexList.url,
      message: invalidSymbols,
    },
  },
  'competition-ok': {
    minLength: {
      value: 5,
      message: minSymbols(5),
    },
    maxLength: {
      value: 150,
      message: maxSymbols(150),
    },
    pattern: {
      value: regexList.url,
      message: invalidSymbols,
    },
  },
  'olymp-title': {
    minLength: {
      value: 5,
      message: minSymbols(5),
    },
    maxLength: {
      value: 100,
      message: maxSymbols(100),
    },
    pattern: {
      value: regexList.text,
      message: invalidSymbols,
    },
  },
  'olymp-description': {
    minLength: {
      value: 10,
      message: minSymbols(10),
    },
    maxLength: {
      value: 150,
      message: maxSymbols(150),
    },
    pattern: {
      value: regexList.text,
      message: invalidSymbols,
    },
  },
  volume: {
    minLength: {
      value: 1,
      message: minSymbols(1),
    },
    maxLength: {
      value: 7,
      message: maxSymbols(7),
    },
    pattern: {
      value: regexList.donate,
      message: invalidSymbols,
    },
  },

  slug: {
    minLength: {
      value: 3,
      message: minSymbols(3),
    },
    maxLength: {
      value: 70,
      message: maxSymbols(70),
    },
    pattern: {
      value: regexList.slug,
      message: invalidSymbols,
    },
  },
  title: {
    minLength: {
      value: 3,
      message: minSymbols(3),
    },
    maxLength: {
      value: 70,
      messaeg: maxSymbols(70),
    },
    pattern: {
      value: regexList.text,
      message: invalidSymbols,
    },
  },
  titleEng: {
    minLength: {
      value: 3,
      message: minSymbols(3),
    },
    maxLength: {
      value: 70,
      message: maxSymbols(70),
    },
    pattern: {
      value: regexList.text,
      message: invalidSymbols,
    },
  },
  author: {
    minLength: {
      value: 3,
      message: minSymbols(3),
    },
    maxLength: {
      value: 70,
      message: maxSymbols(70),
    },
    pattern: {
      value: regexList.text,
      message: invalidSymbols,
    },
  },
  authorEng: {
    minLength: {
      value: 3,
      message: minSymbols(3),
    },
    maxLength: {
      value: 70,
      message: maxSymbols(70),
    },
    pattern: {
      value: regexList.text,
      message: invalidSymbols,
    },
  },
  annotation: {
    minLength: {
      value: 10,
      message: minSymbols(10),
    },
    maxLength: {
      value: 1070,
      message: maxSymbols(1070),
    },
    pattern: {
      value: regexList.text,
      message: invalidSymbols,
    },
  },
  endingTime: {
    minLength: {
      value: 12,
      message: minSymbols(12),
    },
    maxLength: {
      value: 25,
      message: maxSymbols(25),
    },
    pattern: {
      value: regexList.text,
      message: invalidSymbols,
    },
  },
  startTime: {
    minLength: {
      value: 12,
      message: minSymbols(12),
    },
    maxLength: {
      value: 25,
      message: maxSymbols(25),
    },
    pattern: {
      value: regexList.text,
      message: invalidSymbols,
    },
  },
  avatar: {
    minLength: {
      value: 5,
      messaeg: minSymbols(5),
    },
    maxLength: {
      value: 55,
      message: maxSymbols(55),
    },
  },
  price: {
    minLength: {
      value: 2,
      message: minSymbols(2),
    },
    maxLength: {
      value: 4,
      message: maxSymbols(4),
    },
    pattern: {
      value: regexList.donate,
      message: invalidSymbols,
    },
  },
  priceWithRepost: {
    maxLength: {
      value: 4,
      message: maxSymbols(4),
    },
    pattern: {
      value: regexList.donate,
      message: invalidSymbols,
    },
  },
  metaUrl: {
    minLength: {
      value: 4,
      message: minSymbols(4),
    },
    maxLength: {
      value: 100,
      message: maxSymbols(100),
    },
    pattern: {
      value: regexList.metaUrl,
      message: invalidSymbols,
    },
  },
  complexity: {
    minLength: {
      value: 1,
      message: minSymbols(1),
    },
    maxLength: {
      value: 2,
      message: maxSymbols(2),
    },
    pattern: {
      value: regexList.donate,
      message: invalidSymbols,
    },
  },
  tags: {
    minLength: {
      value: 1,
      message: minSymbols(1),
    },
    maxLength: {
      value: 150,
      message: maxSymbols(150),
    },
    pattern: {
      value: regexList.text,
      message: invalidSymbols,
    },
  },
};

export const validateRequired = (validations: object) => ({
  ...validations,
  required: {
    value: true,
    message: 'Обязательное поле',
  },
});
