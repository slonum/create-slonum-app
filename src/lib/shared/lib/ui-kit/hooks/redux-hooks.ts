import { authActions } from '@ui/redux/Auth/slice';
import { useActions } from './useActions';

export const useAuthActions = () => useActions(authActions);
