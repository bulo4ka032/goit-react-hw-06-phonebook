import { Formik, Form, Field } from 'formik';
import {
  PhonebookForm,
  SubmitBtn,
  FormTitle,
} from './Form.styled';
import PropTypes from 'prop-types'; // ES6
import React from 'react';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(70).required(),
  number: Yup.number().min(4).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    onSubmit(newContact);
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
