import { useState, forwardRef, useImperativeHandle } from 'react';
import noteStyles from '../styles/Notes.module.css';
import styles from '../styles/App.module.css';
import PropTypes from 'prop-types';

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div className={styles.notesContent}>
      <div style={hideWhenVisible}>
        <button
          className={`${noteStyles.togglableButton} ${noteStyles.togglableButtonPrimary}`}
          onClick={toggleVisibility}
        >
          {props.buttonLabel}
        </button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button
          className={`${noteStyles.togglableButton} ${noteStyles.togglableButtonSecondary}`}
          onClick={toggleVisibility}
        >
          Cancel
        </button>
      </div>
    </div>
  );
});

Togglable.displayName = 'Togglable';
Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

export default Togglable;
