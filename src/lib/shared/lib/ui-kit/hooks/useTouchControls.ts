import { useState, TouchEvent } from 'react';

export default function useTouchControls(
  prevCallback: () => void,
  nextCallback: () => void,
) {
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextCallback();
    }

    if (diff < -5) {
      prevCallback();
    }

    setTouchPosition(null);
  };

  return { onTouchStart, onTouchMove };
}
