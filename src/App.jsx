// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar'; // Correct import for your NavBar
import HomePage from './components/HomePage/HomePage';
import DrinkListPage from './components/DrinkListPage/DrinkListPage';
import AddDrinkForm from './components/UserDrinksPage/AddDrinkForm.jsx';

// ... Additional imports if you have more components

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/drinks" element={<DrinkListPage />} />
        <Route path="/add-drink" element={<AddDrinkForm />} />

        {/* ... other routes */}
      </Routes>
    </Router>
  );
};

export default App;
