import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { getAllDrinks } from '../../services/AllDrinksService';
import './DrinkListPage.css';
import { deleteDrink } from '../../services/deleteDrinkService.js';

const DrinkListPage = () => {
  const [drinks, setDrinks] = useState([]);
  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    getAllDrinks()
      .then((drinksData) => {
        setDrinks(drinksData);
      })
      .catch((error) => {
        console.error('Failed to fetch drinks:', error);
      });
  }, []);

  const handleDelete = async (drinkId) => {
    if(window.confirm('Are you sure you want to delete this drink?')) {
      try {
        await deleteDrink(drinkId);
        const updatedDrinks = drinks.filter(drink => drink.id !== drinkId);
        setDrinks(updatedDrinks);
        console.log(`Drink with id ${drinkId} deleted.`);
      } catch (error) {
        console.error('Failed to delete drink:', error);
      }
    }
  };

  return (
    <div>
      <h1>All Drinks</h1>
      <div>
        {drinks.map((drink) => (
          <div key={drink.id}>
            <h2>{drink.drinkName}</h2>
            <p>{drink.drinkDescription}</p>
            <img src={drink.imageURL} alt={drink.drinkName} style={{ maxWidth: '150px' }} />
            <button onClick={() => navigate(`/edit-drink/${drink.id}`)}>Edit Drink</button> 
            <button onClick={() => handleDelete(drink.id)}>Delete Drink</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkListPage;
