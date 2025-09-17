import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MailingListSignUp from './components/MailingListSignUp.js'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Nav from './components/Nav.js'
import SignUp from './pages/SignUp.js'
import Footer from './components/Footer.js'
import './App.css'

function App() {
  return (
    <div class="page-container">
      <BrowserRouter>
        <Nav />
        <div class="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <MailingListSignUp />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
