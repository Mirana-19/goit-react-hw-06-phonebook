import { nanoid } from 'nanoid';
import { ContactForm, ContactList, Filter } from 'components';
import { useEffect, useState } from 'react';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const addContact = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }

    setContacts(prev => [
      { id: nanoid(), name: name, number: number },
      ...prev,
    ]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const filterContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      <ContactForm addContact={addContact} />
      <Filter filter={filter} onFilterChange={onFilterChange} />
      <ContactList
        contacts={filterContacts(filter)}
        deleteContact={deleteContact}
      />
    </>
  );
}
