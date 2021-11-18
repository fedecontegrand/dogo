import './App.css'
import { Route, Routes } from 'react-router'
import LandingPage from './views/LandingPage'
import Home from './views/Home'
import SimpleSidebar from './components/NavBar'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={<SimpleSidebar children={<Home />}/>} />
    </Routes>
  )
}

export default App
