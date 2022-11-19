import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/ContactSlice';
import css from 'components/App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const contactsFromRedux = useSelector(state => state.contacts);

  const repeatControlData = data => {
    const savedNameArray = contactsFromRedux.map(({ name }) =>
      name.toLowerCase()
    );

    if (savedNameArray.includes(data.name.toLowerCase())) {
      alert(' Контакт вже є у телефонній книзі!');
      return;
    }
    return dispatch(addContact(data.name, data.number));
  };

  return (
    <div className={css.form_box}>
      <h1>Phonebook</h1>
      <ContactForm onSubmitData={repeatControlData} />
      <h2>Contacts</h2>
      {<Filter />}
      {contactsFromRedux.lenghts !== 0 && (
        <ContactList contacts={contactsFromRedux} />
      )}
    </div>
  );
};
