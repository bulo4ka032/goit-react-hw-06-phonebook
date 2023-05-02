import PropTypes from 'prop-types'; // ES6
import { ContactsList, ContactItem, Number, Name, DeleteBtn, P } from './Contacts.styled';

export const Contacts = ({ contacts, onDeleteContact }) => {
    return (
        <ContactsList>
            { contacts.map(({id, name, number}) => {
                return (
                    <ContactItem key={id}>
                        <P>&#128100;</P>
                        <Name>{name}:</Name>
                        <Number>{number}</Number>
                        <DeleteBtn type='button' onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
                    </ContactItem>
                )
            })}
        </ContactsList>
    )
}


Contacts.propTypes = {
    contacts: PropTypes.arrayOf( 
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ),
    onDeleteContact: PropTypes.func.isRequired,
}