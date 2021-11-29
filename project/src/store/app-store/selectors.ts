import { CitiesNames, SortOption } from '../../const';
import { Store } from '../../types/store';
import { StoreNameSpace } from '../../store/root-reducer';

export const getCurrentCity = (store: Store): CitiesNames =>
  store[StoreNameSpace.App].currentCity;

export const getSortOffersBy = (store: Store): SortOption =>
  store[StoreNameSpace.App].sortOffersBy;

