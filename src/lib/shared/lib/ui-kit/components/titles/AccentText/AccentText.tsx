import classnames from 'classnames';
import styles from './AccentText.module.scss';

export interface IAccentText {
  children: React.ReactNode;
  isVocabulary?: boolean;
  className?: string;
}

export const AccentText: React.FC<IAccentText> = ({
  children,
  isVocabulary,
  className,
}) => {
  return (
    <span
      className={classnames(
        className,
        styles.accentText,
        isVocabulary && styles['accentText--vocabulary'],
      )}
    >
      {children}
    </span>
  );
};
