import React, { useState } from 'react';
import { H2 } from '@ui/components/titles';

import styles from './PopupLogReg.module.scss'; //todo почистить стили от лишнего кода
import cl from 'classnames';
import { FormAuth } from '@ui/blocks/forms/FormAuth/FormAuth';

interface IPopupLogReg {
  isReg?: boolean;
  isLk?: boolean;
}

export const PopupLogReg: React.FC<IPopupLogReg> = ({ isReg, isLk }) => {
  const [isEntry, setIsEntry] = useState<boolean>(!isReg);
  const [isPasswordRecovery, setIsPasswordRecovery] = useState(false);
  return (
    <>
      {!isPasswordRecovery ? (
        <div className={styles.popup__header}>
          <h2
            className={
              isEntry ? styles.popup__active : styles.popup__inactiveEntry
            }
            onClick={() => setIsEntry(true)}
          >
            Вход
          </h2>
          <h2
            className={
              isEntry
                ? styles.popup__inactiveRegistration
                : styles.popup__active
            }
            onClick={() => setIsEntry(false)}
          >
            Регистрация
          </h2>
        </div>
      ) : (
        <div
          className={cl(
            styles.popup__header,
            styles['popup__header--password'],
          )}
        >
          <button
            className={styles.popup__back}
            onClick={() => setIsPasswordRecovery(false)}
          />
          <H2 className={styles['popup__title--password']}>
            Восстановление пароля
          </H2>
        </div>
      )}
      <FormAuth
        isEntry={isEntry}
        setIsRecoveryPassword={setIsPasswordRecovery}
        isRecoveryPassword={isPasswordRecovery}
      />
    </>
  );
};
