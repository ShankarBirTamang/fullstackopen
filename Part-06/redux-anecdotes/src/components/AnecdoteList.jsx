import { useSelector, useDispatch } from "react-redux";
import { voteFor } from "../reducers/anecdoteReducer";
import {
  setNotification,
  clearNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filteredValue = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log("vote", id);
    dispatch(voteFor(id));
    const votedAnecdote = anecdotes.find((anecdote) => anecdote.id === id);
    dispatch(setNotification(`you voted for "${votedAnecdote.content}"`));

    //clear notification after 5 seconds
    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };

  //sort anecdotes by votes in descending order ( highest votes first)
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);
  const filteredAnecdotes = sortedAnecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filteredValue.toLowerCase())
  );
  return (
    <div>
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
