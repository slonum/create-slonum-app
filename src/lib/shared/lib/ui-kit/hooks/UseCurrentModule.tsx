import {
  BLOG_LINK,
  CABINET,
  DICTIONARY_WORDS,
  DRAWING_COMPETITION,
  ENGLISH_WORDS,
  FRACTION,
  OLYMPIAD_MATH,
} from '@slonum/kit';
import { useAppDispatch } from '@ui/redux';
import { moduleActions } from '@ui/redux/Module/slice';
import { useEffect } from 'react';

export function useCurrentModule() {
  const LINK: string = window.location.href;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (LINK === BLOG_LINK)
      dispatch(moduleActions.setModule({ module: 'blog' }));
    else if (LINK === DRAWING_COMPETITION)
      dispatch(moduleActions.setModule({ module: 'drawing-competition' }));
    else if (LINK === ENGLISH_WORDS)
      dispatch(moduleActions.setModule({ module: 'english-lang' }));
    else if (LINK === FRACTION)
      dispatch(moduleActions.setModule({ module: 'fraction' }));
    else if (LINK === CABINET)
      dispatch(moduleActions.setModule({ module: 'lk' }));
    else if (LINK === OLYMPIAD_MATH)
      dispatch(moduleActions.setModule({ module: 'olympiad' }));
    else if (LINK === DICTIONARY_WORDS)
      dispatch(moduleActions.setModule({ module: 'vocabulary-words' }));
    else dispatch(moduleActions.setModule({ module: 'main' }));
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);
}
