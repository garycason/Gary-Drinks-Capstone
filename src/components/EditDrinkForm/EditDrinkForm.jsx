import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDrink, updateDrink } from '../../services/drinkService';
import './EditDrinkForm.css';

const EditDrinkForm = () => {
  const { drinkId } = useParams();
  const navigate = useNavigate();
  const [drinkData, setDrinkData] = useState({
    drinkName: '',
    drinkDescription: '',
    imageURL: ''
  });

  useEffect(() => {
    getDrink(drinkId).then(data => setDrinkData(data));
  }, [drinkId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDrinkData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateDrink(drinkId, drinkData);
      navigate('/drinks'); // Navigate back to the drinks list after successful update
    } catch (error) {
      console.error('Failed to update drink:', error);
    }
  };

  // Apply classes for styling
  return (
    <div className="edit-drink-form-container"> {/* Wrapper class for CSS styling */}
      <form onSubmit={handleSubmit} className="edit-drink-form"> {/* Form class for CSS styling */}
        <label className="edit-drink-label">
          Drink Name:
          <input
            type="text"
            name="drinkName"
            value={drinkData.drinkName}
            onChange={handleChange}
            required
            className="edit-drink-input"
          />
        </label>
        <label className="edit-drink-label">
          Drink Description:
          <textarea
            name="drinkDescription"
            value={drinkData.drinkDescription}
            onChange={handleChange}
            required
            className="edit-drink-textarea"
          />
        </label>
        <label className="edit-drink-label">
          Image URL:
          <input
            type="text"
            name="imageURL"
            value={drinkData.imageURL}
            onChange={handleChange}
            className="edit-drink-input"
          />
        </label>
        <button type="submit" className="edit-drink-submit">Update Drink</button>
      </form>
    </div>
  );
};

export default EditDrinkForm;
