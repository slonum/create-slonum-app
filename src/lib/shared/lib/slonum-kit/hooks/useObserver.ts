import { RefObject, useEffect, useRef } from 'react';

interface IUseObserverProps {
  ref: RefObject<Element>;
  isInterTrue?: () => void;
  isInterFalse?: () => void;
  isOne?: boolean;
}

export const useObserver = ({
  ref,
  isInterTrue,
  isInterFalse,
  isOne,
}: IUseObserverProps) => {
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    const cb = function (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) {
      if (entries[0].isIntersecting) {
        if (isInterTrue) isInterTrue();
        if (isOne) observer.disconnect();
      } else {
        if (isInterFalse) isInterFalse();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current as Element);
  });
};
