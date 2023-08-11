import { H2 } from '@ui/components/titles';
import { Button } from '@ui/components/Button';
import { SvgElephantHead } from '@ui/components/svg';
import styles from './PopupClose.module.scss';
import React from 'react';

interface IPopupCloseProps {
  yes: () => void;
  no: () => void;
  title?: string;
}
const DefTitle = () => (
  <>
    Вы уверены, <br /> что хотите завершить?
  </>
);

export const PopupClose: React.FC<IPopupCloseProps> = ({ no, yes, title }) => {
  return (
    <div className={styles.popup}>
      <H2 className={styles.popup__title}>{title ? title : <DefTitle />}</H2>
      <div className={styles.popup__buttons}>
        <Button
          variant="notlight"
          className={styles.popup__yes}
          onClick={() => yes()}
        >
          Да
        </Button>
        <Button className={styles.popup__yes} onClick={() => no()}>
          Нет
        </Button>
      </div>
      <SvgElephantHead className={styles.popup__image} />
    </div>
  );
};

export default PopupClose;
