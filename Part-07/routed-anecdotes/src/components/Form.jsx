import { useState } from "react";
import { useField } from "../hooks";

export const CreateNew = (props) => {
  const { reset: resetContent, ...contentField } = useField("content");
  const { reset: resetAuthor, ...authorField } = useField("author");
  const { reset: resetInfo, ...infoField } = useField("info");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: contentField.value,
      author: authorField.value,
      info: infoField.value,
      votes: 0,
    });
  };

  const handleReset = () => {
    resetContent();
    resetAuthor();
    resetInfo();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...contentField} />
        </div>
        <div>
          author
          <input {...authorField} />
        </div>
        <div>
          url for more info
          <input {...infoField} />
        </div>

        <button type="submit">create</button>
        <button type="reset" onClick={handleReset}>
          reset
        </button>
      </form>
    </div>
  );
};
