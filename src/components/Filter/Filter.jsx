import css from 'components/ContactForm/ContactForm.module.css';
import { performFilter } from 'Redux/FilterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const hendleFilter = e => {
    dispatch(performFilter(e.currentTarget.value));
  };
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
