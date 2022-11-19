import { nanoid } from 'nanoid/non-secure';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/ContactSlice';
import PropTypes from 'prop-types';
import css from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const createMarcup = () => {
    return filteredContacts.map(contact => {
      return (
        <li key={nanoid()} id={contact.id}>
          <span
            className={css.item_content}
          >{`${contact.name}: ${contact.number}`}</span>
          <button
            className={css.deleted_button}
            data-id={contact.id}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      );
    });
  };

  return <ul>{createMarcup()}</ul>;
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
