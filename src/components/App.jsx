import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { contactsFromRedux } from 'Redux/Selector';
import { Layout, Title } from './App.styled';

export const App = () => {
  const contacts = useSelector(contactsFromRedux);
  return (
    <Layout>
      <Title>Phonebook</Title>
      <ContactForm />
      <h2>Contacts</h2>
      {<Filter />}
      {contacts.lenghts !== 0 && <ContactList contacts={contacts} />}
    </Layout>
  );
};
