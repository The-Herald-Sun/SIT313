import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { collection, addDoc } from 'firebase/firestore'
import { db, auth } from '../firebase-config.js'
import './SignUp.css'


async function signUp(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const confPassword = formData.get("password-conf")
  const fname = formData.get("name")
  const lname = formData.get("surname")

  if (password !== confPassword) {
    alert("Passwords Must Match")
    return
  }

  try {
    const userCredential = createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return addDoc(collection(db, "users"), {
          uid: user.uid,
          fname: fname,
          lname: lname,
          email: email
        })
      })
  }
  catch (error) {
    console.error(error)
    alert(`Error ${error.message}`)
  }
}

export default function SingUp() {
  return (
    <div class="sign-up">
      <p>Have an account Already? <Link to='/login'>Log In</Link> Instead</p>
      <h1>Sign Up</h1>
      <form action={signUp}>
        <table>
          <tr>
            <td>
              <label for="name">Name:</label>
            </td>
            <td>
              <input type="text" id="name" name="name" required />
            </td>
          </tr>
          <tr>
            <td>
              <label for="surname">Surname:</label>
            </td>
            <td>
              <input type="text" id="surname" name="surname" required />
            </td>
          </tr>
          <tr>
            <td>
              <label for="email">Email:</label>
            </td>
            <td>
              <input type="text" id="email" name="email" required />
            </td>
          </tr>
          <tr>
            <td>
              <label for="password">Password:</label>
            </td>
            <td>
              <input type="password" id="password" name="password" required />
            </td>
          </tr>
          <tr>
            <td>
              <label for="password-conf">Confirm Password:</label>
            </td>
            <td>
              <input type="password" id="password-conf" name="password-conf" required />
            </td>
          </tr>
        </table>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}
