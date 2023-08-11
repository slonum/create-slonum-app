import { contentTypes } from '../types';

const name = /^[A-ЯЁа-яёa-zA-Z\s-]+/;
const fullName = /^[A-ЯЁа-яёa-zA-Z\s-]+\s[A-ЯЁа-яёa-zA-Z\s-]+$/;

const phone =
  /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;

const password = /^[0-9a-zA-Zа-яА-Я!@#$%^&*\s-]+$/;
const login = /[а-яё][a-z]{4,5}\d{3,4}/gi;
const symbols = /\w{8}/gi;
const email =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const loginOrEmail =
  /(^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,}))|([а-яё]|[a-z]{4,5}\d{3,4})/gi;

const city = /^[А-ЯЁа-яёa-zA-Z\s-]+$/;
const url =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
const repost = /[o|v]k\.(ru|com)/gi;

const donate = /^[0-9]+$/;
const text = /^[0-9a-zA-Zа-яА-Я !,?.@#$%^№&*\s-]+$/;
const slug = /^[0-9a-zA-Z -]+$/;

const metaUrl =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

const birthDate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

export const regexList = {
  name,
  fullName,
  phone,
  password,
  loginOrEmail,
  symbols,
  email,
  login,
  city,
  url,
  repost,
  donate,
  text,
  metaUrl,
  slug,
  birthDate,
};

export const checkValidationRegex = (
  field: contentTypes,
  value: string | number,
) => {
  const regex = regexList[field];
  if (Array.isArray(regex)) {
    let _regex: RegExp;
    for (_regex of regex) {
      const result = _regex.test(value.toString());
      if (result) return true;
    }
    return false;
  }

  if (regex) return regex.test(value.toString());
  return false;
};
