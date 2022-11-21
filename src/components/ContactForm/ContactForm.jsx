import { useState } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/ContactSlice';
import { contactsFromRedux } from 'Redux/Selector';
import css from 'components/ContactForm/ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(contactsFromRedux);

  const repeatControlData = data => {
    const savedNameArray = contacts.map(({ name }) => name.toLowerCase());

    if (savedNameArray.includes(data.name.toLowerCase())) {
      alert(' Контакт вже є у телефонній книзі!');
      return;
    }
    return dispatch(addContact(data.name, data.number));
  };

  const hendleChenge = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const hendleSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    repeatControlData({ name, number, id });
    // reset
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form type="submit" onSubmit={hendleSubmit} className={css.contact_box}>
        <label>
          <input
            className={css.input}
            placeholder="Name"
            onChange={hendleChenge}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.input_phone}>
          <input
            className={css.input}
            placeholder="Number"
            onChange={hendleChenge}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={css.button_submit} type="submit">
            Add contact
          </button>
        </label>
      </form>
    </div>
  );
};
