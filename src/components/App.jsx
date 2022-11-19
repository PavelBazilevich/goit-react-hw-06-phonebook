import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from 'components/App.module.css';

const DEFAULT_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const getContacts = key => {
  return JSON.parse(localStorage.getItem(key));
};

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return getContacts('contacts') ? getContacts('contacts') : DEFAULT_CONTACTS;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const hendleFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const repeatControlData = data => {
    const savedNameArray = contacts.map(({ name }) => name.toLowerCase());

    if (savedNameArray.includes(data.name.toLowerCase())) {
      alert(' Контакт вже є у телефонній книзі!');
      return;
    }

    return setContacts(prevContacts => [...prevContacts, data]);
  };

  const filterArr = () => {
    return contacts.filter(current =>
      current.name.toUpperCase().includes(filter.toUpperCase())
    );
  };

  const deleteContactFromContactList = idContact => {
    const newArr = contacts.filter(contact => contact.id !== idContact);
    setContacts(newArr);
  };

  return (
    <div className={css.form_box}>
      <h1>Phonebook</h1>
      <ContactForm onSubmitData={repeatControlData} />
      <h2>Contacts</h2>
      {<Filter hendleFilter={hendleFilter} filter={filter} />}
      <ContactList
        contacts={filterArr()}
        deleteById={deleteContactFromContactList}
      />
    </div>
  );
};
