// Fonction pour compter les occurrences d'éléments distincts
const countOccurrences = (arr) => {
    // Utiliser .flat() pour aplatir le tableau de tableaux en un seul tableau
    let flattenedArray = arr.flat();
  
    // Utiliser .reduce() pour compter les occurrences
    let occurrences = flattenedArray.reduce((acc, item) => {
      // Si l'élément existe déjà dans l'accumulateur, incrémenter le compteur
      if (acc[item]) {
        acc[item]++;
      } else {
        // Sinon, initialiser le compteur à 1
        acc[item] = 1;
      }
      return acc;
    }, {}); // Initialiser l'accumulateur comme un objet vide
  
    return occurrences;
  };
  
  // Exemple d'utilisation de la fonction
  let nestedArray = [["apple", "banana", "apple"], ["banana", "orange", "apple"], ["banana"]];
  let occurrences = countOccurrences(nestedArray);
  console.log(occurrences);
  