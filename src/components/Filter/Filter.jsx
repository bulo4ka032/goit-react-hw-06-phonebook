import { FilterCont, FilterTitle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setContactFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onFilter = evt => {
    dispatch(setContactFilter(evt.target.value));
  };

  return (
    <FilterCont>
      <label htmlFor="filter">
        <FilterTitle>Find contacts by name</FilterTitle>
        <input
          name="filter"
          type="text"
          id="filter"
          value={filter}
          onChange={onFilter}
        />
      </label>
    </FilterCont>
  );
};
