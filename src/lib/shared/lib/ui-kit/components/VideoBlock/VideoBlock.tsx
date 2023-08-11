/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { FCL } from '@slonum/kit';
import { SvgPlayButton } from '../svg';
import cl from 'classnames';
import styles from './VideoBlock.module.scss';

interface IVideoBlock {
  url: string;
}

export const VideoBlock: FCL<IVideoBlock> = ({ url, className }) => {
  const [isActive, setIsActive] = useState(false);

  const initPlayback = () => {
    setIsActive(true);
  };

  if (!url) return null;
  const videoUrl = url.replace('watch?v=', 'embed/');
  const videoId = videoUrl.split('/').at(-1);

  return (
    <div
      className={cl(
        className,
        styles.video__overlay,
        isActive && styles['video__overlay--active'],
      )}
      onClick={() => initPlayback()}
    >
      <img
        className={cl(
          styles.video__thumbnail,
          isActive && styles['video__thumbnail--inactive'],
        )}
        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
        alt={'обложка'}
      />
      <SvgPlayButton
        className={cl(
          styles.video__button,
          isActive && styles['video__button--inactive'],
        )}
      />
      <iframe
        className={cl(styles.video__iframe, styles['video__iframe--active'])}
        src={
          videoUrl + '?autohide=1&showinfo=0' + (isActive ? '&autoplay=1' : '')
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};
