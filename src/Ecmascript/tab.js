
// Importer la fonction Search
import { Search } from './Ecmascript/fonctions.js';

// Utiliser la fonction Search pour trouver un objet par ID
let searchedElement = Search(Tab, 2);
console.log(searchedElement);
// Variable globale pour stocker le dernier ID utilisé
let lastID = 0;

// Tableau d'objets
let Tab = [
    { name: 'Alice', age: 25, id: lastID++ },
    { name: 'Bob', age: 30, id: lastID++ }
];

// Ajouter une nouvelle entrée avec push
Tab.push({ name: 'Charlie', age: 35, id: lastID++ });

// Ajouter une nouvelle entrée avec unshift
Tab.unshift({ name: 'Dave', age: 40, id: lastID++ });

console.log(Tab);
