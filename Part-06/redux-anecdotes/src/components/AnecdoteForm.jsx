import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import anecdotesService from "../services/anecdotes";
import {
  setNotification,
  clearNotification,
} from "../reducers/notificationReducer";
const getId = () => (100000 * Math.random()).toFixed(0);

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = async (e) => {
    e.preventDefault();
    const content = e.target.newAnecdote.value;
    e.target.newAnecdote.value = "";
    console.log("newAnecdote :", content);
    const newAnecdote = {
      content,
      id: getId(),
      votes: 0,
    };
    const createdAnecdote = await anecdotesService.create(newAnecdote);
    dispatch(createAnecdote(createdAnecdote));
    dispatch(setNotification(`you created "${createdAnecdote.content}"`));

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
