import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import anecdotesService from "./services/anecdotes";

const App = () => {
  const queryClient = useQueryClient();

  const results = useQuery({
    queryKey: ["anecdotes"],
    queryFn: anecdotesService.getAll,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const createAnecdoteMutation = useMutation({
    mutationFn: anecdotesService.create,
    onSuccess: (newAnecdote) => {
      // queryClient.invalidateQueries({ queryKey: ["anecdotes"] });
      const anecdotes = queryClient.getQueryData(["anecdotes"]);
      queryClient.setQueryData(["anecdotes"], anecdotes.concat(newAnecdote));
    },
  });

  const voteMutation = useMutation({
    mutationFn: anecdotesService.update,
    onSuccess: (updatedAnecdote) => {
      queryClient.setQueryData(["anecdotes"], (oldAnecdotes) =>
        oldAnecdotes.map((anecdote) =>
          anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote
        )
      );
    },
  });
  console.log(JSON.parse(JSON.stringify(results)));

  if (results.isLoading) {
    return <div>anecdotes service not available due to problems in server</div>;
  }

  const anecdotes = results.data;

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.newAnecdote.value;
    event.target.newAnecdote.value = "";
    if (content.length < 5) {
      alert("Anecdote must be at least 5 characters long.");
      return;
    }
    console.log("newAnecdote :", content);
    createAnecdoteMutation.mutate({ content, votes: 0 });
  };

  const vote = (id) => {
    const anecdote = anecdotes.find((a) => a.id === id);
    console.log("vote", id);
    voteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
  };

  return (
    <>
      <div>
        {anecdotes.map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
      </div>
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
    </>
  );
};

export default App;
