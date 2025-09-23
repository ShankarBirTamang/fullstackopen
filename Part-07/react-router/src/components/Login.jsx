import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Login = ({ setUser, setMessage }) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("username", event.target.username.value);
    setUser(event.target.username.value);
    setMessage(`welcome ${event.target.username.value}`);
    console.log("password", event.target.password.value);
    navigate("/notes");
  };

  return (
    <>
      <h2>Log In</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control type="text" name="username"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>password:</Form.Label>{" "}
          <Form.Control name="password" type="password" />
        </Form.Group>
        <Button type="submit">login</Button>
      </Form>
    </>
  );
};

export default Login;

/*
    <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>password:</Form.Label>
          <Form.Control
            type="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          login
        </Button>
      </Form>

      */
