// src/components/UserDrinks/AddDrinkForm.jsx
import { useState } from "react";
import "./AddDrinkForm.css";

const AddDrinkForm = () => {
  const [drinkData, setDrinkData] = useState({
    drinkName: "",
    drinkDescription: "",
    ingredients: {
      spirits: [],
      liqueurs: [],
      mixers: [],
      garnishes: [],
    },
    image: "",
  });

  // Array of spirits for the checkboxes
  const spirits = [
    "Vodka",
    "Lemon Vodka",
    "Lime Vodka",
    "Grapefruit Vodka",
    "Orange Vodka",
    "Watermelon Vodka",
    "Vanilla Vodka",
    "Gin",
    "Rum",
    "Tequila",
    "Bourbon",
    "Irish Whiskey",
    "Scotch",
    "Canadian Whiskey",
    "Tennessee Whiskey",
  ];
  const liqueurs = [
    "Baileys Irish Cream",
    "Cointreau",
    "Grand Marnier",
    "Disarono",
    "Sambuca",
    "Chambord",
    "Frangelico",
    "St-Germain",
    "Chartreuse",
    "Bénédictine",
    "Drambuie",
    "Tia Maria",
    "Limoncello",
    "Midori",
    "Galliano",
    "Jägermeister",
    "Southern Comfort",
    "Sloe Gin",
  ];
  const mixers = [
    "Club Soda",
    "Tonic Water",
    "Coke",
    "Ginger Ale",
    "Sprite",
    "Orange Juice",
    "Cranberry Juice",
    "Pineapple Juice",
    "Tomato Juice",
    "Grapefruit Juice",
    "Lime Juice",
    "Lemon Juice",
    "Simple Syrup",
    "Grenadine",
    "Bitters",
    "Sour Mix",
    "Red Bull",
    "Cream",
    "Tea",
    "Coffee",
  ];
  const garnishes = ["Mint", "Lemon Twist", "Olive", "Cherry", "Orange Slice"];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDrinkData({ ...drinkData, [name]: value });
  };

  const handleCheckboxChange = (category) => (event) => {
    const { value, checked } = event.target;
    const updatedCategory = checked
      ? [...drinkData.ingredients[category], value]
      : drinkData.ingredients[category].filter((item) => item !== value);

    setDrinkData({
      ...drinkData,
      ingredients: {
        ...drinkData.ingredients,
        [category]: updatedCategory,
      },
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setDrinkData({ ...drinkData, image: file });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submission logic to be implemented!");
  };

  return (
    <div className="add-drink-form">
      <h2>Add Your Drink</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="drinkName">Drink Name</label>
          <input
            type="text"
            id="drinkName"
            name="drinkName"
            value={drinkData.drinkName}
            onChange={handleInputChange}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="drinkDescription">Drink Description</label>
          <textarea
            id="drinkDescription"
            name="drinkDescription"
            value={drinkData.drinkDescription}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="drinkImage">Drink Image</label>
          <input
            type="file"
            id="drinkImage"
            name="drinkImage"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        

        {/* Spirits Checkboxes */}
        <div className="ingredient-section">
          <h3>Choose Spirits</h3>
          {spirits.map((spirit) => (
            <label key={spirit}>
              <input
                type="checkbox"
                value={spirit}
                checked={drinkData.ingredients.spirits.includes(spirit)}
                onChange={handleCheckboxChange("spirits")}
              />
              {spirit}
            </label>
          ))}
        </div>

        <div className="ingredient-section">
          <h3>Choose Liqueurs</h3>
          {liqueurs.map((liqueur) => (
            <label key={liqueur}>
              <input
                type="checkbox"
                value={liqueur}
                checked={drinkData.ingredients.liqueurs.includes(liqueur)}
                onChange={handleCheckboxChange("liqueurs")}
              />
              {liqueur}
            </label>
          ))}
        </div>

        <div className="ingredient-section">
          <h3>Choose Mixers</h3>
          {mixers.map((mixer) => (
            <label key={mixer}>
              <input
                type="checkbox"
                value={mixer}
                checked={drinkData.ingredients.mixers.includes(mixer)}
                onChange={handleCheckboxChange("mixers")}
              />
              {mixer}
            </label>
          ))}
        </div>
        <div className="ingredient-section">
          <h3>Choose Garnishes</h3>
          {garnishes.map((garnish) => (
            <label key={garnish}>
              <input
                type="checkbox"
                value={garnish}
                checked={drinkData.ingredients.garnishes.includes(garnish)}
                onChange={handleCheckboxChange("garnishes")}
              />
              {garnish}
            </label>
          ))}
        </div>

        <div className="form-submit-button">
          <button type="submit" className="submit-button">
            Add Drink
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDrinkForm;
