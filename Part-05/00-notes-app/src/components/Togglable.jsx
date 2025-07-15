import { useState } from 'react';
import noteStyles from '../styles/Notes.module.css';
import styles from '../styles/App.module.css';

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

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
  )
}

export default Togglable