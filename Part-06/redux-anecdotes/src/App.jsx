import { useSelector, useDispatch } from "react-redux";
import { voteFor, createAnecdote } from "./reducers/anecdoteReducer";
import { useState } from "react";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();
  const [newAnecdote, setNewAnecdote] = useState("");

  const vote = (id) => {
    console.log("vote", id);
    dispatch(voteFor(id));
  };

  const addAnecdote = (e) => {
    e.preventDefault();
    dispatch(createAnecdote(newAnecdote));
    setNewAnecdote("");
  };

  //sort anecdotes by votes in descending order ( highest votes first)
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input
            value={newAnecdote}
            onChange={(e) => setNewAnecdote(e.target.value)}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default App;
