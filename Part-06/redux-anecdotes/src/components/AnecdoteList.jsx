import { useSelector, useDispatch } from "react-redux";
import { updateAnecdote } from "../reducers/anecdoteReducer";
import anecdotesService from "../services/anecdotes";
import {
  setNotification,
  clearNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filteredValue = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const vote = async (id) => {
    console.log("vote", id);
    const anecdoteToVote = anecdotes.find((anecdote) => anecdote.id === id);
    const votedAnecdote = {
      ...anecdoteToVote,
      votes: anecdoteToVote.votes + 1,
    };
    const updatedAnecdote = await anecdotesService.update(votedAnecdote);
    dispatch(updateAnecdote(updatedAnecdote));

    dispatch(setNotification(`you voted for "${updatedAnecdote.content}"`));

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
