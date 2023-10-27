import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your Immutable ZKEVM integration here.
    // If login is successful, redirect to the game page.
    // Example:
    // YourZKEVMLoginFunction().then(() => {
    //   history.push('/game');
    // });
    navigate("/game"); // Simulated login, remove this line when implementing real login.
  };

  return (
    <div>
      <h1>Simple Guessing Game</h1>
      <p>Please log in to play.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;

