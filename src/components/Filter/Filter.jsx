import PropTypes from 'prop-types'; // ES6
import { FilterCont, FilterTitle } from './Filter.styled';

export const Filter = ({ value, onFilter }) => {
  return (<FilterCont>
<label htmlFor="filter">
    <FilterTitle>Find contacts by name</FilterTitle>
    <input name="filter" type="text" id="filter" value={value} onChange={onFilter}/>
</label>
  </FilterCont>);
};

Filter.propTypes = {
    value: PropTypes.string,
    onFilter: PropTypes.func.isRequired,
}
