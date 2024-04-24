// src/App.jsx
import HomePage from './components/HomePage/HomePage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DrinkListPage from './components/DrinkListPage/DrinkListPage';
// Import other components you might route to

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Add your home page component here */}
        <Route path="/drinks" element={<DrinkListPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
