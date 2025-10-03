import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react' // ⬅️ Import useContext
import { signOut } from 'firebase/auth' // ⬅️ Import signOut
import { auth } from '../firebase-config.js' // ⬅️ Import auth (adjust path if necessary)
import { UserContext } from '../UserContext.js' // ⬅️ Import UserContext (adjust path)

import DevDeakinLogo from './DevDeakinLogo.js'
import SearchBar from './SearchBar.js'
import './Nav.css'

export default function Nav() {
  const navigate = useNavigate()
  // Get the current user state from context
  const { currentUser } = useContext(UserContext)

  async function handleSignOut() {
    try {
      await signOut(auth)
      // Redirect to login page after successful sign out
      navigate("/login")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  return (
    <div class="nav">
      <DevDeakinLogo />
      <SearchBar />
      <Link to="/post"><h2>Post</h2></Link>

      {currentUser ? (
        <Link onClick={handleSignOut}><h2>Sign Out</h2></Link>
      ) : (
        <Link to="/login"><h2>Login</h2></Link>
      )}
    </div>
  )
}
