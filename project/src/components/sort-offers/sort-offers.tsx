import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SortOption } from '../../const';
import { setSortOffersBy } from '../../store/app-store/actions';
import { getSortOffersBy } from '../../store/app-store/selectors';

function SortOffers(): JSX.Element {
  const sortOffersBy = useSelector(getSortOffersBy);

  const dispatch = useDispatch();

  const [isSortMenuActive, setIsSortMenuActive] = useState(false);

  const sortRef = useRef<HTMLFormElement | null>(null);

  const toogleSortMenuHandle = () => setIsSortMenuActive((prev) => !prev);

  useEffect(() => {
    const handleOutsideClick = (evt: MouseEvent) => {
      if (sortRef.current?.contains(evt.target as Node)) {
        return;
      }
      setIsSortMenuActive(false);
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);


  return (
    <form
      ref={sortRef}
      className="places__sorting"
      action="#" method="get"
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={toogleSortMenuHandle}
        className="places__sorting-type"
        tabIndex={0}
      >
        {sortOffersBy}
        <svg
          className="places__sorting-arrow"
          width="7"
          height="4"
        >
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom
        ${isSortMenuActive ? 'places__options--opened' : ''}`}
      >
        {Object.values(SortOption).map((option) => {
          const isSelected = sortOffersBy === option;
          return (
            <li
              key={option}
              className={`places__option
              ${isSelected ?
              'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => {
                dispatch(setSortOffersBy(option));
                toogleSortMenuHandle();
              }}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default SortOffers;
