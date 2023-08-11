/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from './UploadImage.module.scss';
import { notify } from '@ui/blocks/notification';
import { modal } from '@ui/blocks/modal';
import { Button } from '@ui/components/Button';
import { ImgLoader } from '@ui/components/Loader';

interface IUploadImageProps {
  sendImageOnServer: (file: any) => void;
  imageType: string;
  isDrawn?: boolean;
  paymentAmount?: boolean;
  uploadedImgSrc?: string;
  isLoading?: boolean;
}

export const UploadImage: React.FC<IUploadImageProps> = ({
  sendImageOnServer,
  imageType,
  isDrawn,
  paymentAmount,
  uploadedImgSrc,
  isLoading,
}) => {
  const [drag, setDrag] = useState(false);

  const maxSizeBytes = 3192100;

  const showNotificationError = () => {
    notify.create({
      message: 'Неверный формат фото',
      type: 'error',
    });
  };

  const showNotificationSizeError = () => {
    notify.create({
      message: 'Превышен размер фото',
      type: 'error',
    });
  };

  function uploadImage() {
    const type = '.png,.jpeg,.jpg' + (imageType === 'avatar' ? '' : ',.pdf');
    const input: HTMLElement = document.querySelector(
      '[class*=inputFile]',
    ) as HTMLElement;
    input.setAttribute('accept', type);
    input.click();
  }

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>): any {
    const files = e.target.files;
    if (!files || files?.[0]?.size > maxSizeBytes || files?.[0]?.size < 0) {
      showNotificationSizeError();
    } else {
      if (imageType === 'avatar') {
        openAvatarCropper(files[0]);
      } else sendImageOnServer(files[0]);
    }
  }

  function dragStartHandler(e: any) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e: any) {
    e.preventDefault();
    setDrag(false);
  }

  function upload(e: any): any {
    e.preventDefault();
    setDrag(false);
    const files = e.dataTransfer.files;
    const file = files[0];
    const fileType = file.type;
    const fileSize = file.size;
    if (files.length !== 1 || fileSize > maxSizeBytes || fileSize < 0)
      showNotificationSizeError();
    if (
      fileType === 'image/png' ||
      fileType === 'application/pdf' ||
      fileType == 'image/jpeg'
    ) {
      if (imageType === 'avatar') {
        openAvatarCropper(file);
      } else sendImageOnServer(file);
    } else showNotificationError();
  }

  function openAvatarCropper(file: any): void {
    modal.open('AvatarCropper', {
      componentProps: { file, sendImageOnServer },
    });
  }

  return (
    <>
      {imageType === 'drawing' && (
        <div className={styles.uploadImage__block}>
          {isDrawn && !isLoading ? (
            <img
              className={styles.uploadImage__uploadedImg}
              src={uploadedImgSrc}
              alt="uploaded"
            />
          ) : isDrawn && isLoading ? (
            <ImgLoader className={styles.uploadImage__loader} />
          ) : null}
          <input
            type="file"
            id="file"
            className={styles.uploadImage__inputFile}
            onChange={(e) => changeHandler(e)}
          />
          {isDrawn ? (
            <>
              <Button
                variant={'download'}
                onClick={() => uploadImage()}
                className={styles.uploadImage__replaceButton}
              >
                Заменить
              </Button>
              <p className={styles.uploadImage__info}>
                {uploadedImgSrc
                  ? 'Ваша работа успешно принята!'
                  : 'Вы можете заменить работу до окончания конкурса'}
              </p>
            </>
          ) : (
            <>
              <input
                type="file"
                id="file"
                className={styles.uploadImage__inputFile}
                onChange={(e) => changeHandler(e)}
              />
              <Button
                variant={'download'}
                className={!isDrawn && styles.uploadImage__button}
                onClick={() => {
                  if (paymentAmount) uploadImage();
                  else {
                    notify.create({
                      message:
                        'Загрузить работу можно только после подтверждения оплаты',
                      type: 'error',
                    });
                  }
                }}
              >
                Загрузить работу
              </Button>
              <p
                className={styles.uploadImage__info}
                desktop-text="Нажмите на кнопку или перетяните изображение сюда"
                mobile-text="Нажмите на кнопку для загрузки"
              />
            </>
          )}
          <p className={styles.uploadImage__format}>
            {'Форматы: '}
            <span>PNG, JPEG, PDF</span>
            {'. Макс разрешение 3500х3500'}
          </p>
        </div>
      )}
      {imageType === 'avatar' && (
        <div
          className={styles.uploadImage__uploadAvatar}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragStartHandler(e)}
          onDrop={(e) => upload(e)}
        >
          <input
            type="file"
            id="file"
            className={styles.uploadImage__inputFile}
            onChange={(e) => changeHandler(e)}
          />
          <Button
            variant={'main'}
            onClick={() => uploadImage()}
            className={styles.uploadImage__replaceButton}
          >
            Заменить
          </Button>
          <p className={styles.uploadImage__formatAvatar}>
            {'Форматы: '}
            <span>PNG, JPEG, PDF</span>
            {'. Макс разрешение 3500х3500'}
          </p>
        </div>
      )}
    </>
  );
};
