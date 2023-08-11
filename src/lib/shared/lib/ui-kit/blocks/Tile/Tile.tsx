/* eslint-disable indent */
import { H4 } from '@ui/components/titles';
import { SvgDevelop, SvgOpportunities, SvgWin } from '@ui/components/svg';
import cl from 'classnames';
import styles from './Tile.module.scss';
import { SvgPrize } from '@ui/components/svg/SvgPrize';

interface ITilesProps {
  img?: string;
  title?: string;
  text?: string;
  type?: string;
  isLine?: boolean;
}

const renderIcon = (img: string, className: string) => {
  switch (img) {
    case 'develop':
      return <SvgDevelop className={className} />;
    case 'win':
      return <SvgWin className={className} />;
    case 'opportunities':
      return <SvgOpportunities className={className} />;
    case 'prize':
      return <SvgPrize className={className} />;
    default:
      return <></>;
  }
};

export const Tile: React.FC<ITilesProps> = ({ img, title, text, type }) => {
  return (
    <div className={cl(styles.tile, styles[`tile--${type}`])}>
      {renderIcon(
        img,
        cl(styles.tile__img, type === 'olymp' && styles['tile__img--olymp']),
      )}
      <H4
        className={cl(
          styles.tile__title,
          type === 'principles' && styles['tile__title--principles'],
          type === 'olymp' && styles['tile__title--olymp'],
        )}
      >
        {title}
      </H4>
      <p
        className={cl(
          styles.tile__text,
          type === 'olymp' && styles['tile__text--olymp'],
        )}
      >
        {text}
      </p>
    </div>
  );
};
