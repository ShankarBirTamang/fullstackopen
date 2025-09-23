import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

const Login = ({ setUser, setMessage }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    console.log("username", username);
    console.log("password", password);

    setUser(username);
    setMessage(`Welcome ${username}`);
    navigate("/notes");
  };

  return (
    <>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Username"
            name="username"
            type="text"
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default Login;
