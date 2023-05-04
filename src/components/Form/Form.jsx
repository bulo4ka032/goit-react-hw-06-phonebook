import { Formik, Form, Field } from 'formik';
import { PhonebookForm, SubmitBtn, FormTitle } from './Form.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { customAlphabet } from 'nanoid';
import { Notify } from 'notiflix';
import React from 'react';
import * as Yup from 'yup';

const nanoid = customAlphabet('1234567890', 3);
const schema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  number: Yup.number().min(4).required(),
});
const initialValues = {
  id: '',
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id-' + nanoid(),
      name: values.name,
      number: values.number,
    };
    if (contacts.find(contact => contact.name === newContact.name)) {
      return Notify.warning(`${newContact.name} is already in contact`);
    }
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <PhonebookForm>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <label htmlFor="name">
            <FormTitle>Name</FormTitle>
            <Field type="text" name="name" />
          </label>
          <label htmlFor="number">
            <FormTitle>Tel</FormTitle>
            <Field type="tel" name="number" />
          </label>
          <SubmitBtn type="submit">Add contact</SubmitBtn>
        </Form>
      </Formik>
    </PhonebookForm>
  );
};
