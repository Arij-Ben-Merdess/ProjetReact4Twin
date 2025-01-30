const totalNotes = (students) => {
    // Ajouter un bonus de 15 points aux élèves ayant une note inférieure à 50
    let studentsWithBonus = students.map(student => ({
      ...student,
      marks: student.marks < 50 ? student.marks + 15 : student.marks
    }));
  
    // Filtrer les élèves ayant une note supérieure à 50
    let studentsAbove50 = studentsWithBonus.filter(student => student.marks > 50);
  
    // Calculer le total des notes des élèves filtrés
    let total = studentsAbove50.reduce((acc, student) => acc + student.marks, 0);
  
    return total;
  };
  
  // Exemple d'utilisation de la fonction
  let students = [
      { name: 'john', id: 123, marks: 90 },
      { name: 'alice', id: 456, marks: 45 },
      { name: 'bob', id: 789, marks: 30 }
  ];
  let total = totalNotes(students);
  console.log(`Le total des notes des élèves ayant une note supérieure à 50 est : ${total}`);
  