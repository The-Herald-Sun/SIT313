import {Link} from 'react-router-dom'
import DevDeakinLogo from './DevDeakinLogo.js'
import SearchBar from './SearchBar.js'
import './Nav.css'

export default function Nav() {
    return (
        <div class="nav">
            <DevDeakinLogo></DevDeakinLogo>
            <SearchBar></SearchBar>
            <Link to="/post"><h2>Post</h2></Link>
            <Link to ="/login"><h2>Login</h2></Link>
        </div>
    )
}
