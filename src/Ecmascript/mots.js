const findLongestWord = (mots) => {
    let longeurMot = mots.map(mot=>({mot,longeur:mot.length}));
    let longest = longeurMot.reduce((a,b)=>(a.longeur>b.longeur)?a:b);
    // Retourner le mot le plus long et sa longueur
  return {mot: longest.mot, longueur: longest.longueur};
};
// Exemple d'utilisation de la fonction
let motsArray = ["pomme", "banane", "fraise", "myrtille", "raisin"];
let longestMot = findLongestWord(motsArray);
console.log(`Le mot le plus long est "${longestMot.mot}" avec une longueur de ${longestMot.longueur}`);
