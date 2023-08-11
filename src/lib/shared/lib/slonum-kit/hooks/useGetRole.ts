type IRole = 'CHILD' | 'PARENT' | 'ADMIN';
export const useGetRole = (role: IRole, useSelector: any) => {
  const isRole =
    useSelector((store: { user: { data: { roles: any[] } } }) =>
      store.user.data?.roles?.some((r) => r.value == role),
    ) ?? false;

  return isRole;
};
