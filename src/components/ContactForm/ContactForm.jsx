import { useState } from 'react';
import { Button, Title } from 'styles/Shared.styles';
import { Input, Label, Phonebook } from './ContactForm.styled';

export function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = e => {
    const value = e.target.value;

    e.target.name === 'name' ? setName(value) : setNumber(value);
  };

  const onSubmit = e => {
    e.preventDefault();

    addContact({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Phonebook onSubmit={onSubmit}>
        <Label>
          Name
          <Input
            value={name}
            onChange={onInputChange}
            type="text"
            name="name"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            value={number}
            onChange={onInputChange}
            type="tel"
            name="number"
            required
          />
        </Label>
        <Button>Add contact</Button>
      </Phonebook>
    </>
  );
}
