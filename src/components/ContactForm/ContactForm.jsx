import { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Form, FormLabel, Input } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  return (
    <Form>
      <FormLabel htmlFor={nameInputId}>
        <span>Name</span>
      </FormLabel>
      <FormLabel htmlFor={numberInputId}>
        <span>Number</span>
      </FormLabel>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
