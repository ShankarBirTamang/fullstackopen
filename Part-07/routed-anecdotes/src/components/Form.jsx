import { useState } from "react";
import { useField } from "../hooks";

export const CreateNew = (props) => {
  //   const [content, setContent] = useState("");
  //   const [author, setAuthor] = useState("");
  //   const [info, setInfo] = useState("");
  const contentField = useField("content");
  const authorField = useField("author");
  const infoField = useField("info");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: contentField.value,
      author: authorField.value,
      info: infoField.value,
      votes: 0,
    });
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
        <button>create</button>
      </form>
    </div>
  );
};
