import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("username", event.target.username.value);
    setUser(event.target.username.value);
    console.log("password", event.target.password.value);
    navigate("/notes");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          username <input name="username" />
        </div>
        <div>
          password <input name="password" type="password" />
        </div>
        <button type="submit">login</button>
      </form>
    </>
  );
};

export default Login;
