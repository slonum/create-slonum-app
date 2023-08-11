import { FC } from 'react';
import { modal } from '@ui/blocks/modal';
import { AccentText, H2 } from '@ui/components/titles';
import { Button } from '@ui/components/Button';
import styles from './PopupLogRegPdf.module.scss';

export const PopupLogRegPdf: FC<{ grade: number }> = ({ grade }) => {
  const openLogWindow = (isReg?: boolean) => {
    modal.open('PopupLogReg', { componentProps: { isReg: isReg } });
  };
  return (
    <div className={styles.pdf}>
      <H2 className={styles.pdf__title}>
        Скачивание документа
        <br /> начнется после авторизации
      </H2>
      <p className={styles.pdf__text}>
        Полный список словарных слов
        <br className={styles.pdf__br1} /> за{' '}
        <AccentText className={styles.pdf__textAccent}>
          {grade < 10 ? grade : '10-11'} класс{' '}
        </AccentText>
        <br className={styles.pdf__br2} />
        доступен только авторизованным пользователям.
        <br />
        <AccentText className={styles.pdf__textAccent}>
          Это бесплатно
        </AccentText>
      </p>
      <div className={styles.pdf__buttons}>
        <Button variant="notlight" onClick={() => openLogWindow()}>
          Войти
        </Button>
        <Button variant="main" onClick={() => openLogWindow(true)}>
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
};

export default PopupLogRegPdf;
