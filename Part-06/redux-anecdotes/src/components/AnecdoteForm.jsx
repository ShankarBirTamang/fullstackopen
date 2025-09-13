import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  clearNotification,
} from "../reducers/notificationReducer";
const getId = () => (100000 * Math.random()).toFixed(0);

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (e) => {
    e.preventDefault();
    const newAnecdote = e.target.newAnecdote.value;
    e.target.newAnecdote.value = "";
    console.log("newAnecdote :", newAnecdote);
    const newNote = {
      content: newAnecdote,
      id: getId(),
      votes: 0,
    };
    dispatch(createAnecdote(newNote));
    dispatch(setNotification(`you created "${newAnecdote}"`));

    //clear notification after 5 seconds
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };

  return (
    <div>
      {" "}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="newAnecdote" placeholder="Enter new anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
