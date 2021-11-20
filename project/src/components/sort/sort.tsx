import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import { SortOption } from '../../const';
import { setSortOption } from '../../store/action';
import { Dispatch } from 'redux';
import { Actions } from '../../types/action';
import SortOptionItem from '../sort-option-item/sort-option-item';
import { useState } from 'react';

const mapStateToProps = ({currentSortOption}:State) => ({
  currentSortOption,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onSortOptionChange(currentSortOption: string) {
    dispatch(setSortOption(currentSortOption));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Sort ({currentSortOption, onSortOptionChange}:PropsFromRedux): JSX.Element {
  const [isClicked, setClicked] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setClicked(!isClicked)}>
        {currentSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--closed">
        {
          Object
            .values(SortOption)
            .map((sortOption) => <SortOptionItem key={sortOption} sortOptionName={sortOption} currentSortOption={currentSortOption} onSortOptionClick={onSortOptionChange}/>)
        }
      </ul>
    </form>
  );
}

export default connector(Sort);
export { Sort };
