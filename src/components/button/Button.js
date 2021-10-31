import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button ({ onClick }) {
  return (
    <div className={s.ButtonWraper}>
      <button className={s.Button} type="button"  onClick={() => onClick()}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;