import React from 'react';
import { useForm } from 'react-hook-form';
import { addEvent } from '../services/api';
  
const AddEvent = ({ onEventAdded }) => {
  const { register, handleSubmit, reset } = useForm();
 
  const onSubmit = async (data) => {
    await addEvent(data);
    onEventAdded();
    setImageFile(null); // Réinitialiser le fichier image après l'envoi

    reset();
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]); // Récupérer le fichier image
  };
 
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Ajouter un Événement</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Titre:</label>
          <input 
            type="text" 
            className="form-control" 
            {...register('name', { required: true })} 
            placeholder="Titre" 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea 
            className="form-control" 
            {...register('description', { required: true })} 
            placeholder="Description" 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Prix:</label>
          <input 
            type="number" 
            className="form-control" 
            {...register('price', { required: true })} 
            placeholder="Prix" 
          />
        </div>
        <div className="mb-3">
        <label className="form-label">Télécharger une image:</label>
          <input 
            type="file" 
            className="form-control" 
            accept="image/*" 
            onChange={handleImageChange} 
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre de Billets:</label>
          <input 
            type="number" 
            className="form-control" 
            {...register('nbTickets', { required: true })} 
            placeholder="Nombre de Billets" 
          />
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
};
 
export default AddEvent;