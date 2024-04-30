//updateDrinkService.jsx

export const updateDrink = async (drinkId, drinkData) => {
    try {
      const response = await fetch(`http://localhost:8088/drinks/${drinkId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(drinkData)
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error('Could not update the drink.');
      }
      return data;
    } catch (error) {
      console.error('Error updating drink:', error);
      throw error;
    }
  };
  
