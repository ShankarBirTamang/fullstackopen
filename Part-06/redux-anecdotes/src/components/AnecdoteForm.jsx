import { useDispatch } from "react-redux";
import { createAnecdoteWithThunk } from "../reducers/anecdoteReducer";
import { setNotificationWithThunk } from "../reducers/notificationReducer";
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
    dispatch(createAnecdoteWithThunk(newAnecdote));
    dispatch(
      setNotificationWithThunk(`you created "${newAnecdote.content}"`, 5)
    );
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
