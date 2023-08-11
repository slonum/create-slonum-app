import { useAppSelector } from '@ui/redux';

type IRole = 'CHILD' | 'PARENT' | 'ADMIN';
export const useGetRole = (role: IRole) => {
  const isRole =
    useAppSelector((store) =>
      store.user.data?.roles?.some((r) => r.value == role),
    ) ?? false;

  return isRole;
};
