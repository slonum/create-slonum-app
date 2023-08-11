import { contentTypes } from '@slonum/kit';
import { regexList } from './validation-regex-list';

const validateInput = (content: contentTypes, value: string) => {
  const validateNameInput = (value: string) => {
    return regexList.name.test(value);
  };

  const validateFullNameInput = (value: string) => {
    return regexList.fullName.test(value);
  };

  const validatePhoneInput = (value: string) => {
    return regexList.phone.test(value);
  };
  const validatePasswordInput = (value: string) => {
    const passwordRegex = /^[0-9a-zA-Zа-яА-Я!@#$%^&*\s-]+$/;
    return passwordRegex.test(value);
  };

  const validateEmailInput = (value: string) => {
    return regexList.email.test(value);
  };

  const validateLoginInput = (value: string) => {
    return regexList.symbols.test(value) || regexList.login.test(value);
  };

  const validateEntryEmailInput = (value: string) => {
    return (
      regexList.symbols.test(value) ||
      regexList.login.test(value) ||
      regexList.email.test(value)
    );
  };

  const validateCityInput = (value: string) => {
    return regexList.city.test(value);
  };
  const validateUrlInput = (value: string) => {
    return regexList.url.test(value);
  };

  const validateOlympCoverInput = (value: string) => {
    return true;
  };

  const validateRepostInput = (value: string) => {
    return regexList.repost.test(value);
  };

  const validateDonateInput = (value: string) => {
    return regexList.donate.test(value);
  };
  const validateTextInput = (value: string) => {
    return regexList.text.test(value);
  };
  const validateSlugInput = (value: string) => {
    return regexList.slug.test(value);
  };
  const validateMetaUrlInput = (value: string) => {
    return regexList.metaUrl.test(value);
  };

  switch (content) {
    case 'password':
    case 'passwordConfirm':
      return validatePasswordInput(value);
    case 'participantName':
    case 'name-order':
      return validateNameInput(value);
    case 'name':
      return validateFullNameInput(value);
    case 'email':
      return validateEmailInput(value);
    case 'city':
    case 'translate':
      return validateCityInput(value);
    case 'url':
    case 'competition-ok':
    case 'competition-vk':
      return validateUrlInput(value);
    case 'donate':
    case 'price':
    case 'priceWithRepost':
    case 'volume':
    case 'complexity':
      return validateDonateInput(value);
    case 'phone':
      return validatePhoneInput(value);
    case 'text':
    case 'endingTime':
    case 'competition-title':
    case 'author':
    case 'authorEng':
    case 'title':
    case 'titleEng':
    case 'annotation':
    case 'competition-description':
    case 'tags':
      return validateTextInput(value);
    case 'metaUrl':
      return validateMetaUrlInput(value);
    case 'slug':
      return validateSlugInput(value);
    default:
      return false;
  }
};
