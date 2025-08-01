import DevDeakinLogo from './devDeakinLogo.js'
import SearchBar from './searchBar.js'

export default function NavBar() {
    return (
        <div class="navbar">
            <DevDeakinLogo></DevDeakinLogo>
            <SearchBar></SearchBar>
            <h2>Post</h2>
            <h2>Login</h2>
        </div>
    )
}
