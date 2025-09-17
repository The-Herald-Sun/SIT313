import "./MailingListSignUp.css"
import { useState } from "react"


export default function MailingListSignUp() {
  const [email, setEmail] = useState('')
  const API_URL = process.env.REACT_APP_API_URL

  async function SignUp() {
    const response = await fetch(`http://localhost:2900/api/v1/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    console.log(email)
  }



  return (
    <div className="mailing-list-sign-up">
      <h2>SIGN UP FOR OUR DAILY INSIDER</h2>
      <div className="email">
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="button" onClick={SignUp}>Sign Up</button>
    </div>
  )
}
