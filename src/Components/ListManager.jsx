import { useState } from 'react';
import PropTypes from 'prop-types'; // Importation de PropTypes
function ListManager({ initialItems }) {
  const [items, setItems] = useState(initialItems || []);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Liste :</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Ajouter un élément"
      />
      <button onClick={addItem}>Ajouter</button>
    </div>
  );
  
}
// Validation des props avec PropTypes
ListManager.propTypes = {
    initialItems: PropTypes.arrayOf(PropTypes.string)
  };
export default ListManager;