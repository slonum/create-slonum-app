import { useEffect, useState } from 'react';
import { notify } from '@ui/blocks/notification';
import { modal } from '@ui/blocks/modal';
import { IFeedback, sendFeedback } from '@slonum/kit';
import { H2 } from '@ui/components/titles';
import { Button } from '@ui/components/Button';
import { SvgLike, SvgPdf, SvgProgress } from '@ui/components/svg';
import { PopupLogReg } from '../PopupLogReg';
import { PopupElephant } from '../PopupElephant';
import styles from './PopupFeedback.module.scss';
import cl from 'classnames';

interface IFeedbackPopup {
  startStep?: number;
  setIsModalOpen?: (arg0: boolean) => void;
  setFinished?: (arg0: boolean) => void;
  setCurrentCount?: (arg0: number) => void;
}

export const PopupFeedback: React.FC<IFeedbackPopup> = ({
  startStep = 1,
  setIsModalOpen,
  setFinished,
  setCurrentCount,
}) => {
  const [step, setStep] = useState(startStep);
  const [isLike, setIsLike] = useState<null | boolean>(null);
  const [feedback, setFeedback] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSent, setIsSent] = useState(false);
  const data: IFeedback = {
    like: isLike,
    feedback,
  };

  useEffect(() => {
    if (setIsModalOpen) {
      return () => setIsModalOpen(false);
    }
  }, [setIsModalOpen]);
  useEffect(() => {
    if (isLike !== null) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [isLike, feedback]);

  const submitHandler = () => {
    try {
      sendFeedback(data);
      /* notify.create({
        message: 'Отзыв отправлен',
        type: 'success',
      }); */
      setIsSent(true);
      setStep(2);
      if (setFinished) setFinished(true);
      setCurrentCount(-1);
    } catch (e) {
      notify.create({
        message: 'Произошла ошибка',
        type: 'error',
      });
    }
  };
  return (
    <div className={styles.feedback}>
      <div
        className={styles.feedback__track}
        style={{
          translate: `calc(${(step - 1) * -100}% - ${20 * (step - 1)}px) 0%`,
        }}
      >
        <div className={styles.feedback__first}>
          <H2 className={styles.feedback__title}>Как вам тренажер?</H2>
          <div className={styles.feedback__info}>
            <p className={styles.feedback__text}>
              Помогите сделать тренажер лучше. Оцените свой опыт и напишите, что
              вам понравилось, а что нет.
            </p>
            <div className={styles.feedback__likes}>
              <div
                className={cl(
                  styles.feedback__like,
                  isLike && styles['feedback__like--like-anim'],
                )}
                onClick={() => setIsLike(true)}
              >
                <SvgLike
                  className={cl(
                    styles.feedback__svg,
                    styles['feedback__svg--like'],
                    isLike && styles['feedback__svg--like-anim'],
                  )}
                />
              </div>
              <div
                className={cl(
                  styles.feedback__like,
                  styles['feedback__like--dislike'],
                  isLike === false && styles['feedback__like--dislike-anim'],
                )}
                onClick={() => setIsLike(false)}
              >
                <SvgLike
                  className={cl(
                    styles.feedback__svg,
                    styles['feedback__svg--dislike'],
                    isLike === false && styles['feedback__svg--dislike-anim'],
                  )}
                />
              </div>
            </div>
          </div>
          <textarea
            className={styles.feedback__textarea}
            placeholder="В будущем я бы хотел видеть..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          <div className={styles.feedback__buttons}>
            {/* <Button
              variant={isDisabled ? 'trainer' : 'main'}
              onClick={submitHandler}
              disabled={isDisabled}
              className={cl({ [styles['feedback__button--sent']]: isSent })}
            >
              {isSent ? 'Отправлено' : 'Отправить'}
              {isSent && <SvgTick className={styles.feedback__tick} />}
            </Button> */}
            <Button
              variant="trainer"
              onClick={submitHandler}
              disabled={isDisabled}
              className={cl(styles['feedback__button'], {
                [styles['feedback__button--sent']]: !isDisabled,
              })}
            >
              Продолжить
            </Button>
          </div>
          <div className={styles.feedback__steps}>
            <span
              className={cl(
                styles.feedback__step,
                step === 1 && styles['feedback__step--active'],
              )}
            ></span>
            <span
              className={cl(
                styles.feedback__step,
                step === 2 && styles['feedback__step--active'],
              )}
            ></span>
          </div>
        </div>
        <div className={styles.feedback__second}>
          <H2 className={styles.feedback__title}>Сохраните прогресс</H2>
          <div
            className={cl(
              styles.feedback__info,
              styles['feedback__info--second'],
            )}
          >
            <p
              className={cl(
                styles.feedback__text,
                styles['feedback__text--second'],
              )}
            >
              Чтобы не потерять прогресс, войдите или зарегистрируйтесь.
              Зарегистрированные пользователи получают доступ к:
            </p>
            <div className={styles.feedback__points}>
              <div className={styles.feedback__point}>
                <SvgPdf />
                <p className={styles.feedback__pointText}>
                  Pdf версии тренажера
                </p>
              </div>
              <div className={styles.feedback__point}>
                <SvgProgress />
                <p className={styles.feedback__pointText}>Странице прогресса</p>
              </div>
            </div>
          </div>
          <div className={styles.feedback__buttons}>
            <Button
              variant="practice"
              onClick={() =>
                modal.open(<PopupLogReg />, {
                  onCloseHandl: () =>
                    modal.open(
                      <PopupElephant>
                        <PopupFeedback startStep={2} />
                      </PopupElephant>,
                      {
                        isMini: true,
                      },
                    ),
                })
              }
            >
              Войти
            </Button>
            <Button
              variant="main"
              onClick={() =>
                modal.open(<PopupLogReg isReg />, {
                  onCloseHandl: () =>
                    modal.open(
                      <PopupElephant>
                        <PopupFeedback startStep={2} />
                      </PopupElephant>,
                      {
                        isMini: true,
                      },
                    ),
                })
              }
            >
              Зарегистрироваться
            </Button>
          </div>
          <div className={styles.feedback__steps}>
            <span
              className={cl(
                styles.feedback__step,
                step === 1 && styles['feedback__step--active'],
              )}
            ></span>
            <span
              className={cl(
                styles.feedback__step,
                step === 2 && styles['feedback__step--active'],
              )}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupFeedback;
