import { useState, forwardRef, useImperativeHandle } from 'react';
import styles from '../styles/Togglable.module.css';

const Togglable = forwardRef(({ buttonLabel, children }, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => setVisible(!visible);

  useImperativeHandle(ref, () => ({ toggleVisibility }));

  return (
    <div className={styles.container}>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility} className={styles.toggleButton}>
          <span className={styles.buttonGlow}></span>
          <span className={styles.buttonContent}>
            <span className={styles.buttonIcon}>✨</span>
            {buttonLabel}
          </span>
        </button>
      </div>
      <div style={showWhenVisible} className={styles.content}>
        {children}
        <button onClick={toggleVisibility} className={styles.cancelButton}>
          <span className={styles.cancelIcon}>✕</span>
          Cancel
        </button>
      </div>
    </div>
  );
});

export default Togglable;
