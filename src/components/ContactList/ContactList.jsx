import PropTypes from 'prop-types';
import { nanoid } from 'nanoid/non-secure';
import css from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ contacts, deleteById }) => {
  const createMarcup = () => {
    return contacts.map(contact => {
      return (
        <li key={nanoid()} id={contact.id}>
          <span
            className={css.item_content}
          >{`${contact.name}: ${contact.number}`}</span>
          <button
            className={css.deleted_button}
            data-id={contact.id}
            onClick={() => deleteById(contact.id)}
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
  deleteById: PropTypes.func.isRequired,
};
