// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/Navbar'
import HomePage from './components/HomePage/HomePage'
import DrinkListPage from './components/DrinkListPage/DrinkListPage'
import AddDrinkForm from './components/UserDrinksPage/AddDrinkForm'
import EditDrinkForm from './components/EditDrinkForm/EditDrinkForm'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drinks" element={<DrinkListPage />} />
        <Route path="/add-drink" element={<AddDrinkForm />} />
        <Route path="/edit-drink/:drinkId" element={<EditDrinkForm />} />
      </Routes>
    </Router>
  )
}

export default App
