function surbrillance(){
  var form = document.forms[0]; // Accéder au premier formulaire de la page
  var textSaisi = form.elements.textSaisi; // Accéder à l'input de saisi de texte
  var textAfficher = form.elements.textAfficher; // Accéder à l'input d'affichage de texte
  // Affecter le contenu saisi dans le deuxième input.
  textAfficher.value = textSaisi.value; 
}

textAfficher.addEventListener('keydown', function(event) {
  event.preventDefault(); // Empêche la saisie dans le champ d'affichage
  alert("Impossible de saisir dans ce champ !")
});
