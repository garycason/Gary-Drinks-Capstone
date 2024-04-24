// src/components/DrinkListPage/DrinkListPage.jsx
import { useState, useEffect } from 'react';
import { getAllDrinks } from '../../services/AllDrinksService';
import './DrinkListPage.css';

const DrinkListPage = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    // Call the getAllDrinks service which returns a promise
    getAllDrinks()
      .then((drinksData) => {
        setDrinks(drinksData); // When the promise resolves, update the state
      })
      .catch((error) => {
        console.error('Failed to fetch drinks:', error);
      });
  }, []); // Empty dependency array means this effect will only run once on mount

  return (
    <div>
      <h1>All Drinks</h1>
      <div>
        {drinks.map((drink) => (
          <div key={drink.id}>
            <h2>{drink.drinkName}</h2>
            <p>{drink.drinkDescription}</p>
            <img src={drink.imageURL} alt={drink.drinkName} style={{ maxWidth: '150px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkListPage;
