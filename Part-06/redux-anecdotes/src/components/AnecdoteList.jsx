import { useSelector, useDispatch } from "react-redux";
import { updateAnecdoteWithThunk } from "../reducers/anecdoteReducer";
import { setNotificationWithThunk } from "../reducers/notificationReducer";

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
    dispatch(updateAnecdoteWithThunk(votedAnecdote));

    dispatch(
      setNotificationWithThunk(`you voted for "${votedAnecdote.content}"`, 5)
    );
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
