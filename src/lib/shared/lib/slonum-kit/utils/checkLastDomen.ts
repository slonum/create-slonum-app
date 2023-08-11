/* eslint-disable indent */
import {
  DICTIONARY_WORDS,
  DRAWING_COMPETITION,
  ENGLISH_WORDS,
  OLYMPIAD_MATH,
} from '../api';
import { getCookie, setCookie } from './cookie';

export const checkLastDomen = () => {
  setCookie('lDomen', { domen: process.env.NEXT_PUBLIC_FRONT });
};

export const getLastDomen = () => {
  const check = getCookie('lDomen');

  if (!check) return '/';
  switch (check.domen) {
    case 'vocabulary-words':
      return DICTIONARY_WORDS;
    case 'drawing-competition':
      return DRAWING_COMPETITION;
    case 'english-lang':
      return ENGLISH_WORDS;
    case 'olympiad':
      return OLYMPIAD_MATH;
    default:
      return '/';
  }
};
