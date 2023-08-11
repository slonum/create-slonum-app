/* eslint-disable indent */
import React, { SetStateAction, useState, useEffect } from 'react';

import classnames from 'classnames';
import styles from './Input.module.scss';
import { useDebounce } from '@slonum/kit';
import { notify } from '@ui/blocks/notification';
import { contentTypesNew } from '@ui/types';

export interface IInputProps {
  type: string;
  placeholder?: string;
  content: contentTypesNew;
  getInputValidateState?: (Type: contentTypesNew, isValid: boolean) => void;
  reference?: React.MutableRefObject<any>;
  className?: string;
  defaultValue?: string | number;
  isDefaultValid?: boolean;
  isChild?: boolean;
  isEntry?: boolean;
  isChange?: boolean;
  isRepost?: boolean;
  isSubscription?: boolean;
  isParent?: boolean;
  isNotError?: boolean;
  defaultBlur?: (isValid: boolean) => void;
  defaultValidation?: (value: string) => boolean;
  disabled?: boolean;
  isAutoComplete?: boolean;
  id?: string;
  step?: string;
  isOffAutocomplete?: boolean;
  onClick?: () => void;
}

export const Input: React.FC<IInputProps> = ({
  type,
  placeholder,
  content,
  getInputValidateState,
  reference,
  className,
  isChild,
  isEntry,
  defaultValue = '',
  isDefaultValid,
  isChange,
  isRepost,
  isSubscription,
  isParent,
  isNotError,
  defaultBlur,
  defaultValidation,
  disabled,
  isAutoComplete,
  id,
  isOffAutocomplete,
  onClick,
}) => {
  const [value, setValue] = useState(defaultValue === null ? '' : defaultValue);
  const [isValid, setIsValid] = useState(isDefaultValid ?? false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showAnnotation, setShowAnnotation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setValue(defaultValue === null ? '' : defaultValue);
    if (defaultValue !== '') {
      checkValidity(content, defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  useEffect(() => {
    getInputValidateState && getInputValidateState(content, isValid);
    if (isNotError && defaultValue && !isValid) {
      setValue(defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValid]);

  const validationOptions: { [key: string]: Record<string, number | boolean> } =
    {
      name: {
        minLength: 5,
        maxLength: 40,
        containsSpecialChars: false,
      },
      'name-order': {
        minLength: 1,
        maxLength: 40,
        containsSpecialChars: false,
      },
      participantName: {
        minLength: 5,
        maxLength: 40,
        containsSpecialChars: false,
      },
      password: {
        minLength: 8,
        maxLength: 20,
        containsSpecialChars: true,
      },
      passwordConfirm: {
        minLength: 8,
        maxLength: 20,
        containsSpecialChars: true,
      },
      email: {
        minLength: 5,
        maxLength: 40,
        containsSpecialChars: true,
      },
      city: {
        minLength: 2,
        maxLength: 20,
        containsSpecialChars: false,
      },
      url: {
        minLength: 4,
        maxLength: 190,
        containSpecialChars: true,
      },
      donate: {
        minLength: 1,
        maxLength: 60,
        containSpecialChars: false,
      },
      phone: {
        minLength: 4,
        maxLength: 20,
        containsSpecialChars: true,
      },
      text: {
        minLength: 2,
        maxLength: 140,
        containsSpecialChars: false,
      },
      translate: {
        minLength: 1,
        maxLength: 140,
        containsSpecialChars: false,
      },
      birthday: {
        minLength: 10,
        maxLength: 10,
        containsSpecialChars: false,
      },
      'competition-title': {
        minLength: 5,
        maxLength: 100,
        containsSpecialChars: false,
      },
      'competition-description': {
        minLength: 10,
        maxLength: 150,
        containsSpecialChars: false,
      },
      'competition-vk': {
        minLength: 5,
        maxLength: 150,
        containsSpecialChars: true,
      },
      'competition-ok': {
        minLength: 5,
        maxLength: 150,
        containsSpecialChars: true,
      },
      'olymp-title': {
        minLength: 5,
        maxLength: 100,
        containsSpecialChars: false,
      },
      'olymp-description': {
        minLength: 10,
        maxLength: 150,
        containsSpecialChars: false,
      },
      volume: {
        minLength: 1,
        maxLength: 7,
        containsSpecialChars: false,
      },

      slug: {
        minLength: 3,
        maxLength: 70,
        containsSpecialChars: false,
      },
      title: {
        minLength: 3,
        maxLength: 70,
        containsSpecialChars: false,
      },
      titleEng: {
        minLength: 3,
        maxLength: 70,
        containsSpecialChars: false,
      },
      author: {
        minLength: 3,
        maxLength: 70,
        containsSpecialChars: false,
      },
      authorEng: {
        minLength: 3,
        maxLength: 70,
        containsSpecialChars: false,
      },
      annotation: {
        minLength: 10,
        maxLength: 1070,
        containsSpecialChars: false,
      },
      endingTime: {
        minLength: 12,
        maxLength: 25,
        containsSpecialChars: true,
      },
      startTime: {
        minLength: 12,
        maxLength: 25,
        containsSpecialChars: true,
      },
      avatar: {
        minLength: 5,
        maxLength: 55,
        containsSpecialChars: true,
      },
      price: {
        minLength: 2,
        maxLength: 4,
        containsSpecialChars: false,
      },
      priceWithRepost: {
        minLength: 2,
        maxLength: 4,
        containsSpecialChars: false,
      },
      metaUrl: {
        minLength: 4,
        maxLength: 100,
        containsSpecialChars: true,
      },
      complexity: {
        minLength: 1,
        maxLength: 2,
        containsSpecialChars: false,
      },
      tags: {
        minLength: 1,
        maxLength: 150,
        containsSpecialChars: true,
      },
    };

  const validateInput = (
    content: string,
    value: string,
  ): SetStateAction<boolean> => {
    const validateNameInput = (value: string): SetStateAction<boolean> => {
      const nameRegex = isParent
        ? /^[A-ЯЁа-яёa-zA-Z\s-]+/
        : /^[A-ЯЁа-яёa-zA-Z\s-]+\s[A-ЯЁа-яёa-zA-Z\s-]+$/;
      return nameRegex.test(value);
    };
    const validateNameOrderInput = (value: string): SetStateAction<boolean> => {
      const nameRegex = /^[A-ЯЁа-яёa-zA-Z\s-]+$/;
      return nameRegex.test(value);
    };
    const validatePhoneInput = (value: string): SetStateAction<boolean> => {
      const phoneRegex =
        /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
      return phoneRegex.test(value);
    };
    const validatePasswordInput = (value: string): SetStateAction<boolean> => {
      const passwordRegex = /^[0-9a-zA-Zа-яА-Я!@#$%^&*\s-]+$/;
      return passwordRegex.test(value);
    };
    const validateEmailInput = (value: string): SetStateAction<boolean> => {
      const emailRegex =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
      if (isEntry)
        return (
          /\w{8}/gi.test(value) ||
          /[а-яё]{4,5}\d{3,4}/gi.test(value) ||
          emailRegex.test(value)
        );
      if (isChild)
        return /\w{8}/gi.test(value) || /[а-яё]{4,5}\d{3,4}/gi.test(value);
      return emailRegex.test(value);
    };
    const validateCityInput = (value: string): SetStateAction<boolean> => {
      const cityRegex = /^[А-ЯЁа-яёa-zA-Z\s-]+$/;
      return cityRegex.test(value);
    };
    const validateTranslateInput = (value: string): SetStateAction<boolean> => {
      const cityRegex = /^[А-ЯЁа-яёa-zA-Z\s-]+$/;
      return cityRegex.test(value);
    };
    const validateUrlInput = (value: string): SetStateAction<boolean> => {
      if (placeholder === 'Обложка олимпиады') return true;

      const urlRegex =
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
      const repostRegex = /[o|v]k\.(ru|com)/gi;

      return isRepost ? repostRegex.test(value) : urlRegex.test(value);
    };
    const validateDonateInput = (value: string): SetStateAction<boolean> => {
      const donateRegex = /^[0-9]+$/;
      return donateRegex.test(value);
    };
    const validateTextInput = (value: string): SetStateAction<boolean> => {
      const textRegex = /^[0-9a-zA-Zа-яА-Я !,?.@#$%^№&*\s-]+$/;
      return textRegex.test(value);
    };
    const validateSlugInput = (value: string): SetStateAction<boolean> => {
      const slugRegex = /^[0-9a-zA-Z -]+$/;
      return slugRegex.test(value);
    };
    const validateMetaUrlInput = (value: string): SetStateAction<boolean> => {
      const MetaUrlRegex =
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
      return MetaUrlRegex.test(value);
    };

    switch (content) {
      case 'password':
      case 'passwordConfirm':
        return validatePasswordInput(value);
      case 'name':
      case 'participantName':
        return validateNameInput(value);
      case 'name-order':
        return validateNameOrderInput(value);
      case 'email':
        return validateEmailInput(value);
      case 'city':
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
      case 'translate':
        return validateTranslateInput(value);
      default:
        return false;
    }
  };

  const checkLength = (value: string): boolean => {
    if (value.length === 0) {
      setErrorMessage('Поле не может быть пустым');
      return false;
    } else if (value.length > +validationOptions[content].maxLength) {
      setErrorMessage(
        `Символов должно быть меньше ${
          +validationOptions[content].maxLength + 1
        }`,
      );
      return false;
    } else if (value.length < +validationOptions[content].minLength) {
      setErrorMessage(
        `Символов должно быть больше ${
          +validationOptions[content].minLength - 1
        }`,
      );
      return false;
    } else return true;
  };

  const checkValidity = (content: string, value: string | number) => {
    if (value === null || typeof value === 'number') return false;
    const defaultErrorMessages: { [key: string]: string } = {
      name: value.includes(' ')
        ? 'Имя содержит недопустимые символы'
        : 'Введите имя и фамилию',
      'name-order': 'Имя содержит недопустимые символы',
      participantName: 'Ввидите имя и фамилию участника',
      phone: 'Некорректный номер',
      password: 'Пароль содержит недопустимые символы',
      email: isEntry ? 'Некорректный email или логин' : 'Некорректный email',
      city: 'Некорректное название города',
      url: isRepost
        ? 'Вставьте ссылку на репост VK или Одноклассники'
        : 'Некорректный адрес',
      donate: 'Введите число',
      text: 'Поле содержит недопустимые символы',
      metaUrl: 'Некорректный адрес',
      title: 'Поле содержит недопустимые символы',
    };
    if (!validateInput(content, value)) {
      setErrorMessage(defaultErrorMessages[content]);
    }
    if (
      defaultValidation &&
      defaultValidation(value) &&
      value !== defaultValue
    ) {
      setErrorMessage('Поле содержит недопустимые символы');
      setIsValid(false);
      return;
    }

    if (checkLength(value) && validateInput(content, value)) {
      setErrorMessage('');
      setIsValid(true);
      return true;
    } else {
      setIsValid(false);
      return false;
    }
  };

  const showPassword = (e: React.SyntheticEvent<EventTarget>) => {
    const toggleBtn = e.target as HTMLSpanElement;
    toggleBtn.classList.toggle(styles.input__toggle_on);
    const input = toggleBtn.nextSibling as HTMLElement;
    const type = input.getAttribute('type');
    if (type === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  };

  function renderAnnotation(): JSX.Element {
    return (
      <div className={styles.input__annotation}>
        <p className={styles.input__annotationText}>
          Личные данные ребенка нужны для выдачи персонального диплома
        </p>
      </div>
    );
  }

  const debounceCheck = useDebounce(() => {
    checkValidity(content, value.toString());
  }, 400);

  useEffect(() => {
    if (value && !isComplete && isAutoComplete) {
      debounceCheck();
      setIsComplete(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const autoComplete = isOffAutocomplete
    ? 'off'
    : isAutoComplete
    ? 'current-password'
    : 'new-password';

  if (type === 'url' && errorMessage && isRepost) {
    notify.create({
      type: 'error',
      message: errorMessage,
      autoClose: true,
    });
  }

  return (
    <div className={classnames(styles.input__wrapper, className)}>
      {(content === 'password' || content === 'passwordConfirm') && (
        <span
          className={styles.input__toggle}
          onClick={(e) => showPassword(e)}
        />
      )}
      {['name', 'participantName'].includes(content) &&
        !isChange &&
        !isParent && (
          <div
            className={styles.input__alert}
            onMouseEnter={() => setShowAnnotation(!showAnnotation)}
            onMouseLeave={() => setShowAnnotation(!showAnnotation)}
          />
        )}
      {['name', 'participantName'].includes(content) &&
        !isChange &&
        !isParent &&
        showAnnotation &&
        renderAnnotation()}
      <input
        {...(content === 'endingTime' && { id: 'date' })}
        placeholder=" "
        type={type}
        name={content}
        title={isChild && content === 'email' ? '' : undefined}
        value={value}
        disabled={isChild && content === 'email'}
        onBlur={() => {
          let check = checkValidity(content, value.toString());

          if (content === 'name' || content === 'text' || content === 'title') {
            setValue(value.toString().trim());
            check = checkValidity(content, value.toString().trim());
          }

          if (defaultBlur) {
            defaultBlur(!!check);
          }
        }}
        onFocus={() => setErrorMessage('')}
        onChange={(e) => {
          setErrorMessage('');
          setValue(e.target.value);
        }}
        onClick={onClick}
        autoComplete={autoComplete}
        className={classnames(
          styles.input__field,
          errorMessage ? styles.input__field_error : '',
          type === 'donate' ? styles.input__field_donate : '',
          type === 'url' ? styles.input__field_type : '',
          disabled && styles.input__field_disabled,
        )}
        ref={reference}
      />
      <span
        className={classnames(styles.input__placeholder, {
          [styles.input__placeholder_type]: type === 'url',
        })}
      >
        {placeholder}
      </span>
      {!isSubscription &&
        !isNotError &&
        (type === 'url' && errorMessage && isRepost ? null : errorMessage ? (
          <p className={styles.input__error}>{errorMessage}</p>
        ) : null)}
    </div>
  );
};
