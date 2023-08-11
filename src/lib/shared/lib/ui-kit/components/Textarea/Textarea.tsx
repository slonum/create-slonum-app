/* eslint-disable indent */
import { FC, SetStateAction, useEffect, useState } from 'react';
import cl from 'classnames';
import styles from './Textarea.module.scss';

type contentTypes = 'comment';

export interface ITextareaProps {
  placeholder?: string;
  getInputValidateState: (inputType: contentTypes, isValid: boolean) => void;
  reference?: React.MutableRefObject<any>;
  className?: string;
  content: contentTypes;
}

export const Textarea: FC<ITextareaProps> = ({
  getInputValidateState,
  className,
  placeholder,
  reference,
  content,
}) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getInputValidateState(content, isValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValid]);

  const validationOptions: { [key: string]: Record<string, number | boolean> } =
    {
      comment: {
        minLength: 5,
        maxLength: 400,
        containsSpecialChars: false,
      },
    };

  const validateInput = (
    content: string,
    value: string,
  ): SetStateAction<boolean> => {
    const validateCommentInput = (value: string): SetStateAction<boolean> => {
      const commmentRegex = /^[а-яА-Яa-zA-Z0-9 .'?!,\n\r]+$/;
      return commmentRegex.test(value);
    };

    switch (content) {
      case 'comment':
        return validateCommentInput(value);
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

  const checkValidity = (content: string, value: string) => {
    if (value === null) return;
    const defaultErrorMessages: { [key: string]: string } = {
      comment: 'Поле содержит недопустимые символы',
    };
    if (!validateInput(content, value)) {
      setErrorMessage(defaultErrorMessages[content]);
    }

    if (checkLength(value) && validateInput(content, value)) {
      setErrorMessage('');
      setIsValid(true);
    } else setIsValid(false);
  };

  return (
    <div className={cl(styles.textarea__wrapper, className)}>
      <textarea
        placeholder=" "
        name={content}
        title={''}
        value={value}
        onBlur={() => {
          checkValidity(content, value);
        }}
        onFocus={() => setErrorMessage('')}
        onChange={(e) => {
          setIsValid(true);
          setErrorMessage('');
          setValue(e.target.value);
        }}
        autoComplete={'new-password'}
        className={cl(
          styles.textarea__field,
          errorMessage ? styles.textarea__field_error : '',
        )}
        ref={reference}
      />
      <span className={cl(styles.textarea__placeholder)}>{placeholder}</span>
      {errorMessage && <p className={styles.textarea__error}>{errorMessage}</p>}
    </div>
  );
};
