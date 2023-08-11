/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';

export const useNavigate = (scroll = true) => {
  const router = useRouter();
  return (value: string) => router.push(value, undefined, { scroll: scroll });
};
