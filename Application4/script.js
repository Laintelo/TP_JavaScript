function CalculerDifference(){
  var form = document.forms[0];
  var annees = form.elements.annee;

  var selectedYear = parseInt(annees.value);
  var AnneeActuelle = new Date().getFullYear();
  var diff = AnneeActuelle - selectedYear;

  var resultat = document.getElementById("resultat")
  resultat.textContent = "Projection sur " + selectedYear + " : " + diff + " année(s) écoulée(s).";
}