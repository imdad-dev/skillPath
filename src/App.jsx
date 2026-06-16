import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx';
import HomePage from "./pages/Home/Home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />

      <HomePage />
    </div>
  )
}

export default App
