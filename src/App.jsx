// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/Navbar'
import HomePage from './components/HomePage/HomePage'
import DrinkListPage from './components/DrinkListPage/DrinkListPage'


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drinks" element={<DrinkListPage />} />
        {/* ... other routes */}
      </Routes>
    </Router>
  )
}

export default App
