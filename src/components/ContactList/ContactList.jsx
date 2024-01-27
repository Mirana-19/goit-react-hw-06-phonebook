import { Button, Title } from 'styles/Shared.styles';
import { Book, Contact, Item } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <Title>Contacts</Title>
      <Book>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <Contact>
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
            </Contact>
            <Button onClick={() => deleteContact(contact.id)} type="button">
              Delete
            </Button>
          </Item>
        ))}
      </Book>
    </>
  );
};
