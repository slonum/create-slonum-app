import React, {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import cl from 'classnames';
import styles from './ScrollBarNew.module.scss';
import { useWindowResizeAction } from '@ui/hooks/useWindowResizeAction';
import { useDebounce } from '@slonum/kit';

interface IScrollBarProps {
  className?: string;
  classNameLine?: string;
  contentDefRef?: React.MutableRefObject<any>;
  stl?: any;
  children?: React.ReactNode;
  isLine?: boolean;
  type?: 'absolute';
  fadeType?: 'both' | 'top' | 'bottom';
  isChildrenOnly?: boolean;
  isResetScrollPosition?: boolean;
}

export const ScrollBarNew: FC<IScrollBarProps> = ({
  className,
  classNameLine,
  contentDefRef,
  stl,
  children,
  isLine,
  type,
  fadeType,
  isChildrenOnly,
  isResetScrollPosition,
}) => {
  const lineTop = useRef<HTMLDivElement>(null);
  const lineBottom = useRef<HTMLDivElement>(null);

  const defaultWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = contentDefRef ?? defaultWrapperRef;

  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);

  const [thumbHeight, setThumbHeight] = useState(65);
  const [trackSize, setTrackSize] = useState(0);
  const [scrollStartPosition, setScrollStartPosition] = useState<number>(null);
  const [initialScrollTop, setInitialScrollTop] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleTrackClick = useCallback(
    (e: React.MouseEvent) => {
      const { current: trackCurrent } = scrollTrackRef;
      const { current: contentCurrent } = contentRef;

      if (trackCurrent && contentCurrent) {
        const { clientY } = e;
        const target = e.target as HTMLDivElement;
        const rect = target.getBoundingClientRect();
        const trackTop = rect.top;
        const thumbOffset = -(thumbHeight / 2);
        const clickRatio =
          (clientY - trackTop + thumbOffset) / trackCurrent.clientHeight;
        const scrollAmount = Math.floor(
          clickRatio * contentCurrent.scrollHeight,
        );

        contentCurrent.scrollTo({
          top: scrollAmount,
          behavior: 'smooth',
        });
      }
    },
    [thumbHeight, contentRef],
  );

  const handleThumbMouseDown = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      e.type === 'mousedown' && e.preventDefault();
      e.stopPropagation();

      e.type === 'mousedown' &&
        setScrollStartPosition((e as React.MouseEvent).clientY);

      e.type === 'touchstart' &&
        setScrollStartPosition((e as React.TouchEvent).targetTouches[0].pageY);

      contentRef.current && setInitialScrollTop(contentRef.current.scrollTop);
      setIsDragging(true);
    },
    [contentRef],
  );

  const handleThumbMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
    }
  }, [isDragging]);

  const handleThumbMouseMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (isDragging && scrollStartPosition) {
        const {
          scrollHeight: contentScrollHeight,
          offsetHeight: contentOffsetHeight,
        } = contentRef.current;

        const clientY =
          (e as MouseEvent).clientY ?? (e as TouchEvent).targetTouches[0].pageY;

        const deltaY =
          (clientY - scrollStartPosition) * (contentOffsetHeight / thumbHeight);

        const newScrollTop = Math.min(
          initialScrollTop + deltaY,
          contentScrollHeight - contentOffsetHeight,
        );

        contentRef.current.scrollTop = newScrollTop;
      }
    },
    [
      isDragging,
      scrollStartPosition,
      thumbHeight,
      contentRef,
      initialScrollTop,
    ],
  );

  const positionHandler = useCallback(() => {
    if (contentRef.current && scrollThumbRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const topOffset = (scrollTop / scrollHeight) * trackSize;
      const scrollOffset = scrollHeight - clientHeight;
      const thumbOffset =
        topOffset < trackSize - 10 ? topOffset : trackSize - 10;

      scrollThumbRef.current.style.top = `${thumbOffset}px`;

      if (lineTop.current)
        scrollTop > 1
          ? (lineTop.current.style.opacity = '1')
          : (lineTop.current.style.opacity = '0');

      if (lineBottom.current)
        scrollTop + 1 < scrollOffset
          ? (lineBottom.current.style.opacity = '1')
          : (lineBottom.current.style.opacity = '0');
    }
  }, [contentRef, trackSize]);

  const resizeHandler = useCallback(() => {
    if (contentRef.current && scrollTrackRef.current) {
      const { clientHeight, scrollHeight } = contentRef.current;
      const { clientHeight: trackHeight } = scrollTrackRef.current;
      const thumbHeight = (clientHeight / scrollHeight) * trackHeight;

      setTrackSize(trackHeight);
      setThumbHeight(thumbHeight > 10 ? thumbHeight : 10);
    }
  }, [contentRef]);

  const debouncedResizeHandler = useDebounce(resizeHandler, 200);

  useWindowResizeAction(debouncedResizeHandler);

  useLayoutEffect(() => {
    if (contentRef.current && scrollTrackRef.current) {
      resizeHandler();
      positionHandler();
    }
  }, [contentRef, children, resizeHandler, positionHandler]);

  useEffect(() => {
    if (contentRef.current) {
      isResetScrollPosition && (contentRef.current.scrollTop = '0');
    }
  }, [contentRef, isResetScrollPosition, children]);

  useEffect(() => {
    if (contentRef.current && scrollTrackRef.current) {
      const currentContentRef = contentRef.current;

      currentContentRef.addEventListener('scroll', positionHandler);

      return () => {
        currentContentRef.removeEventListener('scroll', positionHandler);
      };
    }
  }, [trackSize, contentRef, positionHandler]);

  useEffect(() => {
    const { scrollHeight, clientHeight } = contentRef.current;

    setIsVisible(scrollHeight !== clientHeight);
  }, [thumbHeight]);

  useEffect(() => {
    document.addEventListener('mousemove', handleThumbMouseMove);
    document.addEventListener('mouseup', handleThumbMouseUp);
    document.addEventListener('mouseleave', handleThumbMouseUp);

    document.addEventListener('touchmove', handleThumbMouseMove);
    document.addEventListener('touchend', handleThumbMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleThumbMouseMove);
      document.removeEventListener('mouseup', handleThumbMouseUp);
      document.removeEventListener('mouseleave', handleThumbMouseUp);

      document.removeEventListener('touchmove', handleThumbMouseMove);
      document.removeEventListener('touchend', handleThumbMouseUp);
    };
  }, [handleThumbMouseMove, handleThumbMouseUp]);

  return (
    <div
      className={cl(
        className,
        styles.scrollbars__container,
        stl && stl.scrollbars__container,
        {
          [styles.scrollbars__container_absolute]: type === 'absolute',
        },
      )}
    >
      {(isLine || ['both', 'top'].includes(fadeType)) && (
        <div
          ref={lineTop}
          className={cl(
            classNameLine,
            styles.scrollbars__line,
            styles.scrollbars__line_top,
            { [styles.off]: !isVisible },
          )}
        />
      )}
      {isChildrenOnly && contentDefRef ? (
        children
      ) : (
        <div
          className={cl(
            styles.scrollbars__content,
            stl && stl.scrollbars__content,
          )}
          ref={contentRef}
        >
          {children}
        </div>
      )}

      <div
        className={cl(
          styles.scrollbars__scrollbar,
          stl && stl.scrollbars__scrollbar,
          {
            [styles.off]: !isVisible,
            [styles.scrollbars__scrollbar_absolute]: type === 'absolute',
          },
        )}
      >
        <div
          className={cl(styles.scrollbars__track, stl && stl.scrollbars__track)}
          ref={scrollTrackRef}
          onClick={handleTrackClick}
          style={{ cursor: isDragging ? 'grabbing' : 'pointer' }}
        />
        <div
          className={cl(styles.scrollbars__thumb, stl && stl.scrollbars__thumb)}
          ref={scrollThumbRef}
          onMouseDown={handleThumbMouseDown}
          onTouchStart={handleThumbMouseDown}
          style={{
            height: `${thumbHeight}px`,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        />
      </div>
      {(isLine || ['both', 'bottom'].includes(fadeType)) && (
        <div
          ref={lineBottom}
          className={cl(
            classNameLine,
            styles.scrollbars__line,
            styles.scrollbars__line_bottom,
            { [styles.off]: !isVisible },
          )}
        />
      )}
    </div>
  );
};
