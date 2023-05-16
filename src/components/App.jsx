import { useState } from 'react';
import shortid from 'shortid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Container } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = formData => {
    const { name } = formData;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      alert(`${name} is already in contacts`);

    const contact = { id: shortid.generate(), ...formData };

    setContacts(prev => [contact, ...prev]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
    </Container>
  );
};
