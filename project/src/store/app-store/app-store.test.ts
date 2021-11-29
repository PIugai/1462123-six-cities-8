import { CitiesNames, SortOption } from '../../const';
import { changeCurrentCity, setSortOffersBy } from './actions';
import { appReducer } from './app-store';

describe('Reducer: offersReducer', () => {

  it('should update curent city by current value', () => {
    const state = {
      currentCity: CitiesNames.Paris,
      sortOffersBy: SortOption.Popular,
    };
    expect(appReducer(state, changeCurrentCity(CitiesNames.Cologne)))
      .toEqual({
        currentCity: CitiesNames.Cologne,
        sortOffersBy: SortOption.Popular,
      });
  });

  it('should update curent sort option by current value', () => {
    const state = {
      currentCity: CitiesNames.Paris,
      sortOffersBy: SortOption.Popular,
    };
    expect(appReducer(state, setSortOffersBy(SortOption.TopRatedFirst)))
      .toEqual({
        currentCity: CitiesNames.Paris,
        sortOffersBy: SortOption.TopRatedFirst,
      });
  });

});
