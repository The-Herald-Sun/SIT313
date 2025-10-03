import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Nav from './components/Nav.js'
import SignUp from './pages/SignUp.js'
import Footer from './components/Footer.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import './App.css'

function App() {
  return (
    <div class="page-container">
      <BrowserRouter>
        <Nav />
        <div class="content">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/home" element={<ProtectedRoute />}>
              <Route index element={<Home />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
