import {
  ContactsList,
  ContactItem,
  Number,
  Name,
  DeleteBtn,
  P,
} from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import React from 'react';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // console.log(filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <P>&#128100;</P>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <DeleteBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </DeleteBtn>
          </ContactItem>
        );
      })}
    </ContactsList>
  );
};

// Contacts.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.exact({
//             name: PropTypes.string.isRequired,
//             id: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//         }).isRequired,
//     ),
//     onDeleteContact: PropTypes.func.isRequired,
// }
