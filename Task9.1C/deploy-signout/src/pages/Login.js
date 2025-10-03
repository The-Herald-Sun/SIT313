import { auth } from '../firebase-config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { UserContext } from '../UserContext.js';

import './Login.css';

export default function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { currentUser, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  async function login(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    }
    catch (error) {
      switch (error.code) {
        case 'auth/invalid-credential':
          setError("Incorrect email or password. Please try again.");
          return;
        case 'auth/invalid-email':
          setError("The email address was not valid.");
          return;
        default:
          console.log(error);
          setError("An unexpected error occurred. Please try again.");
          return;
      }
    }
  }

  return (
    <div class="login">
      <p>Don't have an account? <Link to='/signup'>Sign Up</Link> Instead</p>
      <h1>Log In</h1>
      <form action={login}>
        <label htmlFor="email">Email:</label>
        <br />
        <input type="text" id="email" name="email" required />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Log In</button>
        <br />
        <span style={{ color: "red" }}>{error}</span>
      </form>
    </div>
  );
}
