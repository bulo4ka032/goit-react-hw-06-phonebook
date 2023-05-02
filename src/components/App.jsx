import { useState, useEffect } from 'react';
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix';
import {
  PhoneBook,
  ContactsTitle,
  ContactsWrapper,
} from 'components/App.styled';
import { customAlphabet } from 'nanoid';
import { initialContacts } from 'data/initialContacts';
import { useLocalStorage } from 'hooks/useLocalStorage';

const LS_KEY = 'contacts';
const nanoid = customAlphabet('1234567890', 3);
const id = 'id-' + nanoid();

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(LS_KEY, initialContacts);
  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem(LS_KEY, JSON.stringify(contacts)),
    [contacts]
  );

  const handleSubmit = newContact => {
    setContacts(prevContacts => {
      if (prevContacts.find(contact => contact.name === newContact.name)) {
        Notify.warning(`${newContact.name} is already in contact`);
        return prevContacts;
      }
      newContact.id = id;
      return [newContact, ...prevContacts];
    });
  };

  const handleFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <PhoneBook>
      <ContactForm onSubmit={handleSubmit}></ContactForm>
      <ContactsWrapper>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} onFilter={handleFilter} />
        <Contacts
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </ContactsWrapper>
    </PhoneBook>
  );
};
