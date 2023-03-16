import propTypes from 'prop-types';
import { Find, FindInput, Label } from './GlobalStyle';

export const ContactFind = ({ filter, onFilter }) => {
  return (
    <Find>
      <Label htmlFor="filter">Find contacts by name</Label>
      <div>
        <FindInput
          type="text"
          name="filter"
          value={filter}
          onChange={onFilter}
        />
      </div>
    </Find>
  );
};

ContactFind.propTypes = {
  onFilter: propTypes.func,
  filter: propTypes.string,
};
