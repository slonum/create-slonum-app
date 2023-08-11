import { SERVICE_FILES } from '@slonum/kit';

export const getChildAvatar = (childId: number | string): string => {
  if (!childId) return 'child1';
  const id = typeof childId === 'number' ? childId : +childId;
  if (isNaN(id)) return 'child1';
  return `child${(id % 5) + 1}`;
};

export const getLoggedProfileAvatar = (
  srcAvatar: string | undefined | null,
  isActive: boolean,
  isMobile: boolean,
  isTest: boolean,
  childId?: number | string,
): string => {
  if (isTest) return 'https://lk.slonum.ru/parent.svg';
  if (srcAvatar) return `${SERVICE_FILES}/static/${srcAvatar}`;
  return `/${isActive || !isMobile ? 'parent' : getChildAvatar(childId)}.svg`;
};

export const getEmptyAvatar = (
  srcAvatar: string | undefined | null,
  isParent: boolean,
  childId?: number | string,
): string => {
  if (srcAvatar) return `${SERVICE_FILES}/static/${srcAvatar}`;
  return `/${isParent ? 'parent' : getChildAvatar(childId)}.svg`;
};
