import css from './Feedback.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onIncrement }) => (
  <ul className={css.feedback}>
    {options.map(option => (
      <li key={option}>
        <button
          onClick={() => {
            onIncrement(option);
          }}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};
