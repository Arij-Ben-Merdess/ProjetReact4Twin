import PropTypes from 'prop-types';
import  { useState } from 'react';

function NotesManager({ initialNotes = [] }) {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState('');

  // Ajouter une nouvelle note
  const addNote = () => {
    const noteValue = parseFloat(newNote);
    if (!isNaN(noteValue) && noteValue >= 0 && noteValue <= 20) {
      setNotes([...notes, noteValue]);
      setNewNote('');
    } else {
      alert('Veuillez entrer une note valide entre 0 et 20.');
    }
  };

  // Supprimer une note spécifique
  const removeNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  // Calculer la moyenne des notes
  const calculateAverage = () => {
    if (notes.length === 0) return 0;
    const sum = notes.reduce((acc, note) => acc + note, 0);
    return (sum / notes.length).toFixed(2);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Gestionnaire de Notes</h1>

      <h2>Notes :</h2>
      {notes.length > 0 ? (
        <center>
        <table border="1">
          <tr>
            <th> Note</th>
            <th>Actions</th>
          </tr>
          {notes.map((note, index) => (
            <tr key={index}>
             <td> {note}{' '}</td>
              <td><button onClick={() => removeNote(index)}>Supprimer</button></td>
            </tr>
          ))}
        </table>
        </center>
      ) : (
        <p>Aucune note pour linstant.</p>
      )}

      <h3>Moyenne des notes : {calculateAverage()}</h3>

      <div>
        <input
          type="number"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Ajouter une note (0-20)"
          style={{ marginRight: '10px' }}
        />
        <button onClick={addNote}>Ajouter</button>
      </div>
    </div>
  );
}
// Validation des props avec PropTypes
NotesManager.propTypes = {
    initialNotes: PropTypes.arrayOf(PropTypes.string)
  };
export default NotesManager;