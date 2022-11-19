import PropTypes from 'prop-types';
import css from 'components/ContactForm/ContactForm.module.css';

export const Filter = ({ hendleFilter, filter }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        className={css.input}
        placeholder="Who are you looking for?"
        onChange={hendleFilter}
        value={filter}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  hendleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
