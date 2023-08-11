import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import cl from 'classnames';
import styles from './ScrollBar.module.scss';

interface IScrollBarProps {
  className?: string;
  contentDefRef?: React.MutableRefObject<any>;
  stl?: any;
  children?: React.ReactNode;
  isCheck?: boolean;
  isVisible?: boolean;
  isLine?: boolean;
  classNameLine?: string;
}

export const ScrollBar: FC<IScrollBarProps> = ({
  children,
  className,
  contentDefRef,
  isCheck,
  stl,
  isVisible,
  classNameLine,
  isLine,
}) => {
  const lineTop = useRef<HTMLDivElement>(null);
  const lineBottom = useRef<HTMLDivElement>(null);

  const newContentRef = useRef<HTMLDivElement>(null);
  const contentRef = contentDefRef ?? newContentRef;
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const [thumbHeight, setThumbHeight] = useState(65);
  const [scrollStartPosition, setScrollStartPosition] = useState<number | null>(
    null,
  );
  const [initialScrollTop, setInitialScrollTop] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [visibleScroll, setVisibleScroll] = useState(false);

  const observer = useRef<ResizeObserver | null>(null);

  function handleResize(ref: HTMLDivElement, trackSize: number) {
    const { clientHeight, scrollHeight } = ref;
    setThumbHeight(Math.max((clientHeight / scrollHeight) * trackSize, 65));
    if (clientHeight === scrollHeight) {
      setVisibleScroll(false);
    } else {
      setVisibleScroll(true);
    }
  }

  useEffect(() => {
    if (!scrollThumbRef.current) return;
    if (visibleScroll) {
      scrollThumbRef.current.style.top = '0px';
    } else if (visibleScroll === undefined) {
      setVisibleScroll(false);
    }
    if (lineTop.current) lineTop.current.style.opacity = '0';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      !contentRef ||
      !contentRef.current ||
      !isCheck ||
      !scrollTrackRef.current
    )
      return;
    const check =
      contentRef.current.clientHeight !== contentRef.current.scrollHeight;

    setVisibleScroll(check);
    const ref = contentRef.current;
    const { clientHeight: trackSize } = scrollTrackRef.current;
    handleResize(ref, trackSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCheck, isVisible]);

  const handleTrackClick = useCallback(
    (e: any) => {
      e.preventDefault();
      e.stopPropagation();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [thumbHeight],
  );

  const handleThumbPosition = useCallback(() => {
    if (
      !contentRef.current ||
      !scrollTrackRef.current ||
      !scrollThumbRef.current
    ) {
      return;
    }
    const { scrollTop: contentTop, scrollHeight: contentHeight } =
      contentRef.current;
    const { clientHeight: trackHeight } = scrollTrackRef.current;
    let newTop = (+contentTop / +contentHeight) * trackHeight;
    newTop = Math.min(newTop, trackHeight - thumbHeight);
    const thumb = scrollThumbRef.current;
    thumb.style.top = `${newTop}px`;

    if (lineBottom.current && lineTop.current) {
      const sub = contentHeight - trackHeight;
      const prc = (sub / 100) * 2;
      if (contentTop > prc) lineTop.current.style.opacity = '1';
      else lineTop.current.style.opacity = '0';
      if (contentTop > sub - prc) lineBottom.current.style.opacity = '0';
      else lineBottom.current.style.opacity = '1';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleThumbMousedown = useCallback((e: any) => {
    if (e.type === 'mousedown') e.preventDefault();
    e.stopPropagation();
    setScrollStartPosition(e.clientY ?? e.targetTouches[0].pageY);
    if (contentRef.current) setInitialScrollTop(contentRef.current.scrollTop);
    setIsDragging(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleThumbMouseup = useCallback(
    (e: any) => {
      // e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        setIsDragging(false);
      }
    },
    [isDragging],
  );

  const handleThumbMousemove = useCallback(
    (e: any) => {
      e.stopPropagation();
      if (isDragging && scrollStartPosition) {
        const {
          scrollHeight: contentScrollHeight,
          offsetHeight: contentOffsetHeight,
        } = contentRef.current;

        const clientY = e.clientY ?? e.targetTouches[0].pageY;

        const deltaY =
          (clientY - scrollStartPosition) * (contentOffsetHeight / thumbHeight);
        // (contentScrollHeight / contentOffsetHeight);

        const newScrollTop = Math.min(
          initialScrollTop + deltaY,
          contentScrollHeight - contentOffsetHeight,
        );

        contentRef.current.scrollTop = newScrollTop;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isDragging, scrollStartPosition, thumbHeight],
  );

  useEffect(() => {
    if (contentRef.current && scrollTrackRef.current) {
      const ref = contentRef.current;
      const { clientHeight: trackSize } = scrollTrackRef.current;
      observer.current = new ResizeObserver(() => {
        handleResize(ref, trackSize);
      });
      observer.current.observe(ref);
      ref.addEventListener('scroll', handleThumbPosition);
      return () => {
        observer.current?.unobserve(ref);
        ref.removeEventListener('scroll', handleThumbPosition);
      };
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleThumbMousemove);
    document.addEventListener('mouseup', handleThumbMouseup);
    document.addEventListener('mouseleave', handleThumbMouseup);

    document.addEventListener('touchmove', handleThumbMousemove);
    document.addEventListener('touchend', handleThumbMouseup);

    return () => {
      document.removeEventListener('mousemove', handleThumbMousemove);
      document.removeEventListener('mouseup', handleThumbMouseup);
      document.removeEventListener('mouseleave', handleThumbMouseup);

      document.removeEventListener('touchmove', handleThumbMousemove);
      document.removeEventListener('touchend', handleThumbMouseup);
    };
  }, [handleThumbMousemove, handleThumbMouseup]);

  return (
    <div
      className={cl(
        className,
        styles['scrollbars__container'],
        stl && stl['scrollbars__container'],
      )}
    >
      {isLine && (
        <div
          ref={lineTop}
          className={cl(
            classNameLine,
            styles['scrollbars__line'],
            styles['scrollbars__line--top'],
            { [styles.off]: !visibleScroll },
          )}
        />
      )}
      {contentDefRef ? (
        children
      ) : (
        <div
          className={cl(
            styles['scrollbars__content'],
            stl && stl['scrollbars__content'],
          )}
          ref={contentRef}
        >
          {children}
        </div>
      )}
      <div
        className={cl(
          styles['scrollbars__scrollbar'],
          stl && stl['scrollbars__scrollbar'],
          { [styles.off]: !visibleScroll },
        )}
      >
        <div
          className={cl(
            styles['scrollbars__track'],
            stl && stl['scrollbars__track'],
          )}
          ref={scrollTrackRef}
          onClick={handleTrackClick}
          style={{ cursor: isDragging ? 'grabbing' : 'pointer' }}
        />
        <div
          className={cl(
            styles['scrollbars__thumb'],
            stl && stl['scrollbars__thumb'],
          )}
          ref={scrollThumbRef}
          onMouseDown={handleThumbMousedown}
          onTouchStart={handleThumbMousedown}
          style={{
            height: `${thumbHeight}px`,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        />
      </div>
      {isLine && (
        <div
          ref={lineBottom}
          className={cl(
            classNameLine,
            styles['scrollbars__line'],
            styles['scrollbars__line--bottom'],
            { [styles.off]: !visibleScroll },
          )}
        />
      )}
    </div>
  );
};
