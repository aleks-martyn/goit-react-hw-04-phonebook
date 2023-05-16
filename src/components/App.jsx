import { useState } from 'react';
import shortid from 'shortid';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Container } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
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

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(({ id }) => id !== contactId));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList users={filteredContacts} onDeleteContact={deleteContact} />
    </Container>
  );
};
