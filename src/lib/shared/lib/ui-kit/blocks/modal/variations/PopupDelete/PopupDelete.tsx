import styles from './PopupDelete.module.scss';
import cl from 'classnames';
import { modal } from '@ui/blocks/modal';
import { Button } from '@ui/components/Button';

interface IPopupDelete {
  title?: boolean;
  delet: () => void;
  close: () => void;
}

export const PopupDelete: React.FC<IPopupDelete> = ({
  title,
  close,
  delet,
}) => {
  return (
    <>
      <div
        className={cl(styles.popup__header, styles['popup__header--regChild'])}
      >
        <h2 className={cl(styles.popup__active, styles.popup__child)}>
          {title ?? 'Удалить список?'}
        </h2>
      </div>
      <div className={styles.delete__buttons}>
        <Button
          variant="main"
          className={styles.delete__yes}
          onClick={() => {
            delet && delet();
          }}
        >
          Удалить
        </Button>
        <Button
          className={styles.delete__yes}
          variant={'light'}
          onClick={() => {
            close && close();
            modal.close();
          }}
        >
          Отмена
        </Button>
      </div>
    </>
  );
};

export default PopupDelete;
