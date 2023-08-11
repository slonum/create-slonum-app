import { FC } from 'react';
import Image from 'next/image';
import { H3 } from '@ui/components/Typography/H';
import { modal } from '@ui/blocks/modal';
import { PopupCreateParticipant } from '../PopupCreateParticipant';
import {
  IParticipantInfo,
  IUserInfoAvatarLink,
  OLYMPIAD_MATH,
  useNavigate,
} from '@slonum/kit';
import { IRegisterExistChildRequest } from '@slonum/kit';
import styles from './PopupChoiceChild.module.scss';

interface IPopupChoiceChild {
  childs?: IUserInfoAvatarLink[];
  exerciseGroupId: string;
  registerExitChildRequest: (
    data: IRegisterExistChildRequest,
  ) => Promise<IParticipantInfo>;
  isNotClose?: boolean;
}

export const PopupChoiceChild: FC<IPopupChoiceChild> = ({
  childs,
  exerciseGroupId,
  registerExitChildRequest,
  isNotClose,
}) => {
  const navigate = useNavigate();

  const onClickAddParticipant = () => {
    modal.open(
      <PopupCreateParticipant
        childs={childs}
        registerExitChildRequest={registerExitChildRequest}
        exerciseGroudId={exerciseGroupId}
      />,
      {
        onClose: () =>
          modal.open(
            <PopupChoiceChild
              childs={childs}
              exerciseGroupId={exerciseGroupId}
              registerExitChildRequest={registerExitChildRequest}
            />,
            { isNotClose },
          ),
        isNotClose,
      },
    );
  };

  const onClickChildCard = async (children: IUserInfoAvatarLink) => {
    const childrenData: IRegisterExistChildRequest = {
      childId: children.id,
      olympiadLink: 'some olympiad link',
      olympiadId: Number(exerciseGroupId),
    };

    const _participant = await registerExitChildRequest(childrenData);

    if (!_participant) return;
    console.log('dsada');

    const olympUrl =
      process.env.NEXT_PUBLIC_LOCAL === 'local'
        ? 'http://localhost:8084'
        : OLYMPIAD_MATH;

    if (_participant.status === 'FINISHED') {
      await navigate(
        `${olympUrl}/olympiad-tasks/results?userId=${children.id}`,
      );
      return;
    }
    await navigate(`${olympUrl}/olympiad-tasks/board?userId=${children.id}`);

    modal.close();
  };

  return (
    <div className={styles.popup}>
      <H3 className={styles.popup__title}>
        Кто сейчас будет решать олимпиаду?
      </H3>

      <ul className={styles.popup__list}>
        {childs?.map((children) => (
          <li
            key={children.id}
            className={styles.popup__listItem}
            onClick={() => onClickChildCard(children)}
          >
            <div className={styles.popup__avatar}>
              {children.avatarLink && (
                <Image src={children.avatarLink} alt="avatar" fill />
              )}
            </div>
            <p className={styles.popup__name}>
              {children.fullName.split(' ')[0]}
            </p>
          </li>
        ))}
        <li className={styles.popup__listItem} onClick={onClickAddParticipant}>
          <div className={styles.popup__plus} />
          <p className={styles.popup__name}>Добавить</p>
        </li>
      </ul>
    </div>
  );
};
