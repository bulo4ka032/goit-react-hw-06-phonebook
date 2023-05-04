import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import {
  PhoneBook,
  ContactsTitle,
  ContactsWrapper,
} from 'components/App.styled';

export const App = () => {
  return (
    <PhoneBook>
      <ContactForm />
      <ContactsWrapper>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <Contacts />
      </ContactsWrapper>
    </PhoneBook>
  );
};
