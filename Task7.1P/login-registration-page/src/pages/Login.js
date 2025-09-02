import { auth } from '../firebase-config.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'


export default function Login() {
  const navigate = useNavigate()

  async function login(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    }
    catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert("Incorrect password. Please try again.");
          return;
        case 'auth/user-not-found':
          alert("No account found with that email address.");
          return;
        case 'auth/invalid-email':
          alert("The email address is not valid.");
          return;
        default:
          alert(error.message);
          return;
      }
    }
  }

  return (
    <div class="login">
      <p>Don't have an account? <Link to='/signup'>Sign Up</Link> Instead</p>
      <h1>Log In</h1>
      <form action={login}>
        <label for="email">Email:</label>
        <br />
        <input type="text" id="email" name="email" required />
        <br />
        <label for="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Log In</button>
      </form>
    </div>
  )
}

