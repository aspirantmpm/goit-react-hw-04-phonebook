import propTypes from 'prop-types';
import { ContactItem } from './ContactItem';
import { List } from './GlobalStyle';

export const ContactList = ({ filterContacts, deleteContact }) => {
  return (
    <List>
      {filterContacts.map(({ name, number, id }) => (
        <ContactItem
          key={id}
          name={name}
          id={id}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  filterContacts: propTypes.array.isRequired,
  deleteContact: propTypes.func.isRequired,
};
