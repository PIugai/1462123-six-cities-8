import { AuthStatus } from '../../const';
import { Store } from '../../types/store';
import { User } from '../../types/user';
import { StoreNameSpace } from '../../store/root-reducer';

export const getAuthStatus = (store: Store): AuthStatus =>
  store[StoreNameSpace.Auth].authStatus;

export const getUser = (store: Store): User | null => store[StoreNameSpace.Auth].user;
